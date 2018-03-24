// /*
//  * 功能组件
//  * author： deshui.yu
//  */
// var domTofragment = function(node, vm) { // 创建文档片段，把当前元素下的所有子元素放到文档片段里面
// 	var frag = document.createDocumentFragment();
// 	var child;
// 	var first = node.firstChild;
// 	while(first) {
// 		initDataBind(first, vm);
// 		first = first.nextSibling;
// //		frag.appendChild(child);
// 	}
// 	return frag;
// }
// var initDataBind = function(node, vm) { // 初次加载数据
// 	if(node.firstChild) {
// 		return domTofragment(node, vm);
// 	} else {
// 		var reg = /\{\{(.*)\}\}/g;
// 		if(node.nodeType === 3) {
// 			if(reg.test(node.nodeValue)) {
// 				var name = RegExp.$1;
// 				name = name.trim();
// 				node.nodeValue = vm[name];
// 				//					new Watcher(vm, node, name);
// 			}
// 		}else {
// 			if(node.getAttribute('zd-model')) {
// 				var attr = node.getAttribute('zd-model').trim();
// 				node.value = vm[attr];
// 				vm.elementList.push({
// 					el: node,
// 					name: attr,
// 					value: node.value
// 				});
// 				node.addEventListener('input', function(e) {
// 					vm[attr] = this.value;
// 				});
// 			}
// 			if(node.getAttribute('zd-if')) {
// 				var attr = node.getAttribute('zd-if').trim();
// 				if (vm[name]) {
// 					node.style.display = 'block';
// 				} else {
// 					node.style.display = 'none';
// 				}
// 			}
// 			if (node.getAttribute('zd-if')) {
				
// 			}
// 			if(node.nodeName.toLowerCase() == 'img') {
// 				if(reg.test(node.getAttribute('src'))) {
// 					var name = RegExp.$1;
// 					name = name.trim();
// 					node.src = vm[name];
// 				}
// 			}
// 		}
// 	}
// }

// function ZDVue(options) { // 模拟vue
// //	this.data = options.data;
// 	$.extend(this, options.data);
// 	this.el = $(options.el)[0];
// 	this.elementList = [];
// 	var dom = domTofragment(this.el, this);
// 	var _this = this;
// 	ZD.addEvent('ZDVue', 'inputUpdata', function (param) {
// 		$.each(_this.elementList, function(index, value) {
// 			if (value.el == param.el) {
// 				_this[param.name] = param.value;
// 				console.log(_this[param.name])
// 			}
// 		});
// 	})
// 	this.el.appendChild(dom);
// }

