import api from "../http";


export default class MessageMiddleService{
  static async getAll(data){
    return api.post('/template_message_data', data)
  }
  static async getAccountslData(){
    return api.post('/accounts/data', {
      "fields": [
          "id",
          "supplier_name"
      ]
  })
  }
}