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
    student.id = list.students[list.students.length - 1].id + 1
    list.students.push(student)
    console.log(list);
    fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(list), (err) => {
      if (err) return callback(err)
      callback(null, list.students)
    })
  })
}
exports.update = (student, callback) => {
  console.log(student);
  fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
    if (err) { return callback(err) }
    let list = JSON.parse(data)
    let item = list.students.find(i => {
      return i.id === student.id
    })
    for (let i in student) {
      item[i] = student[i]
    }
    fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(list), (err) => {
      if (err) return callback(err)
      callback(null, item)
    })
  })
}
exports.delete = (id, callback) => {
  fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
    if (err) { return callback(err) }
    let list = JSON.parse(data)
    let index = list.students.findIndex(item => {
      return item.id == id
    })
    list.students.splice(index, 1)
    fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(list), (err) => {
      if (err) { return callback(err) }
      callback(null, list)
    })
  })
}