// function QuestType(el, option) { //选择科目
// 	this.el = $(el);
// 	this.option = {};
// 	$.extend(this.option, option);
// 	this.count = 0;
// 	console.log(option.data);
// 	this.el.siblings('input').val(option.data[0].name);
// 	this.init(option.data);//数据来源
// }
// QuestType.prototype.init = function(data) { // 初始化元素并添加事件
// 	var _this = this;
// 	var ccc = this.createHtml(data, '', this.option.title, 1) + '</ul>';
// 	this.el.append(ccc);
// 	$('#' + this.id).css({
// 		left: 0 + 'px',
// 		top: this.el.height() + 'px'
// 	})
// 	this.proUl = this.el.find('ul').eq(0);
// 	//	if(this.option.type != 'create') {
// 	this.proUl.show();
// 	//	}
// 	this.proUl.click(function(e) {
// 		if($(e.target).find('ul').eq(0)) {
// 			$(e.target).find('ul').eq(0).toggle();
// 		} else {
// 			_this.linkageId = $(e.target).attr('_id');
// 		}
// 		if (_this.option.select) {
// 			_this.el.find('input').val($(e.target).attr('value'));
// 			_this.el.find('input').attr('_id', $(e.target).attr('_id'));
// 			_this.el.find('input').attr('index', $(e.target).attr('index'));
// 			if ($(e.target).attr('type')) {
// 				_this.el.find('input').attr('_type', $(e.target).attr('type'));
// 			}
// 			if (_this.option.afterChoose) {
// 				_this.option.afterChoose.call(_this);
// 			}
// 			ZD.dispatchEvent('ZDVue', 'inputUpdata', {
// 				el: _this.el.find('input')[0],
// 				name: _this.el.find('input').attr('zd-model'),
// 				value: _this.el.find('input').val()
// 			});
// 		}
// 		if(_this.option.callback) {
// 			_this.option.callback.call(_this, e);
// 		}
// 	});
// }
// QuestType.prototype.createHtml = function createHtmlFunc(jsonObj, str, attr, index) { // 创建Dom
// 	if(index <= 1) {
// 		index = 1;
// 	}
// 	var time = new Date().getTime();
// 	this.id = 'selection' + time;
// 	str = '<ul id="'+this.id+'" style="text-indent:' + 20 * index + 'px;z-index:1000;display: none;">';
// 	for(var j = 0; j < jsonObj.length; j++) {
// 		if(jsonObj[j][attr] && jsonObj[j][attr].length > 0) {
// 			str += '<li '+(jsonObj[j].parentLevel ? 'parentLevel' + jsonObj[j].parentLevel : '')+' '+(jsonObj[j].type ? 'type="'+jsonObj[j].type+'"' : '')+' index="'+j+'" value="' + jsonObj[j].name + '" _id="' + jsonObj[j].id + '">' + jsonObj[j].name + '<ul style="text-indent:' + 20 * (index + 1) + 'px;display: none;">';
// 			for(var i = 0; i < jsonObj[j][attr].length; i++) {
// 				if(jsonObj[j][attr][i][attr] && jsonObj[j][attr][i][attr].length > 0) {
// 					str += '<li '+(jsonObj[j][attr][i].parentLevel ? 'parentLevel' + jsonObj[j][attr][i].parentLevel : '')+' '+(jsonObj[j][attr][i].type ? 'type="'+jsonObj[j][attr][i].type+'"' : '')+' value="' + jsonObj[j][attr][i].name + '" style="" _id="' + jsonObj[j][attr][i].id + '">' + jsonObj[j][attr][i].name;
// 					str += this.createHtml(jsonObj[j][attr][i][attr], '', attr, index + 2) + '</ul></li>';
// 				} else {
// 					str += '<li '+(jsonObj[j][attr][i].parentLevel ? 'parentLevel' + jsonObj[j][attr][i].parentLevel : '')+' '+(jsonObj[j][attr][i].type ? 'type="'+jsonObj[j][attr][i].type+'"' : '')+' value="' + jsonObj[j][attr][i].name + '" _id="' + jsonObj[j][attr][i].id + '">' + jsonObj[j][attr][i].name + '</li>';
// 				}
// 			}
// 			str += '</ul></li>';
// 		} else {
// 			str += '<li '+(jsonObj[j].parentLevel ? 'parentLevel' + jsonObj[j].parentLevel : '')+' '+(jsonObj[j].type ? 'type="'+jsonObj[j].type+'"' : '')+' index="'+j+'" value="' + jsonObj[j].name + '" _id="' + jsonObj[j].id + '">' + jsonObj[j].name + '</li>';
// 		}
// 	}
// 	return str;
// }
// QuestType.prototype.show = function () {
// 	$('#' + this.id).toggle();
// }
// QuestType.prototype.linkage = function() { //联动
// 	var id = this.linkageId;
// 	//	for () {
// 	//		
// 	//	}
// 	return data;
// }

// //<input type="radio" name="radio" value="1">单选1
// function AddQuest(el, option) { // 答案编辑，新加答案
// 	this.el = $(el);
// 	this.option = {
// 		answer: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
// 	};
// 	$.extend(this.option, option);
// 	this.init();
// 	this.addEvent();
// }
// AddQuest.prototype.init = function() { // 初始化创建元素并添加事件
// 	var str = '<ul>';
// 	//	var len = this.option.answer.length + 1;
// 	for(var i = 0; i < 5; i++) {
// 		if(i == 0) {
// 			str += '<li class="chairFix"><span>选项</span><span>内容</span><span>正确答案</span><span>操作</span></li>';
// 		} else {
// 			str += '<li class="chairFix"><span>' + this.option.answer[i - 1] + '</span><span><input type="text"></span><span><input type="radio" name="radio"></span><span _index="' + i + '" _id="delete">删除</span></li>';
// 		}
// 	}
// 	str += '</ul><a _id="add" style="display: block;margin-top: 10px" href="javascript: void(0)">添加选项</a>';
// 	this.el.append(str);

// }
// AddQuest.prototype.addEvent = function() {
// 	var _this = this
// 	this.el.find('ul').on('click', function del(e) {
// 		var target = $(e.target);
// 		var lis = $(this).find('li');
// 		var li = lis.eq(target.attr('_index'));
// 		if(target.attr('_id') == 'delete') {
// 			li.remove();
// 			lis = $(this).find('li');
// 			lis.each(function(index, value) {
// 				if(index != 0) {
// 					$(this).find('span').eq(0).html(_this.option.answer[index - 1]);
// 				}
// 			});
// 		}
// 	});
// 	var _this = this;
// 	this.el.find('a').on('click', function() {
// 		_this.addOption();
// 	});
// }
// AddQuest.prototype.addOption = function() { // 添加选项
// 	this.el.find('ul').append('<li><span>' + this.option.answer[this.el.find('ul li').length - 1] + '</span><span><input></span><span><input type="radio" name="radio"></span><span _id="delete">删除</span></li>');
// }

// function Paging(el, option) { // 分页
// 	this.el = $(el);
	
// 	this.option = {
// 		curPage: 1,
// 		allPage: 10,
// 		showPage: 5,
// 		cb: function() {}
// 	};
// 	$.extend(this.option, option);
// 	this.option.showPage = this.option.allPage < this.option.showPage ? this.option.allPage : this.option.showPage;
// 	this.init();
// }
// Paging.prototype.init = function() { // 初始化元素并添加事件
	
// 	this.firsPage();
// 	var _this = this;
// 	var n = this.option.allPage + 1;
// 	var w = this.option.allPage + 2;
// 	this.el.on('click', function(e) {
// 		e.preventDefault();
// 		var id = Number($(e.target).attr('pageId'));
// 		if(id != n + '' && id != w + '' && id != '0' && id != '-1') {
// 			_this.option.curPage = id;
// 		}
		
// 		switch(id) {
// 			case -1:
// 				_this.firsPage();
// 				break;
// 			case 0:
// 				_this.prevPage();
// 				break;
// 			case n:
// 				_this.nextPage();
// 				break;
// 			case w:
// 				_this.lastPage();
// 				break;
// 			default:
// 				_this.witchPage();
// 		}
// 		if(_this.option.cb) {
// 			_this.option.cb();
// 		}
// 	});
// }
// Paging.prototype.firsPage = function() { // 首页
// 	this.option.curPage = 1;
// 	this.createPage(0);
// }
// Paging.prototype.createPage = function(diff) { // 创建元素
// //	console.log(this.option.showPage)
// 	if (this.option.allPage <= 1) {
// 		this.el.html('');
// 		return ;
// 	}
// 	if (this.option.showPage <= 1) {
// 		this.el.html('');
// 		return ;
// 	}
// 	var str = '<div id="ydsCreatePage" class="chairFix">';
// 	//	var diff = this.option.curPage - diff < 0 ? 0 : this.option.curPage - diff;
// 	if (this.option.showPage >= 5) {
// 		str += '<a class="gray index" pageId="-1">首页</a><a class="gray previous" pageId="0">上一页</a>'
// 	}
// 	var curPa;
// 	if(this.option.curPage == 1 || this.option.curPage == 2) {
// 		curPa = 1;
// 		diff = 0;
// 	} else if(this.option.curPage == this.option.allPage) {
// 		curPa = this.option.curPage;
// 		diff = this.option.showPage - 1;
// 	} else if(this.option.curPage == (this.option.allPage - 1)) {
// 		curPa = this.option.curPage;
// 		diff = this.option.showPage - 2;
// 	} else {
// 		curPa = this.option.curPage;
// 	}
// 	for(var i = curPa - diff; i < (curPa - diff + this.option.showPage); i++) {
// 		if(i == this.option.curPage) {
// 			str += '<span class="active" pageId="' + i + '">' + i + '</span>';
// 		} else {
// 			str += '<a pageId="' + i + '">' + i + '</a>';
// 		}
// 	}
// 	if (this.option.showPage >= 5) {
// 		str += '<a class="gray next" pageId="' + (this.option.allPage + 1) + '">下一页</a><a class="gray last" pageId="' + (this.option.allPage + 2) + '">末页</a>';
// 	}
// 	str += '</div>'
// 	this.el.html(str);
	
