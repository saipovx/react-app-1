import api from "../http";


export default class WildService{
  static async getAll(data){
    return api.post('/template_text/data', data)
  }
  static async change(data, _id){
    return api.put(`/template_text/${_id}`, data)
  }
  static async add(data){
    return api.post(`/template_text`, data)
  }
  static async delete(_id){
    return api.delete(`/template_text/${_id}`)
  }
  static async allFields(){
    return api.get(`/template_text/fields`)
  }
}