
/*
 
 * 主框架
 * author 于得水
 * 
 * */



(function(win) {
	var ZD = { // 中大網校
		modular: {},
		eventUtil: {},
		routerCache: {},
		currentConfigId: 'teaMana',
		detailType: '',
		orgId: ''
	};
	
	
	// console.log(1)
	// ZD.inputTools = function (obj, that) {
	// 	obj.on('focus',function(){
	// 		var othis=$(this);
	// 		console.log(othis.val().trim() == that.userName)
	// 		if(othis.val().trim() == that.userName){
	// 			othis.val("");
	// 		}
	// 	}).on('blur',function(){
	// 		var othis=$(this);
	// 		if(othis.val().trim() == ""){
	// 			othis.val(that.userName);
	// 		}
	// 	});
	// }
	ZD.getHtml = function(url) { // 獲取html

			return ZD.modular[url].html ? ZD.modular[url].html : '没有找到！！！';



	}
	ZD.controller = function(url, callback) { // 模塊化
		var reg = /.js/g;
		if(!ZD.modular[url]) {
			if(reg.test(url)) {
				var id = '#' + url.replace('/', '').replace('.', '');
				// console.log(id)
				if($(id).length > 0) {
					console.log(reg)
					var urlsp = url.split('/');
					if(ZD.modular[urlsp[urlsp.length - 1].split('.')[0] + '.html']) {
						ZD.modular[urlsp[urlsp.length - 1].split('.')[0] + '.html'].cb[0]();
					}
				} else {
					$('body').append('<script id="' + url.replace('/', '').replace('.', '') + '" src="' + url + '"></script>');
					ZD.id = url;
					console.log(ZD.id)
				}

			} 
		}
	}
	// ZD.ajax = function(url, type, dataType, data, successCb, failCb) {
	// 	ZD.requestStart();//加载过程中呈递的页面
	// 	var func;//定义
	// 	var daTy = '';
	// 	var conTy = '';
	// 	if(dataType == 'html') {
	// 		conTy = 'text/html';
	// 		func = function(json) {
	// 			if(json.error) {
	// 				console.log(json.error);
	// 			}
	// 			if(ZD.getDataType(successCb) === 'Function') {
	// 				ZD.modular[url] = {
	// 					html: json,
	// 					cb: []
	// 				}
	// 				ZD.modular[url].cb.push(successCb);
	// 				successCb(json);
	// 			}
	// 		}
	// 	} else {
	// 		daTy = 'json';
	// 		conTy = 'application/json;charset=UTF-8';
	// 		func = successCb;
	// 		url = ZD.url + url;
	// 	}
	// 	$.ajax({
	// 		type: type,
	// 		url: url,
	// 		dataType: daTy,
	// 		contentType: conTy,
	// 		data: JSON.stringify(data),
	// 		success: function(json) {
	// 			//成功
	// 			func(json);
	// 			ZD.requestEnd();
	// 		},
	// 		error: function(e) {
	// 			ZD.requestEnd();
	// 		},
	// 		complete: function(xhr, textStatus) {
	// 	        if (xhr.status == 1010) {
	// 	        	ZD.clearCookie('userData');//
	// 				ZD.controller('js/login.js');//重新登录
	// 	        }
	// 	    } 
	// 	});
	// }







	win.ZD = ZD;
	//	win.alert = function () {
	//		new 
	//	}


	// 
})(this ? this : global);