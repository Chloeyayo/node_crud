import request from '../utills/request'
export default {
  getStudentsApi() {
    return request.get('/students/get')
  },
  addStudentsApi(data){
    return request.post('/students/create',data)
  }
}