// }
// Paging.prototype.prevPage = function() { // 上一页
// 	if(this.option.curPage > 1) {
// 		this.option.curPage--;
// 	}
// 	if(this.option.curPage > Math.floor(this.option.showPage / 2)) {
// 		this.createPage(Math.floor(this.option.showPage / 2));
// 	} else {
// 		this.createPage(0);
// 	}
// }
// Paging.prototype.nextPage = function() { // 下一页
// 	if(this.option.curPage < this.option.allPage) {
// 		this.option.curPage++;
// 	}
// 	if(this.option.curPage <= this.option.allPage - Math.floor(this.option.showPage / 2)) {
// 		this.createPage(Math.floor(this.option.showPage / 2));
// 	} else {
// 		this.createPage(Math.floor(this.option.allPage / 2) - 2);
// 	}
// }
// Paging.prototype.lastPage = function() { //最后一页
// 	this.option.curPage = this.option.allPage;
// 	this.createPage(Math.floor(this.option.allPage / 2));
// }
// Paging.prototype.witchPage = function(page) { //第N页
// 	if(this.option.curPage > Math.floor(this.option.showPage / 2) && this.option.curPage <= this.option.allPage - Math.floor(this.option.showPage / 2)) {
// 		this.createPage(Math.floor(this.option.showPage / 2));
// 	} else if(this.option.curPage <= Math.floor(this.option.showPage / 2)) {
// 		this.createPage(0);
// 	} else if(this.option.curPage > this.option.allPage - Math.floor(this.option.showPage / 2)) {
// 		this.createPage(Math.floor(this.option.allPage / 2));
// 	}
// }

// function UniverTable(el, option) { // 通用表格
// 	this.el = $(el);
// 	this.option = {
// 		data: [],
// 		rowTitle: ['标题一', '标题二', '标题三', '标题四'], // 第一行标题，必填
// 		fieldName: ['title1', 'title2', 'title3'], // 解析字段，必填
// 		operation: [{
// 			name: '编辑',
// 			func: function () {
				
// 			},
// 			classSelec: 'editUniverTable'
// 		},{
// 			name: '删除',
// 			func: function () {
				
// 			},
// 			classSelec: 'deleteUniverTable'
// 		}] // 操作，选填
// 	};
// 	$.extend(this.option, option);//继承传进来的option
// 	this.init();
// }
// UniverTable.prototype.init = function() { // 初始化
// 	this.createElem();
// 	this.addEvent();
// }
// UniverTable.prototype.createElem = function() { // 创建Dom元素
// 	var str = '<ul><li class="chairFix">';
// 	var data = this.option.data;
// 	var rowTitle = this.option.rowTitle;
// 	var fieldName = this.option.fieldName;
// 	var operation = this.option.operation;
// 	var operaFunc = this.option.operaFunc;
// 	var wid = 100 / rowTitle.length;
// 	$.each(rowTitle, function(index, item) {//遍历添加进来的rowtitle
// 		str += '<span>' + item + '</span>';
// 	});
// 	str += '</li>';
// 	for(var i = 0; i < data.length; i++) {
// 		str += '<li class="chairFix">';
// 		for(var j = 0; j < fieldName.length; j++) {
// 			if (fieldName[j].field) {
// 				str += '<span><img style="width: 100%;height: 100%;"  src="' + data[i][fieldName[j].field] + '"></span>';
// 			} else {
// 				str += '<span _id="'+i+'">' + (data[i][fieldName[j]] ? data[i][fieldName[j]] : '') + '</span>';
// 			}
// 		}
// 		if (operation.length > 0) {
// 			str += '<span style="position: relative;">';
// 			for(var k = 0; k < operation.length; k++) {
// 				var btn = true;
// 				if (this.option.opraField) {
// 					for (var l = 0; l < this.option.opraField.length; l++) {
// 						if (this.option.Additional) {
// 							if (this.option.opraField[l].name == operation[k].name && data[i][this.option.Additional.name] != this.option.Additional.flag && (data[i][this.option.opraField[l].opraField] == 1 || data[i][this.option.opraField[l].opraField] == 2)) {
// 								btn = false;
// 							}
// 						} else if (this.option.opraField[l].name == operation[k].name && (data[i][this.option.opraField[l].opraField] == 1 || data[i][this.option.opraField[l].opraField] == 2)) {
// 							btn = false;
// 						}
						
