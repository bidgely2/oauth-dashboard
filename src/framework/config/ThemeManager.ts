/*------------------------------------------------------------------------------
   About      : Responsible for managing Theme
   
   Created on : Tue Mar 21 2023
   Author     : Sarang Gupta
   
   Copyright (c) 2023 Bidgely. All rights reserved.
------------------------------------------------------------------------------*/

import { RunContextApp }            from "../RCApp"

export class ThemeManager {

  private theme : any = {};
  private themeReady : boolean = false;
  
  constructor(private rc : RunContextApp) {
    
  }

  setTheme(data : any){
    if(data){
      this.theme = data;
      this.themeReady = true;
    }
   
  }
  
  getTheme() {
    return this.theme;
  }

  isThemeReady(){
    return this.themeReady;
  }
}