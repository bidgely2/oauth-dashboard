import { RUN_MODE } from "../framework/RCApp";

export interface AppFlavour {
  pilotId: number
  backendApiUrl: string
  environment : string
}

export class AppFlavour {
  static flavour: AppFlavour;

  constructor() {
    this.pilotId = 10082;
    this.environment = "dev";
    this.backendApiUrl = "btocdevapi.bidgely.com";
  }

  static getFlavour() {
    if(this.flavour) {
      return this.flavour;
    }
    if(typeof (window) === "undefined") {
      this.flavour = new AppFlavour();
      return this.flavour;
    }

    const host = window.location.host;

    if (FlavourSDGE.isDomainSupported(host)) {
      this.flavour = new FlavourSDGE();
    } else {
      this.flavour = new AppFlavour();
    }
    return this.flavour;
  }

  static getEnvironmentFromURL(host : string){
    let environment = RUN_MODE.PROD;
    if(host.includes("-dev")){
      environment = RUN_MODE.PROD;
    } else if(host.includes("-uat")){
      environment = RUN_MODE.UAT;
    } else if(host.includes("-nonprodqa")){
      environment = RUN_MODE.QA;
    } else if(host.includes("-productqa")){
      environment = RUN_MODE.PRODUCT_QA;
    }

    return environment
  }

}

class FlavourSDGE extends AppFlavour {
  constructor() {
    const host = window.location.host;

    super();
    this.pilotId = 10082;
    this.backendApiUrl = "sdgeuatapi.bidgely.com";
    this.environment = AppFlavour.getEnvironmentFromURL(host);
  }

  static isDomainSupported(host : string) {
    return new RegExp(/^console-sdge(-?)([a-z]*[0-9]*)\.bidgely\.com$/).test(host);
  }
}