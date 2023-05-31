import { UnionKeyToValue }                              from '../../typeUtils'

export type API_METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface ApiErrorInfo {
  code    : string
  message : string
}

export interface ApiResponse<T> {
  data  ?: T
  error ?: ApiErrorInfo
}

export interface Responsiveness {
  isDesktop       : boolean
  isLargeDesktop  : boolean
  isMobileView    : boolean
  isSmMobileView  : boolean
  isTabletView    : boolean
  isXLMobileView  : boolean
}

export interface ApplianceList {
  [key : number | string] : string
}

export type MEASUREMENT_TYPE = 'ELECTRIC' | 'GAS' | 'WATER'
export const MEASUREMENT_TYPE : UnionKeyToValue<MEASUREMENT_TYPE> = {
  ELECTRIC  : 'ELECTRIC',
  GAS       : 'GAS',
  WATER     : 'WATER'
}
