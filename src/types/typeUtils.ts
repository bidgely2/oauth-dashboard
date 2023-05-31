import { compose } from "redux"

export type UnionKey<U> = {
  [key in keyof U] : string | object
}

export type UnionKeyToValue<U extends string> = {
  [K in U] : K
}

export type OptionalKVs<U extends string> ={
  [K in U] ?: object | string
}

declare global {
  interface Window {
    dataLayer : Record<string, any>[]
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?: typeof compose
  }
}