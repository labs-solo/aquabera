import isArray from 'lodash/isArray';
import isBoolean from 'lodash/isBoolean';
import isNull from 'lodash/isNull';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import isUndefined from 'lodash/isUndefined';

export namespace InputUtils {
  export function isTruthy(val: any) {
    if (isNumber(val)) {
      return val !== 0;
    }

    if (isString(val)) {
      return val.trim() !== '';
    }

    if (isBoolean(val)) {
      return val;
    }

    if (isArray(val)) {
      return val.length > 0;
    }

    return !isNull(val) && !isUndefined(val);
  }

  const decimalCount = (num) => {
    const numStr = String(num);
    // String Contains Decimal
    if (numStr.includes('.')) {
      return numStr.split('.')[1].length;
    }
    // String Does Not Contain Decimal
    return 0;
  };

}

export function truncateString(str: string, num: number) {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str
  }else{
  // Return str truncated with '...' concatenated to the end of str.
      return str.slice(0, Math.min(num, str.substr(0, num).lastIndexOf(" "))) + '...'
  }
}

