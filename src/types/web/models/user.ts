import { MEASUREMENT_TYPE }                    from "../../common/models/global"

export interface Address {
  addressLine1  : string
  addressLine2  : string
  city          : string
  state         : string
  zipcode       : string
}

export interface Premise {
  uuid                      : string
  premiseId                 : string
  status                    : string
  address                   : Address
  supportedMeasurementTypes : MEASUREMENT_TYPE[]
}

export interface PremiseDetails {
  premises : Premise[]
}

export interface MeasurementToUserTypeMapping {
  measurementType : string 
  userType        : string
}

export interface AccessTokenDetails {
  accessToken         : string
  expiryTimeInMillis  : number
}

export interface UserProfile {
  userId        : string
  partnerUserId : string
  meterId       : string
  firstName     : string
  lastName      : string
  fuelType      : string
  userType      : string
  email         : string
  utilityTags : {
    account_number : string
  }
  homeAccounts : { 
    hasSolar    : boolean
    address     : string
    postalCode  : string
    rate : {
      ratePlanId  : string
    }
  }
}

export interface UserTypeDetails {
  userSegment                   : string
  measurementToUserTypeMappings : MeasurementToUserTypeMapping[]
}