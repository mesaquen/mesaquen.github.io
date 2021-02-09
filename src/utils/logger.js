import { createLogger, format, transports } from 'winston'

const logger = createLogger({
  format: format.simple(),
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console())
}

export default logger
