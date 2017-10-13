var express = require('express');
var router = express.Router();




/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/doAdd', function (req, res, next) {
	console.log("Iam in Add function");
    console.log(req.body.expre);
    var reqexpr = req.body.expre;
    var result = ""+eval(reqexpr);
    res.status(200).json({expre: result});
    console.log(result);  

});
router.post('/doSubtract', function (req, res, next) {
	console.log("Iam in Subtract function");
    console.log(req.body.expre);
    var reqexpr = req.body.expre;
    var result = ""+eval(reqexpr);
    res.status(200).json({expre: result});
    console.log(result);  

});

router.post('/doMultipy', function (req, res, next) {
	console.log("Iam in Multiply function");
    console.log(req.body.expre);
    var reqexpr = req.body.expre;
    var result = ""+eval(reqexpr);
    res.status(200).json({expre: result});
    console.log(result);  

});

router.post('/doDivide', function (req, res, next) {
	
	console.log("Iam in Divide function");
    console.log(req.body.expre);
    var reqexpr = req.body.expre;
    if(reqexpr.includes('/'))
    	{
    var result = ""+eval(reqexpr);
    res.status(200).json({expre: result});
    console.log(result);  
    	}
    else{
    	console.log("this is not dvide function");
    }

});

/*router.post('/doEval', function (req, res, next) {
	console.log("Iam in eval function");
    console.log(req.body.expre);
    var reqexpr = req.body.expre;
    var result = ""+eval(reqexpr);
    res.json({expre: result});
    console.log(result);  

});*/

module.exports = router;
