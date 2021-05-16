import request from '../utills/request'
export default {
  getFormApi() {
    return request.get('/form')
  }
}