/*------------------------------------------------------------------------------
   About      : Global run context for the App
   
   Created on : Thu Dec 22 2022
   Author     : Siddharth Garg
   
   Copyright (c) 2022 Bidgely. All rights reserved.
------------------------------------------------------------------------------*/
import { AnalyticsScreenManager }   from "./analytics/AnalyticsScreenManager"
import { ConfigManager }            from "./config/ConfigManager"
import { TranslationManager }       from "./config/TranslationManager"
import { LOG_LEVEL, RCLogger }      from "./RCLogger"
import { ApiClient }                from "./http/ApiClient"
import { SessionManager }           from "./session/SessionManager"
import { UiRouter }                 from "./UiRouter"
import { BglUtility }               from "./utility/BglUtility"
import { DateUtils }                from "./utility/DateUtils"
import { AppFlavour }               from "../configs/AppFlavours"
import { EventSystem }              from "./events/EventSystem"
import { ThemeManager } from "./config/ThemeManager"

export const RUN_MODE = { 
  DEV : "DEV", 
  QA : "QA", 
  UAT : "UAT", 
  PROD : "PROD",
  PRODUCT_QA : "PRODUCT_QA"
}

export class InitConfig {
  
  constructor(public runMode         : string,
              public logLevel        : LOG_LEVEL,
              public consoleLogging  : boolean) {

    if ((runMode === RUN_MODE.PROD || runMode === RUN_MODE.UAT) && logLevel !== LOG_LEVEL.NONE) {
      console.log('You must turn off logging in production mode')
    }
  }
}

export class RunState {
  moduleLLMap    : { [key : string] : any } = {}
  modLogLevel    : LOG_LEVEL = LOG_LEVEL.NONE
  moduleNameMap  : WeakMap<any, string>   = new WeakMap()
}

export class RunContextApp {

  public logger       !: RCLogger
  public analytics    !: AnalyticsScreenManager
  public session      !: SessionManager
  public config       !: ConfigManager
  public translations !: TranslationManager
  public utils        !: BglUtility
  public dateUtils    !: DateUtils
  public uiRouter     !: UiRouter
  public apiClient    !: ApiClient
  public events       !: EventSystem
  public theme        !: ThemeManager

  // TODO : Bridge

  constructor(public initConfig   : InitConfig,
              public runState     : RunState) {

  }

  init() {

    const serverUrl = AppFlavour.getFlavour().backendApiUrl

    this.logger = new RCLogger(this)
    this.analytics = new AnalyticsScreenManager(this)
    this.session = new SessionManager(this)
    this.config = new ConfigManager(this)
    this.translations = new TranslationManager(this)
    this.utils = new BglUtility(this)
    this.dateUtils = new DateUtils(this)
    this.uiRouter = new UiRouter(this)
    this.apiClient = new ApiClient(this, `https://${serverUrl}`, true)
    this.events = new EventSystem(this)
    this.theme = new ThemeManager(this)
  }

  public setupLogger(obj : any, moduleName : string, logLevel ?: LOG_LEVEL) {

    this.runState.moduleNameMap.set(obj, moduleName)

    if (this.initConfig.logLevel !== LOG_LEVEL.NONE && logLevel !== undefined) {
      this.runState.moduleLLMap[moduleName] = logLevel
      const keys = Object.keys(this.runState.moduleLLMap)
      this.runState.modLogLevel = LOG_LEVEL.NONE

      for (const key of keys) {
        if (this.runState.moduleLLMap[key] < this.runState.modLogLevel) {
          this.runState.modLogLevel = this.runState.moduleLLMap[key]
        }
      }
    }
  }

  getLogLevel() : LOG_LEVEL {
    return this.initConfig.logLevel > this.runState.modLogLevel ? 
           this.runState.modLogLevel : this.initConfig.logLevel
  }

  /**
   * Tries to figure out the name of the context
   * @param obj: this 
   */
  getName(obj : any) : string {
    return obj ? (this.runState.moduleNameMap.get(obj) || obj.name || 
                 (obj.constructor ? obj.constructor.name : '?')) : '?'
  }

  isDebug() : boolean {
    return this.getLogLevel() <= LOG_LEVEL.DEBUG
  }

  isStatus() : boolean {
    return this.getLogLevel() <= LOG_LEVEL.STATUS
  }

  isWarn() : boolean {
    return this.getLogLevel() <= LOG_LEVEL.WARN
  }

  isError() : boolean {
    return this.getLogLevel() <= LOG_LEVEL.ERROR
  }

  isAssert() : boolean {
    return this.initConfig.runMode !== RUN_MODE.PROD
  }

  debug(moduleName : string, ...args : any[]) {
    if (this.isDebug()) return this.logger.log(moduleName, LOG_LEVEL.DEBUG, args)
  }

  status(moduleName : string, ...args : any[]) {
    if (this.isStatus()) return this.logger.log(moduleName, LOG_LEVEL.STATUS , args)
  }

  warn(moduleName : string, ...args : any[]) {
    if (this.isWarn()) return this.logger.log(moduleName, LOG_LEVEL.WARN , args)
  }

  error(moduleName : string, ...args : any[]) {
    if (this.isError()) return this.logger.log(moduleName, LOG_LEVEL.ERROR, args)
  }

  assert(moduleName : string, condition : any, ...args : any[]) {
    if (this.isAssert() && !condition) {
      args.unshift('Assertion failed!')
      throw(new Error(this.logger.log(moduleName, LOG_LEVEL.ERROR, args)))
    }
  }

  hasLogged() : boolean {
    return this.logger.lastLogTS !== 0
  }

}