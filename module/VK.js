var VK = require('vksdk');
var settings = require('../module/settings');
var vk = new VK({
    'appId'     : 6357772 ,
    'appSecret' : '9Kp71VYHDwSrPqBvfIgW',
    'language'  : 'ru',
    'secure ' : true,
    'https' : false,
    'mode' : 'oauth'
});


vk.on('serverTokenReady', function(_o) {
    vk.setToken(_o.access_token);
});
vk.setSecureRequests(true);
vk.setToken(settings.GROUP_TOKEN);
settings.VK = vk;




module.exports = {
    VK : vk
};
