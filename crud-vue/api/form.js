import request from '../utills/request'
export default {
  getStudentsApi() {
    return request.get('/students/get')
  },
  addStudentsApi(data){
    return request.post('/students/new',data)
  },
  editStudentApi(data){
    return request.post('/students/update',data)
  },
  deleteStudentApi(id){
    return request.delete(`/students/delete?`,{params:{id}})
  }
}

