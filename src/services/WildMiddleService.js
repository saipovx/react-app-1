import api from "../http";


export default class WildMiddleService{
  static async getAll(data){
    return api.post('/template_message/data', data)
  }
  static async allFields(){
    return api.get(`/template_message/fields`)
  }
  static async delete(_id){
    return api.delete(`/template_message/${_id}`)
  }
  static async change(data, _id){
    return api.put(`/template_message/${_id}`, data)
  }
  static async add(data){
    return api.post(`/template_message/`, data)
  }
}