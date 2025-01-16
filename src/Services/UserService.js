import mockdata from "../Mocks/mockUserDetails.js";

export default class UserService {
  static getUserDetails() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockdata });
      }, 1000);
    });
  }
}
