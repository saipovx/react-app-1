
import {makeAutoObservable} from 'mobx'
import AuthService from "../services/AuthService";

export default class Store{
  user = {}
  isAuth = false
  // isLoading = false
  
  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool){
    this.isAuth = bool
  }

  setUser(user){
    this.user = user
  }

  // setLoading(bool){
  //   this.isLoading = bool
  // }
  
  async auth(login, password){
    try {
      console.log('auth')
      const res = await AuthService.auth(login, password)
      console.log('res', res)
      localStorage.setItem('access_token', res.data.access_token)
      this.setAuth(true)
      this.setUser(res.data.user)
      return res
    }catch (e) {
      return false
      console.log(e.response?.data?.message)
    }
  }
  async logout(){
    try {
      await AuthService.logout()
      localStorage.removeItem('access_token')
      this.setAuth(false)
      this.setUser({})
    }catch (e) {
      console.log(e.response?.data?.message)
    }
  }
  async checkAuth(setLoad){
    try {

      // const ax = axios.create({})
      // const res = await axios.post('http://localhost/api/v2/refresh_token',{withCredentials: true})
      // const res = await AuthService.refresh()
      const res = await AuthService.check()
      console.log('check', res.data)
      // localStorage.setItem('access_token', res.data.access_token)
      // console.log(res.data)
      this.setAuth(res.data.is_auth)
      this.setUser(res.data.user)
    } catch (e) {
      console.log(e.response?.data?.message)
    } finally {
      setLoad(true)
    }
  }
}