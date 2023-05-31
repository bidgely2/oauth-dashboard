import { API_METHOD } from "../common"
import { UnionKeyToValue } from "../typeUtils"

export namespace ScheduledEvent {

  export enum EventStatus {
    ONGOING = 'ONGOING',
    SCHEDULED = 'SCHEDULED',
    COMPLETED = 'COMPLETED'
  }

  export type EventType =  'ALL' | 'CPP'
  export const EventType : UnionKeyToValue<EventType> = {
    ALL : 'ALL',
    CPP : 'CPP'
  }

  export enum CommunicationType {
    EMAIL = 'EMAIL',
    SMS = 'SMS' 
  }
  export enum CommunicationAlertType {
    CPE_PRE_EVENT = 'CPE_PRE_EVENT',
    CPE_EVENT_START = 'CPE_EVENT_START',
    CPE_EVENT_END = 'CPE_EVENT_END'
  }
  
  export enum CommunicationAlertStatus {
    SCHEDULED = 'SCHEDULED',
    FAILED = 'FAILED',
    SENT = 'SENT'
  }

  export interface CommunicationAlert {
    alertType : CommunicationAlertType
    status : CommunicationAlertStatus
    dateEpoch : number
  }

  export interface Communication {
    communcationType : CommunicationType
    alertList : CommunicationAlert[]
  }
}

export interface ScheduledEvent {
  eventId           : string
  eventName         : string
  eventType         : ScheduledEvent.EventType
  eventStatus       : ScheduledEvent.EventStatus
  creationTimeEpoch : number 
  startTimeEpoch    : number
  endTimeEpoch      : number
  communications    : ScheduledEvent.Communication[]
}

/*==============================================================================
                                 A P I S
==============================================================================*/

export class EventManagementAPIEndpoints {
  static GET_EVENTS   = () => `/v2.0/campaign/list-campaigns`
  static DELETE_EVENT = () => `/v2.0/campaign/cancelCampaign/`
  static CREATE_EVENT = () => `/v2.0/campaign/schedule-campaign`
  static EDIT_EVENT   = () => `/v2.0/campaign/reschedule-campaign`
}

export namespace GetEventsAPI {

  export const method : API_METHOD  = 'GET'

  export const epiEndpoint = EventManagementAPIEndpoints.GET_EVENTS

  export type params = {
    pilotId             : number
    date               ?: string
    eventType           : ScheduledEvent.EventType 
    eventStatus         : ScheduledEvent.EventStatus
    timezoneOffsetMins  : number
  }

  export type retval = ScheduledEvent[]
}

export namespace CreateEventAPI {

  export const method : API_METHOD  = 'POST'

  export const epiEndpoint = EventManagementAPIEndpoints.CREATE_EVENT

  export type params = {
    pilotId             : number
    eventType           : ScheduledEvent.EventType 
    eventName           : string
    startTimeEpoch      : number
    endTimeEpoch        : number 
    timezoneOffsetMins  : number       
  }

  export type retval = ScheduledEvent
}

export namespace EditEventAPI {

  export const method : API_METHOD  = 'PUT'

  export const epiEndpoint = EventManagementAPIEndpoints.EDIT_EVENT

  export type params = {
    pilotId             : number
    eventId             : string
    eventType           : ScheduledEvent.EventType 
    eventName           : string
    startTimeEpoch      : number
    endTimeEpoch        : number  
    timezoneOffsetMins  : number     
  }

  export type retval = ScheduledEvent
}

export namespace DeleteEventAPI {

  export const method : API_METHOD  = 'DELETE'

  export const epiEndpoint = EventManagementAPIEndpoints.DELETE_EVENT

  export type params = {
    pilotId             : number
    eventId             : string     
  }

  export type retval = ScheduledEvent
}