// 					}
// 				}	
// 				if (btn) {
// 					str += '<i class="pointer-btn '+operation[k].classSelec+'" _index="' + k + '" liId="' + (i + 1) + '">' + operation[k].name + '</i>';
// 				}
// 			}
// 			str += '</span>';
// 		}	
// 		str += '</li>';
// 	}
// 	this.el.html(str);
// }
// UniverTable.prototype.addEvent = function() { // 事件添加
// 	var _this = this;
// 	this.el.find('ul').on('click', function(e) {
// 		var _id = $(e.target).attr('_index');
// 		if(e.target.nodeName.toLowerCase() == 'i' && _id) {
// 			_this.option.operation[_id].func.call(_this, e);
// 		}
// 	});
// }
// UniverTable.prototype.deleteTable = function(e) { // 删除元素
// 	var _this = this;
// 	$(e.target).parents('li').remove();
// }

// function showTestQuestions(el, option) {
// 	this.el = $(el);
// 	this.option = {
		
// 	};
// 	$.extend(this.option, option);
// 	this.init();
// }
// showTestQuestions.prototype.init = function () {
// 	this.createHtml();
// 	this.shiftUp();
// 	this.shiftDown();
// 	this.bigProDelete();
// }
// showTestQuestions.prototype.createHtml = function() {
// 	var data = this.option.data;
// 	var str = '';
// 	$.each(data, function(index, item) {
// 		str += '<div class="onlyOneBig">' 
// 			+'<h4>' + item.content + '</h4>' 
// 			+'<p><span>共' + item.qList.length + '题</span><span>共' + item.totleScore + '分</span></p>' 
// 			+'<p style="padding-left: 20px;"><a href="javascript:void(0)" class="leftModify">修改</a>' 
// 			+'<a class="leftDelete" href="javascript:void(0)">删除</a>' 
// 			+'<a class="leftMoveUp" href="javascript:void(0)">上移</a>' 
// 			+'<a class="leftMoveDown" href="javascript:void(0)">下移</a>' 
// 			+'</p></div>';
// 	});
// 	str += '<a href="javascript: void(0)" class="creBigPro">创建大题</a>';
// 	this.el.append(str);
// 	var _this = this;
// 	this.el.on('click', function (e) {
// 		var className = $(e.target).prop('className');
// 		switch (className){
// 			case 'leftMoveUp':
// 				_this.shiftUp($(e.target));
// 				break;
// 			case 'leftMoveDown':
// 				_this.shiftDown($(e.target));
// 				break;
// 			case 'creBigPro':
// 				_this.creBigPro($(e.target));
// 				break;
// 			case 'leftDelete':
// 				_this.bigProDelete($(e.target));
// 				break;
// 			default:
// 				break;
// 		}
// 	});
// }
// showTestQuestions.prototype.shiftUp = function(el) {
// 	if (el && el.parents('.onlyOneBig').prev('.onlyOneBig').length > 0) {
// 		el.parents('.onlyOneBig').prev('.onlyOneBig').before(el.parents('.onlyOneBig'));
// 	}
// }
// showTestQuestions.prototype.shiftDown = function(el) {
// 	if (el && el.parents('.onlyOneBig').next('.onlyOneBig').length > 0) {
// 		el.parents('.onlyOneBig').next('.onlyOneBig').after(el.parents('.onlyOneBig'));
// 	}
// }
// showTestQuestions.prototype.bigProDelete = function(el) {
// 	if (el) el.parents('.onlyOneBig').remove();
// }
// showTestQuestions.prototype.creBigPro = function() {
// 	var str = '<div class="addQuest"><div><label for="createBigTitle">标题</label><input id="createBigTitle" type="text" ></div>' +
// 		'<div><label for="creEveryScore">每题</label><input id="creEveryScore" type="text" >分</div>' +
// 		'<div><span class="saveBigPro">保存</span><span class="cancleSaveBig">取消</span></div>';
// 	$('.creBigPro').before(str);
// 	$('.creBigPro').hide();
// 	var _this = this;
// 	$('.saveBigPro').on('click', function () {
// 		_this.saveBigPro();
// 		$('.creBigPro').show();
// 	});
// 	$('.cancleSaveBig').on('click', function () {
// 		_this.cancelSave();
// 		$('.creBigPro').show();
// 	})
// }
// showTestQuestions.prototype.saveBigPro = function() {
// 	var bigTitle = $('#createBigTitle').val();
// 	var everyScore = $('#creEveryScore').val();
// 	if (!bigTitle || !everyScore) {
// 		alert('请输入完整信息！！');
// 		return;
// 	}
// 	var str = '<div class="onlyOneBig">' 
// 		+'<h4>' + bigTitle + '</h4>' 
// 		+'<p><span>共' + 0 + '题</span><span>共' + 0 + '分</span></p>' 
// 		+'<p style="padding-left: 20px;"><a href="javascript:void(0)" class="leftModify">修改</a>' 
// 		+'<a class="leftDelete" href="javascript:void(0)">删除</a>' 
// 		+'<a class="leftMoveUp" href="javascript:void(0)">上移</a>' 
// 		+'<a class="leftMoveDown" href="javascript:void(0)">下移</a>' 
// 		+'</p></div>';
// 	$('.addQuest').replaceWith(str);
// }
// showTestQuestions.prototype.cancelSave = function() {
// 	$('.addQuest').remove();
// }
// showTestQuestions.prototype.modifyBigPro = function() {

