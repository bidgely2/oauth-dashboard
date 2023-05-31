/*------------------------------------------------------------------------------
   About      : Global Utilities 
   
   Created on : Mon Jan 02 2023
   Author     : Siddharth Garg
   
   Copyright (c) 2023 Bidgely. All rights reserved.
------------------------------------------------------------------------------*/

import { RunContextApp }            from "../RCApp"

export class BglUtility {

  constructor(private rc : RunContextApp) {

  }

  isEmptyObject(obj : any) {
    if(!obj) {
      return true;
    }
    for(const key in obj) {
      if(this.hasProperty(obj, key))
        return false;
    }
    return true;
  }

  roundValue(val : number) {
    const lessThanZero = (val < 0);
    return lessThanZero ? -(Math.round(Math.abs(val))) : Math.round(val);
  }

  toFixedDecimal(number : number, decimalPlaces : number) {
    const pow = Math.pow(10, decimalPlaces);
    return Math.round(number*pow) / pow;
  }

  hasProperty(obj : any, property : any) {
    return Object.prototype.hasOwnProperty.call(obj, property)
  }

  replaceTokens(text : string, obj : any) {

    if (!text) return "";

    for(const key in obj) {
      if(this.hasProperty(obj, key)) {
        const regEx = new RegExp(`{${key}}`, "g");
        let val = obj[key] + '';
        let hasDollar = false;
        //$ is special pattern in RegEx, like $1, $2, etc, so if we replace
        // {amount} with $37, Safari replaces $3 itself and just produce 7
        // so we are first replacing $ with #_# and then doing the actual
        if (val.indexOf('$') !== -1) {
          val = val.replace(/\$/g, '#_#');
          hasDollar = true;
        }
        text = text.replace(regEx, val);
        if (hasDollar) {
          text = text.replace(/#_#/g, '$');
        }
      }
    }
    return text;
  }

  formatNumber(number : number, withSign = false, 
               decimalPlaces = null, forceDecimalPoints = false) {

    const signs = ['-','','+'];
    let num : string | number = number;
    if(!isNaN(number)){
      let options = null as any;
      if (decimalPlaces && (forceDecimalPoints || (number - Math.round(number) !== 0))) {
        options = {
          minimumFractionDigits: decimalPlaces
        };
        if (forceDecimalPoints) {
          options['maximumFractionDigits'] = decimalPlaces;
        }
      }
      let defaultLocale = this.rc.session.getUserLocale();
      const split = defaultLocale.split('-');
      defaultLocale = split[0] + '-' + split[1].toUpperCase();
      num = options ? Intl.NumberFormat(defaultLocale, options).format(number) 
                    : Intl.NumberFormat(defaultLocale).format(number);
    }
    if (withSign) {
      num = signs[(Math.sign(number) + 1)] + num;
    }
    return num;
  }


}