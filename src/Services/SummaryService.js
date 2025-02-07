import mockdata from "../Mocks/mockDashboardData.js";

export default class SummaryService {
  static getSummaryData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockdata });
      }, 1000);
    });
  }
}
