/*------------------------------------------------------------------------------
   About      : Responsible for managing translations
   
   Created on : Mon 27 2023
   Author     : Sarang Gupta
   
   Copyright (c) 2023 Bidgely. All rights reserved.
------------------------------------------------------------------------------*/

import { RunContextApp }            from "../RCApp"

export class TranslationManager {

  private translations : any = {};
  
  constructor(private rc : RunContextApp) {
    
  }

  setTranslations(data : any){
    this.translations = data;
  }

  getTranslation(key : string){
    return this.translations[key] || "";
  }
  
}