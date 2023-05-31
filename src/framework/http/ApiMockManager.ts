import { RunContextApp }            from "../RCApp"
import AxiosMockAdapter             from 'axios-mock-adapter'

import { AxiosInstance,
         AxiosRequestConfig
       }                            from "axios"
import { mockApis }                 from "../../__mock__"

export class ApiMockManager {

  private mockAdapter : AxiosMockAdapter

  constructor(private rc : RunContextApp, axios : AxiosInstance) {
    this.mockAdapter = new AxiosMockAdapter(axios, {delayResponse : 1000})
  }

  async get(url : string, config ?: AxiosRequestConfig) {
    mockApis[url](this.rc, this.mockAdapter, config)
  }

}