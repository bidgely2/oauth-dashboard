/*------------------------------------------------------------------------------
   About      : Currently this manager deals with data being stored on
                localStorage. Eventually this should be responsible for all
                session related functions.

   Created on : Thu Nov 18 2021
   Author     : Siddharth Garg

   Copyright (c) 2021 Bidgely. All rights reserved.
------------------------------------------------------------------------------*/

import { AppFlavour } 							from "../../configs/AppFlavours"
import { RunContextApp } 						from "../RCApp"

export class SessionManager {

  private isLoggedIn : boolean = false;

	constructor(private rc : RunContextApp) {
	}

	getPilotId() {
		return AppFlavour.getFlavour().pilotId
	}

	getUserLocale() {
		return ''
	}

  setAccessToken(token : string) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("accessToken", token);
    this.isLoggedIn = true;
  }

  isUserLoggedIn(){
    const loggedIn = localStorage.getItem("loggedIn")
    if(this.isLoggedIn || (loggedIn && loggedIn === "true")) return true;
    
    return false;
  }

	getAccessToken() {
    const accessToken = localStorage.getItem("accessToken")
		return accessToken;
	}

  logoutUser(){
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("accessToken");
    window.location.reload();
  }
}