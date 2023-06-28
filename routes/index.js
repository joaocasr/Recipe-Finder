var express = require('express');
var axios = require('axios')
var router = express.Router();


const options = {
  method: 'GET',
  url: 'https://low-carb-recipes.p.rapidapi.com/search',
  params: {},
  headers: {
    'X-RapidAPI-Key': '4507421e38msh24770dd1a2789cap1f4470jsnd08d660b980b',
    'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
  }
};

/* GET main page. */
router.get('/', function(req, res, next) {
  var data = new Date().toString().substring(0,16)
  res.render('home', { food: null ,date:data});
});

/* POST search box. */
router.post('/', function(req, res, next) {
  var data = new Date().toString().substring(0,16)
  options.params.name = req.body.name
  axios.request(options).then(resp =>{
    res.render('home', { food: resp.data ,date:data});
  }).catch(error=>{
    res.render('error', error);
  })
});

router.get('/recipes/:tag', function(req, res, next) {
  var data = new Date().toString().substring(0,16)
  options.params.tags = req.params.tag
  axios.request(options).then(resp =>{
    res.render('home', { food: resp.data ,date:data});
  }).catch(error=>{
    res.render('error', error);
  })
});


module.exports = router;
