import api from "../http";


export default class ApiService{
  static async template_message(data){
    return api.post('/template_message', data)
  }

  static async all_template_message(){
    return api.get('/template_message')
  }

  static async delete_template_message(id){
    return api.delete(`/template_message/${id}`)
  }

  static async template_text(data){
    return api.post(`/template_text`, data)
  }

  static async all_template_text(){
    return api.get(`/template_text`)
  }
}