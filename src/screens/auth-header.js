export default function authHeader() {
    const user = JSON.parse(AsyncStorage.getItem('@storage_Key'));
  
    if (user && user.accessToken) {
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }