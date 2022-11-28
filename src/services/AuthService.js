import api from "../http";


export default class AuthService{
  static async auth(login, password){
    return api.post('/auth', {
      'login': login,
      'password': password
    })
  }
  static async logout(){
    return api.post('/logout')
  }
  static async refresh(){
    return api.post('/refresh_token')
  }
  static async check(){
    return api.get('/check_auth')
  }
}