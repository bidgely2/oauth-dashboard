export class ErrorUtils {

  static getApiErrorInfo(error : any) {

    if (error instanceof Error) {
      console.error(error)
      return { code : 500, message : error.message }

    } else if (error.response) {
      // Request made and server responded
      return error.response.data.error

    } else if (error.data) {
      // Request made and server responded
      return error.data.error

    } else if (error.request) {
      // The request was made but no response was received
      return { code : 400, message : 'Not found' }

    } else {
      // Something happened in setting up the request that triggered an Error
      return { code : 500, message : 'Something went wrong'}
    }
  }
}