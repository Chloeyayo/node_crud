const fs = require('fs')
const path = require('path')

exports.find = (callback) => {
  fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data))
  })
}
exports.save = (student, callback) => {
  fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
    if (err) { return callback(err) }
    let list = JSON.parse(data)
    student.id = list.students.length + 1
    list.students.push(student)
    console.log(list);
    fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(list), (err) => {
      if (err) {
        return callback(err)
      }
      
      callback(null, list.students)
    })
  })
}