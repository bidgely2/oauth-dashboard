import { add, 
         addMinutes, 
         differenceInCalendarDays, 
         differenceInMonths, 
         endOfMonth, 
         format, 
         getYear, 
         isBefore, 
         isValid,
         parse,
         sub, 
         fromUnixTime,
         startOfDay
       }                                          from 'date-fns'
import { it, enUS, enCA, enAU, enGB, enIE, 
         enNZ, sk, fr, frCA, de, es, ja
       }                                          from 'date-fns/locale'
import { RunContextApp }                          from '../RCApp'

export class DateUtils {

  private dateFnsLocaleMap : any

  constructor(private rc : RunContextApp) {

    this.dateFnsLocaleMap = {
    }
  }

  /** Returns local date with timezone offset returning UTC date in local  */
  getDateInUTC(date : Date) {
    return addMinutes(date, date.getTimezoneOffset())
  }

  getTimestampInUTC(date : Date) {
    const d = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    return d / 1000
  }

  getDateForDateString(dateStr : string, inputDateFormat : string, dateInLocale : boolean) {

    if (!inputDateFormat) throw new Error(`Missing inputDateFormat in formatDate`)
    inputDateFormat = inputDateFormat.replace(/A/gi, 'a')
    inputDateFormat = inputDateFormat.replace(/D/gi, 'd')
    inputDateFormat = inputDateFormat.replace(/Y/gi, 'y')
  
    const options = {} as any
    if (dateInLocale) options.locale = this.dateFnsLocaleMap[this.rc.session.getUserLocale()]
  
    return parse(dateStr, inputDateFormat, new Date(), options)
  }

  formatDate(inp : Date | string | number, outputDateFormat : string,
             inputDateFormat ?: string, formatInLocale = true) {

    if (!inp) {
      this.rc.warn(this.rc.getName(this), `Passed invalid input Date to formatDate Util : ${inp}`)
      return ''
    }

    const date = typeof inp === 'string' ? this.getDateForDateString(inp, inputDateFormat!, formatInLocale)
                                         : new Date(inp) // Date or number

    outputDateFormat = outputDateFormat.replace(/A/gi, 'a')
    outputDateFormat = outputDateFormat.replace(/D/gi, 'd')
    outputDateFormat = outputDateFormat.replace(/Y/gi, 'y')

    const options = {} as any
    if (formatInLocale) options.locale = this.dateFnsLocaleMap[this.rc.session.getUserLocale()]
    const result = format(date, outputDateFormat, options)

    return result ? result.toUpperCase() : ''
  }
  
  isValidDate(inp : Date | string, inputDateFormat ?: string, dateInLocale = true) {

    if (!inp) {
      this.rc.warn(this.rc.getName(this), 'Passed undefined Date to formatDate Util')
      return false
    }

    const date = typeof inp === 'string' ? this.getDateForDateString(inp, inputDateFormat!, dateInLocale)
                                         : new Date(inp) // Date or number
  
    return isValid(date)
  }

  // Checks whether dateStr is before dateToCompareStr
  isDateBefore(date : Date | string, dateToCompare : Date | string) {
    return isBefore(new Date(date), new Date(dateToCompare))
  }

  getTimezoneOffset() {
    return new Date().getTimezoneOffset()
  }

  getStartOfDay(date : Date) {
    return startOfDay(date)
  }

  getTimeOfDayMillis(date : Date) {
    return date.getTime() - this.getStartOfDay(date).getTime()
  }

  getSameTimeForFutureDay(date : Date, futureDaysFromNow : number) {

    const timeOfDay = date.getTime() - this.getStartOfDay(date).getTime()  
    const futureDate = this.addDays(this.getStartOfDay(new Date()), futureDaysFromNow)
    futureDate.setTime(futureDate.getTime() + timeOfDay)
    return futureDate
  }

  // Returns diff in days endDate - startDate
  // Difference : (2014, 6, 20) - (2014, 0, 10) = 136
  getDayDiff(startDate : string | number | Date, endDate : string | number | Date) {

    const leftDate = typeof startDate === 'string' ? new Date(startDate) : startDate,
          rightDate = typeof endDate === 'string' ? new Date(endDate) : endDate

    return differenceInCalendarDays(rightDate, leftDate)
  }

  getUnixTime(date : number | Date | string) {
    return new Date(date).getTime()
  }

  getUnixTimeInSeconds(date : number | Date | string) {
    return new Date(date).getTime()/1000;
  }

  addDays(date : number | Date, days : number) {
    return add(date, { days: days })
  }

  addMonths(date : number | Date, months : number) {
    return add(date, { months: months })
  }

  subtractMonths(date : number | Date, months : number) {
    return sub(date, { months: months })
  }

  subtractYears(date : number | Date, years : number) {
    return sub(date, {years: years})
  }

  getEndMonth(date : number | Date) {
    return endOfMonth(date)
  }

  subtractDays(date : number | Date, days : number) {
    return sub(date, {days: days})
  }

  fromUnixTimeToDate(unix : number) {
    return fromUnixTime(unix)
  }

  getDifferenceInMonths(date1 : number | Date, date2 : number | Date) {
    return differenceInMonths(date1, date2)
  }

  getYearFromDate(date : number | Date) {
    return getYear(date)
  }

  getUserDateLocale() {
    return this.dateFnsLocaleMap[this.rc.session.getUserLocale()];
  }

  getDurationDifference(startDate : Date, endDate : Date) : number | string {

    const ms = endDate.getTime() - startDate.getTime()
    if (ms < 0) return -1

    const dur = this.getDurationObject(ms)
    return dur.durStr
  }

  getDurationObject(durationMillis : number) {

    const days = Math.floor(durationMillis / 1000 / 60 / 60 / 24),
          hours = Math.floor(durationMillis / 1000 / 60 / 60) % 24,
          minutes = Math.floor(durationMillis / 1000 / 60) % 60,
          seconds = Math.floor(durationMillis / 1000) % 60

    let durStr = ''
    if (days > 0) durStr += `${days}d `
    if (hours > 0) durStr += `${hours}h `
    if (minutes > 0) durStr += `${minutes}m `
    if (minutes < 1 && seconds > 0) durStr += `${seconds}s `

    return {
      days, hours, minutes, seconds, durStr
    }
  }
  
}
