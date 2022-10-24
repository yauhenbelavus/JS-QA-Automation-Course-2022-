
 export function errorCatcher(error: any) {
    return JSON.stringify(error.status) + " " + error.message
  }
  