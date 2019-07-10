var express = require('express');

var settings = require('../module/settings');
var trueVK = require('../module/VK');
var VK = require('vksdk');
const libraries = require('../module/libraries');

var router = express.Router();

router.post('/', function(req, res, next) {
    console.log(settings.GROUP_TOKEN);
    console.log("REG.BODY: " + req.body + " END BODY");
    switch (req.body.type)
    {
        case 'confirmation':
            if (req.body.group_id === 130735027)
                res.send("63f7e5fb");
            break;//255983286
        case 'message_new':
            var userId = req.body.object.user_id;
            let message = "";
            if (req.body.object.body.search(/замена/iu) === 0)
            {
                let group = req.body.object.body.split(' ')[1]+" "+req.body.object.body.split(' ')[2] ;
            }
            else
            {
                trueVK.VK.request('messages.send', {'user_id' : userId, 'message':'Прости, хочешь помочь то напиши [alakedozza|мне]'}, function(_o) {
                    console.log(_o);
                    trueVK.VK.request('messages.send', {'user_id' : userId, 'sticker_id':'6045'}, function(_o_2) {
                        console.log(_o_2);
                    });
                });
            }


            res.send('ok');
            break;
        default:
            next();
            break;
    }
});



module.exports = router;
