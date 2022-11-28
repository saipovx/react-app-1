import api from "../http";


export default class MenuService{

  static async get_user_permissions(){
    return api.get('/get_user_permissions')
  }

  static async get_menu_items(){
    return api.get('/get_menu_items')
  }

}