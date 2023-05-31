/*------------------------------------------------------------------------------
   About      : Base logger
   
   Created on : Thu Dec 22 2022
   Author     : Siddharth Garg
   
   Copyright (c) 2022 Bidgely. All rights reserved.
------------------------------------------------------------------------------*/

import { RunContextApp }        from "./RCApp"
import { omit ,keysIn }         from 'lodash'

export enum LOG_LEVEL {DEBUG = 1, STATUS, WARN, ERROR, NONE }

const LEVEL_CHARS : string[] = ['', '', '', '*** ', '!!! ']

const CONSOLE_FN_MAP : ((message?: any, ...optionalParams: any[]) => void)[] = []

CONSOLE_FN_MAP[LOG_LEVEL.DEBUG]   = console.log
CONSOLE_FN_MAP[LOG_LEVEL.STATUS]  = (logMsg) => console.info(`%c${logMsg}`, 'color: #005D29')
CONSOLE_FN_MAP[LOG_LEVEL.WARN]    = console.warn || console.log
CONSOLE_FN_MAP[LOG_LEVEL.ERROR]   = console.error || console.log

export class RCLogger {

  public lastLogTS = 0
  
  constructor(public rc : RunContextApp) {
    
  }

  logToConsole(level: LOG_LEVEL, logMsg: string) : void {
    const fn: any = CONSOLE_FN_MAP[level]
    fn.call(console, logMsg)
  }

  // Replacer Function to take Care of cyclic object references
  private safeReplacerFn() {
    
    const seen : any [] = []
    return function(key : string, value : any) : any {
      if (value != null && typeof value == "object") {
        if (seen.indexOf(value) >= 0) {
          return
        }
        seen.push(value);
      }
      return value
    }
  }

  protected objectToString(obj: object, maxLevels: number, pendingLevels ?:number): string {
    
    const isArray = Array.isArray(obj),
          isSet   = obj instanceof Set,
          isMap   = obj instanceof Map,
          MAX_KEYS = 20

    let buffer              = '', 
        str       : string, 
        value, 
        len       : number, 
        valType, 
        keys      : string[], 
        keyLength : number

    if (pendingLevels === undefined) pendingLevels = maxLevels    
    if (isSet || isMap) {
      keys = (obj as any).keys()
      keyLength = (obj as any).size
    } else {
      keys = Object.keys(obj)
      keyLength = keys.length
    }
    
    if (typeof(obj) === 'function') {
      const fn = obj
      return maxLevels === pendingLevels ? fn.toString() : 'function ' + fn.name
    }

    //console.log(`obj: ${obj} ,${typeof(obj)}, ${obj.toString()} , ${typeof(obj.toString())}`)
    if (!isArray && typeof(obj.toString) === 'function') {
      const str = obj.toString()
      if(typeof(str) === 'number' || (typeof(str)==='string' && !str.startsWith('[object'))) return str
    }
    
    for (const key of keys) {
      
      if (buffer) buffer += ', '
      if (key === String(MAX_KEYS) && keyLength - MAX_KEYS > 1) {
        buffer += (keyLength - MAX_KEYS) + ' more...'
        break
      }
      
      if (!isArray && !isSet) buffer += key + ':'
      
      value   = isSet ? key : (isMap ? (obj as Map<any, any>).get(key) : (obj as any)[key])
      valType = typeof(value)
      
      if (valType === 'function') {
          
        str = value.name
        buffer += str ? str + '()' : value.toString().substr(0, 50)
        
      } else if ((!value) || (valType !== 'object')) {
        
        try{
          str = String(JSON.stringify(value))
        }catch(error){
          // Take care of circular Objects
          str = String(JSON.stringify(value , this.safeReplacerFn()))
        }
        buffer += str.length > 50 ? str.substr(0, 50) + '..' : str
        
      } else {
        
        if (!pendingLevels) {
          
          if (Array.isArray(value)) {
            len = value.length
            buffer += '[' + (len ? len + 'x' : '') + ']'
          } else {
            len = Object.keys(value).length
            buffer += '{' + (len ? len + 'x' : '') + '}'
          }
          
        } else {
          buffer += this.objectToString(value, maxLevels, pendingLevels - 1)
        }
      }
    }
    return isArray || isSet ? '[' + buffer + ']' : '{' + buffer + '}'
  }

