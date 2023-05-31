/*------------------------------------------------------------------------------
   About      : Class responsible for logging screen & widget level
                events. Creates a new session for a user and keeps it alive 
                for 30 mins - does not expire the current running session even 
                after 30 mins.

   Created on : Thu Sep 16 2021
   Author     : Siddharth Garg

   Copyright (c) 2021 Bidgely. All rights reserved.
------------------------------------------------------------------------------*/

//import { uuid }                         from "../../helpers/helper"
import { AnalyticsScreenInfo }          from "./AnalyticsScreenInfo"
import { AnalyticsWidgetInfo }          from "./AnalyticsWidgetInfo"
import { Action, Location }             from "history"
import { RunContextApp }                from "../RCApp"
import { deviceDetect }                 from 'react-device-detect'
import  TagManager                      from "react-gtm-module"
//import { setRefValues }                 from "helpers/URLHelper"

const ANALYTICS_STORAGE_KEY = 'analyticsSessionInfo'

const EVENT_KEYS = {
  SESSION_ID        : 'app_session_id',
  HTML_LOAD_TS      : 'html_load_ts',
  BUNDLE_LOAD       : 'bundle_load_time',
  SESSION_START_TS  : 'session_start_ts',
  SESSION_LOAD      : 'session_load_time'
}

export const uuid = () => {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}


export class AnalyticsScreenManager {

  public constructor(private rc : RunContextApp) {

  }

  onNavChange(location : any, action : any) {

  }

  trackEvent(...args : any[]) {

  }

}
