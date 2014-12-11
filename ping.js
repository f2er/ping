/*
 * @监控网站在全国各地的情况
*/
var request = require('request');

request.post({
				url:'http://ping.chinaz.com/iframe.ashx?t=ping', 
				form: {
						guid:'c8a772cc-624e-479d-be58-85a3882cd7fa',
			   			host:"a.4399.cn",
			   			ishost:false,
			   			encode:'ZGGLUQq48m9ZRd6yf3dcBp7KR5BCIZfn',
			   			checktype:0
			   		}
			   	}, function(error,response,body){ 
			   		if (!error && response.statusCode == 200) {
			   			var _monitor = body.replace('(','').replace(')','');
			   			console.log( JSON.parse(body) )
			   			//return;
    					/*var _monitorData = JSON.parse(_monitor).result;
console.log(_monitorData);*/
    					return;
    					//console.log(_monitorData);
    					console.log("IP:"+_monitorData.ip);
    					console.log("地址:"+_monitorData.ipaddress);
    					console.log("响应时间:"+_monitorData.responsetime);
    					console.log("ttl:"+_monitorData.ttl);
    					console.log("大小:"+_monitorData.bytes);
  					}
			});