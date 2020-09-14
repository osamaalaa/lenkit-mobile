import axios from "axios";

const API_URL = "https:/192.168.1.2/4700/admin/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
            AsyncStorage.setItem("('@storage_Key", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    AsyncStorage.removeItem("@storage_Key");
  }

//   register(username, lastName, Address, City , Country, PhoneNumber ,email, password) {
//     return axios.post(API_URL + "signup", {
//       username,
//       lastName,
//       Address,
//       City,
//       Country,
//       PhoneNumber,
//       email,
//       password
//     });
//   }

  getCurrentUser() {
    // console.log(localStorage);
    return JSON.parse(AsyncStorage.getItem('@storage_Key'));
  }
}

export default new AuthService();