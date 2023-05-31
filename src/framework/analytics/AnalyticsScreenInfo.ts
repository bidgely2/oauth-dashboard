/*------------------------------------------------------------------------------
   About      : Keeps screen level info for a page.
   
   Created on : Thu Sep 16 2021
   Author     : Siddharth Garg
   
   Copyright (c) 2021 Bidgely. All rights reserved.
------------------------------------------------------------------------------*/

import { RunContextApp } from "../RCApp"

export class AnalyticsScreenInfo {

	private eventData = {} as any
	private invocationTs = 0

  constructor(private rc : RunContextApp, private canLogEvents : boolean, 
              private appSessionId : string, private screenName : string, 
              private invSrc : string, private navMode : string) {

    rc.status(rc.getName(this), `Creating a new screen : ${screenName}`)

    this.invocationTs = Date.now()
    this.eventData = {}
  }

  getInvocationSource() { return this.invSrc }

  getScreenName() { return this.screenName }

  onScreenLoaded() {
    this.eventData['load_time'] = Date.now() - this.invocationTs
  }

  onScreenDestroy() {

    const eventName = this.screenName
    this.eventData['app_session_id'] = this.appSessionId
    this.eventData['inv_src']   = this.invSrc
    this.eventData['inv_ts']    = this.invocationTs
    this.eventData['stay_time'] = Date.now() - this.invocationTs
    this.eventData['nav_mode']  = this.navMode

    this.rc.debug(this.rc.getName(this), `AnalyticsScreenInfo: onScreenDestroy Logging event: ${eventName} : `, this.eventData)
    
    if (this.canLogEvents) this.rc.analytics.trackEvent(eventName, this.eventData)
  }

  setScreenApiState(apiState : string, errorCode : string, errorMsg : string) {
    
    this.eventData['api_state'] = apiState
    if (errorCode) this.eventData['error_code'] = errorCode
    if (errorMsg) this.eventData['error_msg'] = errorMsg
  }
}