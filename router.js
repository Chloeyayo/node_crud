const express = require('express')
const router = express.Router();
const fs = require('fs')
const path = require('path')
const students = require('./students')
router.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "*");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.send(200); //让options尝试请求快速结束
  else
    next();
});
router.get('/students/get', (req, res) => {
  students.find().then((students) => { res.send(students) }).catch((err) => { res.send(err.toString) })
  // students.find((err, data) => {
  //   if (err) res.send(err.toString())
  //   res.send(data)
  // })
})

router.post('/students/new', (req, res) => {
  new students(req.body).save().then((student) => { res.send(student) }).catch((err) => { res.send(err.toString) })
  // students.save(req.body, (err, data) => {
  //   if (err) res.send(err)
  //   res.send(data)
  // })

})

router.post('/students/update', (req, res) => {
  students.findByIdAndUpdate(req.body._id, req.body).then((student) => {
    res.send(student)
  }).catch((err) => { res.send(err.toString) })
  // students.update(req.body, (err, data) => {
  //   if (err) res.send(err)
  //   res.send(data)
  // })
})

router.delete('/students/delete', (req, res) => {
  students.findByIdAndDelete(req.query.id).then((student) => { res.send(student) }).catch((err) => { res.send(err.toString) })
  // students.delete(req.query.id, (err, data) => {
  //   if (err) res.send(err)
  //   res.send(data)
  // })
})
module.exports = router