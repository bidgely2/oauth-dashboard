/*------------------------------------------------------------------------------
   About      : API Client
   
   Created on : Tue Jan 23 2023
   Author     : Siddharth Garg
   
   Copyright (c) 2023 Bidgely. All rights reserved.
------------------------------------------------------------------------------*/

import axios, 
       { AxiosInstance,
         AxiosRequestConfig, 
         AxiosResponse
       }                            from "axios"
import { ApiErrorInfo, 
         ApiResponse 
       }                            from "../../types"
import { RunContextApp }            from "../RCApp"
import { ErrorUtils }               from "../utility/ErrorUtils"
import { ApiMockManager }           from "./ApiMockManager"

export interface BglRequestConfig {
  handlerEnabled : boolean
}

export type AppRequestConfig = AxiosRequestConfig & BglRequestConfig

export interface ServerResponse<T> {
  requestId : string
  payload : T
  error : ApiErrorInfo | null
}

export class ApiClient {

  // TODO endpoint info to come here

  private axiosClient : AxiosInstance
  private mockManager !: ApiMockManager
  private baseUrl : URL

  constructor(private rc : RunContextApp, serverUrl : string, private mock : boolean) {
    this.axiosClient = axios.create()
    if (this.mock) this.mockManager = new ApiMockManager(rc,this.axiosClient)
    this.baseUrl = new URL(serverUrl)
    this.init()
  }

  isHandlerEnabled(config = {} as any) {
    return this.rc.utils.hasProperty(config, 'handlerEnabled') && !config.handlerEnabled ? false : true;
  }

  init() {

    this.axiosClient.interceptors.request.use(request => {

      if (this.isHandlerEnabled(request)) {
        const authToken = this.rc.session.getAccessToken();
        if (authToken) request.headers.Authorization = "Bearer " + authToken;
      }
      
      return request;
    });

    this.axiosClient.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      // if(error.status === 401){
      //   this.rc.session.logoutUser();
      // }
      if (error) {
        return Promise.reject(error.response)
      }
      return Promise.reject(error);
    });
  }

  private getApiEndpoint(url : string) {
    return `${this.baseUrl.origin}${url}` 
  }

  async get<T>(url : string, config ?: AxiosRequestConfig) : Promise<ApiResponse<T>> {

    const apiUrl = this.getApiEndpoint(url) 

    if (this.mock) this.mockManager.get(url, config)

    try {
      this.rc.debug(this.rc.getName(this), 
        `Sending GET request to : ${this.mock ? url : apiUrl}` + 
        `with config : `, config)

      const resp : AxiosResponse<ServerResponse<T>> = await this.axiosClient.get(
        this.mock ? url : apiUrl, config)

      if (resp.data.error) {
        return { error : ErrorUtils.getApiErrorInfo(resp.data.error) }
      } else {
        return { data : resp.data.payload }
      }

    } catch (error) {
      this.rc.error(this.rc.getName(this), 
        `Error >> GET request to : ${this.mock ? url : apiUrl}\n` + 
        `with config : `, config, 
        'resulted in error : ', error)

      return {
        error : ErrorUtils.getApiErrorInfo(error)
      }
    }
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig) : Promise<ApiResponse<T>> {

    const apiUrl = this.getApiEndpoint(url) 

    if (this.mock) this.mockManager.get(url, config)

    try {
      this.rc.debug(this.rc.getName(this), 
        `Sending POST request to : ${this.mock ? url : apiUrl}` + 
        `with body : ${JSON.stringify(data)}` +
        `& config :`, config)

      const resp : AxiosResponse<ServerResponse<T>> = await this.axiosClient.post(
        this.mock ? url : apiUrl, data, config)

      if (resp.data.error) {
        return { error : ErrorUtils.getApiErrorInfo(resp.data.error) }
      } else {
        return { data : resp.data.payload }
      }

    } catch (error) {
      this.rc.error(this.rc.getName(this), 
        `Error >> POST request to : ${this.mock ? url : apiUrl}\n` + 
        `\nwith data : ${JSON.stringify(data)}` +  
        `\n& config : ${JSON.stringify(config)}` + 
        `\nresulted in error : \n`, error)

      return {
        error : ErrorUtils.getApiErrorInfo(error)
      }
    }
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig) : Promise<ApiResponse<T>> {

    const apiUrl = this.getApiEndpoint(url) 

    if (this.mock) this.mockManager.get(url, config)

    try {
      this.rc.debug(this.rc.getName(this), 
        `Sending PUT request to : ${this.mock ? url : apiUrl}` + 
        `with body : ${JSON.stringify(data)}` +
        `& config :`, config)

      const resp : AxiosResponse<ServerResponse<T>> = await this.axiosClient.put(
        this.mock ? url : apiUrl, data, config)

      if (resp.data.error) {
        return { error : ErrorUtils.getApiErrorInfo(resp.data.error) }
      } else {
        return { data : resp.data.payload }
      }

    } catch (error) {
      this.rc.error(this.rc.getName(this), 
        `Error >> PUT request to : ${this.mock ? url : apiUrl}\n` + 
        `\nwith data : ${JSON.stringify(data)}` +  
        `\n& config : ${JSON.stringify(config)}` + 
        `\nresulted in error : \n`, error)

      return {
        error : ErrorUtils.getApiErrorInfo(error)
      }
    }
  }

  async delete<T>(url: string, config?: AxiosRequestConfig) : Promise<ApiResponse<T>> {

    const apiUrl = this.getApiEndpoint(url) 

    if (this.mock) this.mockManager.get(url, config)

    try {
      this.rc.debug(this.rc.getName(this), 
        `Sending DELETE request to : ${this.mock ? url : apiUrl}` + 
        `& config :`, config)

      const resp : AxiosResponse<ServerResponse<T>> = await this.axiosClient.delete(
        this.mock ? url : apiUrl, config)

      if (resp.data.error) {
        return { error : ErrorUtils.getApiErrorInfo(resp.data.error) }
      } else {
        return { data : resp.data.payload }
      }

    } catch (error) {
      this.rc.error(this.rc.getName(this), 
        `Error >> DELETE request to : ${this.mock ? url : apiUrl}\n` + 
        `\n& config : ${JSON.stringify(config)}` + 
        `\nresulted in error : \n`, error)

      return {
        error : ErrorUtils.getApiErrorInfo(error)
      }
    }
  }

}