var express = require('express');
var router = express.Router();

// 该路由使用的中间件
var test ={
    data:"ok",
    error:{
        code:0
    }
}
// 定义网站主页的路由
router.get('/', function(req, res) {
  res.send(test);
});
// 定义 about 页面的路由
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
