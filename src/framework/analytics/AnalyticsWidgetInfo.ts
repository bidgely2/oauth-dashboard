/*------------------------------------------------------------------------------
   About      : Keeps widget level info for the invoked widget.
   
   Created on : Wed Sep 22 2021
   Author     : Siddharth Garg
   
   Copyright (c) 2021 Bidgely. All rights reserved.
------------------------------------------------------------------------------*/

import { RunContextApp } from "../RCApp"

export class AnalyticsWidgetInfo {

	private eventData = {} as any
	private invocationTs = 0

  constructor(private rc : RunContextApp, private canLogEvents : boolean, 
						  private appSessionId : string, private widgetName : string, 
							private version : string, private invSrc : string, private pageSrc : string) {

		rc.status(rc.getName(this), `AnalyticsWidgetInfo: Creating new widget tracking for : ${widgetName}`)

		this.invocationTs = Date.now()
  } 

	onWidgetLoaded() {
		this.eventData['load_time'] = Date.now() - this.invocationTs
	}

	setWidgetApiState(apiState : string, errorCode : string, errorMsg : string) {

		this.eventData['api_state'] = apiState
    if (errorCode) this.eventData['error_code'] = errorCode
    if (errorMsg) this.eventData['error_msg'] = errorMsg
	}

	logEvent() {

		this.eventData['app_session_id'] = this.appSessionId
		this.eventData['version'] = this.version
    this.eventData['inv_ts']  = this.invocationTs
		this.eventData['inv_src'] = this.invSrc
		this.eventData['page_src']  = this.pageSrc

		this.rc.debug(this.rc.getName(this), `AnalyticsWidgetInfo: Logging widget tracking `, 
				this.widgetName, this.eventData)
		
		if (this.canLogEvents) this.rc.analytics.trackEvent(this.widgetName, this.eventData)
	}
}