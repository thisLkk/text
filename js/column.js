
/*
 
 * 导航管理
 * author 于得水
 * 
 * */
console.log(1)
ZD.controller('column.html', function() {
	// console.log(1)
	$('#mainEntrance').html(ZD.getHtml('column.html'));
	$('#webNav').height($('#mainEntrance').height());
});