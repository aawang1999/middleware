const moment = require('moment')

const tools = {
  randomId: () => {
    return Math.floor(Math.random() * 1000)
  },
  logRequest: (req) => {
    const requestUnixTime = Date.now()
    const requestTimeLog = moment(requestUnixTime).format('YYYY-MM-DD HH:mm:ss')
    const requestLog = `${requestTimeLog} | ${req.method} from ${req.originalUrl}`
    return [requestLog, requestUnixTime]
  },
  logResponse: (res, requestUnixTime) => {
    const responseUnixTime = Date.now()
    const responseTimeLog = moment(responseUnixTime).format('YYYY-MM-DD HH:mm:ss')
    const handleDuration = responseUnixTime - requestUnixTime
    return `${responseTimeLog} | ${res.req.method} from ${res.req.originalUrl} | total time: ${handleDuration}ms`
  }
}

module.exports = tools