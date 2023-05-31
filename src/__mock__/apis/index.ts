import { EVENT_MANAGEMENT_MOCK_APIS } from './eventManagement/eventManagementMockAPI'

export interface MockStruct {
  [key : string] : any
}

export const mockApis : MockStruct = {...EVENT_MANAGEMENT_MOCK_APIS}
