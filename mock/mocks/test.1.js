var express = require('express');
var router = express.Router();


// 定义网站主页的路由
router.get('/1', function(req, res) {
  res.send('Birds home page1');
});
// 定义 about 页面的路由
router.get('/about1', function(req, res) {
  res.send('About birds1');
});

module.exports = router;
