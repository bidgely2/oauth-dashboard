import { RunContextApp }                    from "../../../framework/RCApp"
import AxiosMockAdapter                     from 'axios-mock-adapter'
import * as EVENT_MANAGEMENT_MOCK_RESPONSES from "./eventManagementMockResponses"
import { AxiosRequestConfig }               from "axios"

export const EVENT_MANAGEMENT_MOCK_APIS = {
 
  '/events' : (rc : RunContextApp, mockAdapter : AxiosMockAdapter, config ?: AxiosRequestConfig ) => {
    //return mockAdapter.onGet('/events', config).networkError()
    return mockAdapter.onGet('/events', config).reply(200, EVENT_MANAGEMENT_MOCK_RESPONSES.GET_EVENTS)
  },

}