const trvLogger = require('@trv/logger')();
const logInfo = {};

const loggerSelection = {
  debug: (event: string, message: string) => {
    if (process.env.VERBOSE_LOGGING !== 'true') {
      return null;
    }
    console.log(`${event} - debug:`, message);
  },

  info: (event: string, details?: any, meta?: any) => {
    if (process.env.VERBOSE_LOGGING !== 'true') {
      return null;
    }
    trvLogger.info(
      `${event} - info:` + details && details.message,
      Object.assign(logInfo, {
        statusCode: details && details.status,
        meta: meta && JSON.stringify(meta)
      })
    );
  },

  error: (event: string, details?: any, meta?: any) => {
    trvLogger.error(
      `${event} - failure:`,
      Object.assign(logInfo, {
        error: details && details.message,
        statusCode: details && details.status,
        meta: meta && JSON.stringify(meta)
      })
    );
  }
};

export const logger = loggerSelection;
