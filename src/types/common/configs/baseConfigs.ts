import { UnionKey } from "../../typeUtils"
import { API_METHOD } from "../models"

export interface UtilityConsoleConfigs {
  applianceNameMapping        : any
  colorPalette                : any
  colorPaletteTheme           : any
  frontendConfigs             : any
  languagesList               : any
  locale                      : string
  stringResources             : UnionKey<string>
  usertype                   ?: string
}

export const CONFIG_API_CONSTANTS = {
  CONTEXT : "UTILITY_CONSOLE",
  CONFIG_TAG_TYPE : "EVENT_MANAGEMENT",
  STRING_TAG_TYPE : "utility_console",
  COLOR_PALETTE : "color_palette_web"
}

/*==============================================================================
                                 A P I S
==============================================================================*/

export class ConfigStringsAPIEndpoints {
  static GET_CONFIGS_STRINGS = () => `/v2.0/web/uiConfigs`
}

export namespace GetConfigsAPI {

  export const method : API_METHOD  = 'GET'

  export const apiEndpoint = ConfigStringsAPIEndpoints.GET_CONFIGS_STRINGS

  export type params = {
    pilotId               : number
    userId               ?: string
    scoped                : boolean
    context               : string
    colorPaletteThemeType : string
    colorPaletteType      : string
    configTagType         : string
    stringTagType         : string
  }

  export type retval = UtilityConsoleConfigs
}
