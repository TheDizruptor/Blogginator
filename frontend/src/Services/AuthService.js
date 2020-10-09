import axios from 'axios'

const API_URL = 'http://localhost:8080';
const AUTH_API_URL = `/basic-auth`

export const EMAIL_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthService {
  
  // checks to see if there is something stored in sessionStorage
  // for the user's authentication status.
  isUserLoggedIn() {
    let user = sessionStorage.getItem(EMAIL_SESSION_ATTRIBUTE_NAME);
    return (user !== null);
  }
  // removes user information from sessionStorage
  logout() {
    sessionStorage.removeItem(EMAIL_SESSION_ATTRIBUTE_NAME);
  }
  // this sends a request to http://localhost:8080/basic-auth 
  // which is handled by the BasicAuthenticationController in springboot.
  // axios allows us to add options to our requests really easily which 
  // is why I chose to add it to the frontend. The authorization header 
  // is used by springboot security (like magic it seems) and is built using
  // createBasicAuthToken
  executeBasicAuthService(email, password) {

    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);

    return axios.post('http://localhost:8080/login', formData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
    // return axios.get(`${API_URL}${AUTH_API_URL}`, { headers: { authorization: this.createBasicAuthToken(email, password)}});
  }
  // this returns a base64 encoded string which is the format 
  // required for the authorization: <token> header in 
  // the baove function
  // createBasicAuthToken(email, password) {
  //   return ('Basic ' + window.btoa(email + ":" + password));
  // }
  // // this sets the value in sessionStorage to flag that a user is 
  // // signed in. Calls the below function to add an interceptor
  registerSuccessfulLogin(email, password) {
    sessionStorage.setItem(EMAIL_SESSION_ATTRIBUTE_NAME, email);
    // this.setupAxiosInterceptors(this.createBasicAuthToken(email, password));
  }
  // // axios interceptors intercept (surprise) every single 
  // // request axios is going to make and adds something to it. 
  // // in this case, if the user is logged in it adds the user's
  // // base 64 encoded token
  // setupAxiosInterceptors(token) {
  //   axios.interceptors.request.use(
  //     (config) => {
  //       if (this.isUserLoggedIn()) {
  //         config.headers.authorization = token;
  //       }
  //       return config;
  //     }
  //   )
  // }
}

export default new AuthService()