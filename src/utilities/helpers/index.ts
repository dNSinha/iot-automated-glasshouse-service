const helpers = {
  isEmpty: (value: any) => {
    return value === undefined || value === null || value === '' || value === 'unknown';
  },

  isMissing: (value: any) => {
    return value === undefined || value === null || Object.keys(value).length === 0;
  },

  getDate: (data: any) => {
    return data && data.split("T") && data.split("T")[0];
  },

  getTime: (data: any) => {
    const time = data && data.split("T") && data.split("T")[1];
    return time && time.slice(0, -11);
  },

  generateDateTimeQuery: (data) => {
    const query: any = {
      date: data.date,
      time: data.time
    }
    return query;
  },

  generateDateQuery: (data) => {
    const query: any = {
      date: data.date
    }
    return query;
  },

  arrayContainsArray: (superset: any, subset: any) => {
    try {
      if (subset.length < 1) {
        return false;
      }
      return subset.every(function(value: any) {
        return superset.indexOf(value) >= 0;
      });
    } catch (e) {
      return false;
    }
  },

  removeWhitespaces: (s: any) => {
    const str = s.replace(/-/g, '');
    return str.replace(/\s/g, '');
  },

  parseJson: (text: any) => {
    try {
      return JSON.parse(text);
    } catch (error) {
      return null;
    }
  },

  tryParseJSON: (str: any) => {
    try {
      if (str && typeof str === 'object') {
        return str;
      } else {
        const o = JSON.parse(str);
        //return helpers.tryParseJSON(o)
        return o;
      }
    } catch (e) {}
    return false;
  },

  keyValueExists: (obj: any, key: string, value: any) => {
    if (!obj) return false;
    if (obj.hasOwnProperty(key)) {
      const objValue = typeof obj[key] === 'string' ? obj[key].toLowerCase() : obj[key];
      return objValue === value;
    }
    return false;
  },

  getParamCaseInsensitive: ({ object = {}, key }) => {
    if (typeof object !== 'object') {
      throw new Error(`'object' must be an object but was type ${typeof object}`);
    }

    if (object === null) {
      throw new Error(`'object' must be an object but was null`);
    }

    if (typeof key !== 'string') {
      throw new Error(`'key' must be a string but was type ${typeof key}`);
    }

    const keyIndex = Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());
    return object[keyIndex == null ? 0 : keyIndex];
  },

  formatErrors: (errors: any[]) => {
    const formatted: any = { invalidParams: [] };
    errors.forEach((error: { context: { key: string }; message: string }) => {
      formatted.invalidParams.push({
        name: error.context.key,
        reason: error.message,
        detail: error.context
      });
    });
    return formatted;
  }
};

export { helpers };
