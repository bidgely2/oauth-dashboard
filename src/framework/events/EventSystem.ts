import { RunContextApp } from "../RCApp"

export const EVENTS = {
  RELOAD_SCHEDULED_EVENTS : 'RELOAD_SCHEDULED_EVENTS',
  RELOAD_ONGOING_EVENTS : 'RELOAD_ONGOING_EVENTS'
}

export const EVENT_PREFIX = 'bgl-event'

export class EventSystem {

  constructor(private rc : RunContextApp) {

  }

  broadcast(eventName : string, data ?: any) {

    this.rc.debug(this.rc.getName(this), `Event Broadcast: `, eventName, JSON.stringify(data))

    data = data || {}

    const fullName = eventName.startsWith(EVENT_PREFIX) ? `${eventName}` : `${EVENT_PREFIX}-${eventName}`,
          nodeList = document.querySelectorAll('.' + fullName),
          event    = new CustomEvent(fullName, {detail: {data}})

    for (let index = 0; index < nodeList.length; index++) {
      const element = nodeList[index]
      element.dispatchEvent(event)
    }

    window.dispatchEvent(event)  
  }

  subscribe(eventName : string, cb : any, options ?: any) {

    this.rc.debug(this.rc.getName(this), `Event Subscribe: `, eventName)

    if (!eventName.startsWith(EVENT_PREFIX)) eventName = `${EVENT_PREFIX}-${eventName}`
    window.addEventListener(eventName, cb, options)
  }

}