// }

// function Alert(option) {
// 	this.el = $('body');
// 	var _this = this;
// 	this.option = {
// 		width: '300px',
// 		height: '200px',
// 		title: '提示信息',
// 		content: '请输入提示信息',
// 		customOpera: false, // 是否自定义
// 		confirm: '确定',
// 		cancel: '取消',
// 		closeCall: function () {
			
// 		},
// 		confirCall: function() {
// 			_this.closed();
// 		},
// 		cancelCall: function() {
// 			_this.closed();
// 		},
// 		callback: function () {
			
// 		}
// 	}
// 	$.extend(this.option, option);
// 	this.init();
// }
// Alert.prototype.init = function() {
// 	this.createHtml();
// 	this.addEvent();
// }
// Alert.prototype.createHtml = function() { //<h3>'+this.option.title+'</h3>
// 	this.timeId = 'winAlertClass' + (new Date()).getTime();
// 	var str = '<div id="' + this.timeId + '" style="position: fixed; left: 0; top: 0;width: 100%; height: 100%;z-index: 1000;">' +
// 		'<div class="winMask" style="background: rgba(0, 0, 0, .3);width: 100%; height: 100%;"></div>' +
// 		'<div class="winalert" style="background: #fff;border-radius: 5px;overflow: hidden; width: ' + this.option.width + '; height: ' + this.option.height + ';position: absolute; left: 50%; top: 50%;margin-left: -' + parseInt(this.option.width) / 2 + 'px;margin-top: -' + parseInt(this.option.height) / 2 + 'px;"><h3 style="height: 50px;line-height: 50px;background: #EAEAEA;text-indent: 30px">' + this.option.title + '</h3>' +
// 		'<div class="alertContent">' + this.option.content + '</div>';
// 	if(!this.option.customOpera) {
// 		str += '<div class="alertBtn chairFix"><a class="alertCancel" href="javascript: void(0);">' + this.option.cancel + '</a><a class="alertConfirm" href="javascript: void(0);">' + this.option.confirm + '</a></div></div>';
// 	} else {
// 		str += '</div>';
// 	}
// 	$('#mainEntrance').append(str);
// 	this.option.callback();
// 	//	$('#' + this.timeId).fadeIn();
// }
// Alert.prototype.closed = function(time, callback) {
// 	if(!time) {
// 		time = 0;
// 	}
// 	var _this = this;
// 	setTimeout(function () {
// 		$('#' + _this.timeId).fadeOut('normal', function() {
// 			if (_this.option.closeCall) {
// 				_this.option.closeCall();
// 			}
// 			$('#' + _this.timeId).remove();
// 		});
// 	}, time);
// }
// Alert.prototype.addEvent = function() {
// 	var _this = this;
// 	$('.winMask').on('click', function() {
// 		_this.closed();
// 	});
// 	$('.alertCancel').on('click', function() {
// 		_this.option.cancelCall();
// 	});
// 	$('.alertConfirm').on('click', function() {
// 		_this.option.confirCall();
// 	});
// }
// function Nav (el, option) {
// 	this.el = $(el);
// 	this.option = {
// 		data: ['1', '2', '3'],
// 		callback: function () {
// 			console.log('44444444444')
// 		}
// 	};
// 	$.extend(this.option, option);
// 	this.init();
// }

