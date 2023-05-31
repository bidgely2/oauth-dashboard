/*------------------------------------------------------------------------------
  About      : Responsible for all navigation related activities
  
  Created on : Thu Jan 19 2023
  Author     : Siddharth Garg
  
  Copyright (c) 2023 Bidgely. All rights reserved.
------------------------------------------------------------------------------*/

import { RunContextApp }            from "./RCApp"
import { Action, 
         createBrowserHistory, 
         History, 
         Location,
         //LocationState
       }                            from 'history'

export type LocationState = unknown;

export class UiRouter {

  private historyWrapper !: HistoryWrapper
  private browserHistory !: History
  
  private runningInBrowser = false

  constructor(private rc : RunContextApp) {}

  init(runningInBrowser : boolean) {

    this.runningInBrowser = runningInBrowser

    this.browserHistory = createBrowserHistory()
    this.historyWrapper = new HistoryWrapper(this.rc, this.browserHistory)

    window.addEventListener('popstate', this.onPopState.bind(this))

    //this.browserHistory.listen(this.onNavEnd.bind(this))
  }

  navigate(routeTo : string, replace ?: boolean, state ?: LocationState) {

    if (replace) {
      this.browserHistory.replace(routeTo, state)
    } else {
      this.browserHistory.push(routeTo, state)
    }
  }

  getBrowserHistory() {
    return this.browserHistory
  }

  getCurrentLocation() {
    return this.browserHistory.location
  }

  private onPopState(e : any) {

    this.rc.debug(this.rc.getName(this), 'onPopState', e)
  }

  private onNavEnd(location : Location, action : Action) {

    this.rc.debug(this.rc.getName(this), 'onNavEnd', location, action)

    this.rc.analytics.onNavChange(location, action)
  }
}

class HistoryWrapper {

  constructor(private rc : RunContextApp, private browserHistory : History) {
    rc.setupLogger(this, 'HistoryWrapper')
  }

  push(url: string, state ?: LocationState) {
    this.rc.debug(this.rc.getName(this), 'before push', {
      //historyLength : this.browserHistory.length
    })
    this.browserHistory.push(url, state)
    this.rc.debug(this.rc.getName(this), 'after push', {
      //historyLength : this.browserHistory.length,
    })
  }

  replace(url: string, state ?: LocationState) {
    this.rc.debug(this.rc.getName(this), 'before replace', {
      //historyLength : this.browserHistory.length,
      url           : url
    })
    this.browserHistory.replace(url, state)
    this.rc.debug(this.rc.getName(this), 'after replace', {
      //historyLength : this.browserHistory.length
    })
  }

  go(delta: number) {
    this.browserHistory.go(delta)
  }

  getState() {
    return this.browserHistory.location.state
  }

  getLength() {
    //return this.browserHistory.length
  }

}