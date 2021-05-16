const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.send(200);  //让options尝试请求快速结束
  else
    next();
});

app.get('/form', (req, res) =>{
fs.readFile(path.join(__dirname,'db.json'), 'utf8', (err, data)=>{
  if (err){
    return console.log(err);
  }
  res.send(JSON.parse(data))
})
})
app.listen(3000,()=>{
  console.log("listening")
})