// Nav.prototype.init = function () {
// 	this.createHtml();
// 	this.addEvent();
// }
// Nav.prototype.createHtml = function () {
// 	var str = '<ul class="generalNavigation chairFix">';
// 	$.each(this.option.data, function (index, value) {
// 		if (index == 0) {
// 			str += '<li><a class="active" href="javascript: void(0);">'+value+'</a></li>';
// 		} else {
// 			str += '<li><a href="javascript: void(0);">'+value+'</a></li>'
// 		}
		
// 	});
// 	str += '</ul>';
// 	this.el.html(str);
// }
// Nav.prototype.addEvent = function () {
// 	var _this = this;
// 	$('.generalNavigation a').each(function (index, value) {
// 		$(this).click(function (e) {
// 			var divs = _this.el.next('div').find('div.rightCon');
// 			divs.each(function () {
// 				$(this).hide();
// 			});
// 			divs.eq(index).show();
// 			_this.option.callback.call(_this, $(e.target));
// 		});
// 	});
// }

// function showOrdeList (el, option) {
// 	this.el = $(el);
// 	this.option = {};
// 	$.extend(this.option, option);
// 	this.init();
// }

// showOrdeList.prototype.init = function () {
// 	this.createHtml();
// 	this.addEvent();
// }

// showOrdeList.prototype.createHtml = function () {
// 	var str = '';
// 	$.each(this.option.data, function (index, value) {
// 		str += '<div class="oneOrder"><h3><span>订单编号：' + value.orderHao + '</span><span>下单时间：'+value.createTime+'</span><span>订单金额：'+value.price+'</span><span>用户名：'+value.userName+'</h3>';
// 		str += '<div><div class="order">';
// 		$.each(value.proList, function (index, pro) {
// 			str += '<div><img src="'+pro.imgSrc+'"><div><p>'+pro.name+'</p><p>'+pro.price+'</p></div><p>数量：x'+pro.num+'</p></div>';
// 		});
// 		str += '</div>';
// 		str += '<div><p>状态'+pro.status+'</p><p>订单来源：'+pro.source+'</p><p>实付款:'+pro.paid+'</p></div>';
// 		str += '<div><a class="viewDetails" href="javascript: void(0);">查看详情</a></div>'
// 	});
// 	this.el.append(str);
// }
// showOrdeList.prototype.addEvent = function () {
// 	$('.viewDetails').click(function () {
		
// 	});
// }
