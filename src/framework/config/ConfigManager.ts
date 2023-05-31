/*------------------------------------------------------------------------------
   About      : Responsible for managing configs
   
   Created on : Tue Jan 03 2023
   Author     : Siddharth Garg
   
   Copyright (c) 2023 Bidgely. All rights reserved.
------------------------------------------------------------------------------*/

import { RunContextApp }            from "../RCApp"
import { UnionKeyToValue } from "../../types";

export class ConfigManager {

  private configData : any = [];
  private configsReady : boolean = false;
  
  constructor(private rc : RunContextApp) {
    
  }

  setConfigData(data : any){
    //TODO : Pre-process configs to set correct types.
    this.configData = data;
    this.configsReady = true;
  }
  
  getConfig(key : string) {
    const element = this.configData.find((ele : UnionKeyToValue<string>)=>ele.key === key);
    return element ? element.val : null;
  }

  isConfigsReady(){
    return this.configsReady;
  }
}