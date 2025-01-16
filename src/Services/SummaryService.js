import mockdata from "../mockdata.js";

export default class SummaryService {
  static getSummaryData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockdata });
      }, 1000);
    });
  }
}
