// import * as dayjs from 'dayjs';
// import * as timezone from 'dayjs/plugin/timezone';
// import * as utc from 'dayjs/plugin/utc';

export class DateFunctions {

  // static new(date: string | undefined = undefined, format: string | undefined = undefined): dayjs.Dayjs {
  //   if (date === undefined) {
  //       return dayjs.utc();
  //   }
  //   if (format) {
  //       return dayjs.utc(date, format);
  //   } else {
  //       return dayjs.utc (date);
  //   }
  // }


  static formatDate(date: Date): string {
    var rawDateStr = date.toISOString();
    let dateStr = rawDateStr.substring(0, 10); // YYYY-MM-DD
    return dateStr;
  }


  static formatTime(date: Date): string {
    var rawDateStr = date.toISOString();
    var hours = parseInt(rawDateStr.substring(11,13));
    const minutes = rawDateStr.substring(14,16);
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    return `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
  }


  static formatDateTime(date: Date): string {
    var rawDateStr = date.toISOString();
    let dateStr = rawDateStr.substring(0, 10); // YYYY-MM-DD
    var hours = parseInt(rawDateStr.substring(11,13));
    const minutes = rawDateStr.substring(14,16);
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    return `${dateStr} ${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
  }


  static getYear(date: Date): number {
    try {
      var rawDateStr = date.toISOString();
      var yr = parseInt(rawDateStr.substring(0,4));
      return yr;
    }
    catch (e) {
      return 0;
    }
  }


  static getMonth(date: Date): number {
    try {
      var rawDateStr = date.toISOString();
      var month = parseInt(rawDateStr.substring(5,7));
      return month;
    }
    catch (e) {
      return 0;
    }
  }


  static getDay(date: Date): number {
    try {
      var rawDateStr = date.toISOString();
      var day = parseInt(rawDateStr.substring(8,10));
      return day;
    }
    catch (e) {
      return 0;
    }
  }
}