  private format(dt: number|Date, formatStr: string) : string {

    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December']

    const date = dt instanceof Date ? dt as Date : new Date(dt as number)
      
    // +? is a non-greedy repeat
    return formatStr.replace(/%\w+?%/g, function(token): any {
      function get12Hour(date: Date) {
        let hours = date.getHours()
        if (hours > 12) hours -= 12
        if (hours === 0) hours = 12
        return hours
      }
      
      function doubleDigit(val: number) {
        return ('0' + String(val)).slice(-2)
      }
      
      token = token.slice(1, -1)
      
      switch (token) {
      case 'yyyy':
        return date.getFullYear()
      case 'yy':
        return doubleDigit(date.getFullYear())
      case 'y':
        return Number(doubleDigit(date.getFullYear()))
      case 'mmmm':
        return MONTHS[date.getMonth()]
      case 'mmm':
        return MONTHS[date.getMonth()].substr(0, 3)
      case 'mm':
        return doubleDigit(date.getMonth()+1)
      case 'm':
        return date.getMonth()+1
      case 'dd':
        return doubleDigit(date.getDate())
      case 'd':
        return date.getDate()
      case 'hh': // max 23
        return doubleDigit(date.getHours())
      case 'h':
        return date.getHours()
      case 'HH': // max 12
        return doubleDigit(get12Hour(date))
      case 'H':
        return get12Hour(date)
      case 'MM': 
      case 'nn': 
        return doubleDigit(date.getMinutes())
      case 'M':
      case 'n': 
        return date.getMinutes()
      case 'SS': 
      case 'ss': 
        return doubleDigit(date.getSeconds())
      case 'S':
      case 's':
        return date.getSeconds()
      case 'ms':
        return ('00' + String(date.getMilliseconds())).slice(-3)
      case 'am':
      case 'pm':
        return date.getHours() > 11 ? 'pm' : 'am'
      case 'AM':
      case 'PM':
        return date.getHours() > 11 ? 'PM' : 'AM'
      default:
        return '%' + token + '%'
      }
    })
  }

  private durationStr(ts: number): string {

    const ms = ts - this.lastLogTS

    if (!this.lastLogTS) {
      this.lastLogTS = ts
      return '---'
    }

    this.lastLogTS = ts
    
    if (ms < 10)  return '  ' + ms
    if (ms < 100) return  ' ' + ms
    if (ms < 1000) return ms.toString()
    if (ms < 10000) return (ms / 1000).toFixed(1)
    return '+++'
  }

  public log(moduleName: string, level: LOG_LEVEL, args: any[]) : string {

    const refLogLevel = this.rc.runState.moduleLLMap[moduleName] || this.rc.initConfig.logLevel

    if (level < refLogLevel || !this.rc.initConfig.consoleLogging) return 'not logging'

    const curDate = new Date(),
          dateStr = this.format(curDate, '%dd%/%mm% %hh%:%MM%:%ss%.%ms%'),
          durStr  = this.durationStr(curDate.getTime())

    let buffer : string = args.reduce((buf, val) => {
      let strVal
      if (val instanceof Error) {
        // Error.name typically has class name of the ErrorCLass like EvalError
        // Error.message has the user readable message, this is also included in the stack
        strVal = val.stack || `Error ${val.name}: ${val.message} (no stack)`
        const errObj = omit(val , ['message'])
        if(keysIn(errObj).length){
          strVal = this.objectToString(errObj , 5) + ' '+ strVal
        }
        if(val.message && strVal.indexOf(val.message)==-1){
          // case when stack does not contain the message
          strVal = val.message + ' '+ strVal
        }
      } else if (val && (typeof(val) === 'object')) {
        strVal = this.objectToString(val, 2)
      } else {
        strVal = String(val).trim()
      }
      return buf ? buf + ' ' + strVal : strVal
    }, '')

    if (!this.rc.initConfig.consoleLogging && buffer.length > 500) buffer = buffer.substr(0, 500)

    const logStr = `${LEVEL_CHARS[level]}${dateStr} ${durStr} ${moduleName}: ${buffer}`
    
    if (this.rc.initConfig.consoleLogging) {
      this.logToConsole(level, logStr)
    }

    return buffer
  }

}