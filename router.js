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
router.get('/students/get', async (req, res) => {
  students.find((err, data) => {
    if (err) res.send(err.toString())
    res.send(data)
  })

})

router.post('/students/new', (req, res) => {

  students.save(req.body,(err,data) => {
    if (err) res.send(err)
    res.send(data)
  })
  // fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
  //   if (err) { return res.send(console.log(err)) }
  //   list = JSON.parse(data)
  //   newStudent.id = list.students.length + 1
  //   list.students.push(newStudent)
  //   console.log(list);
  //   fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(list), (_err) => {
  //     console.log("写入成功");
  //   })
  // })
})
module.exports = router