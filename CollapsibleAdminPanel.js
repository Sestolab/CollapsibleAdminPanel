$(function(){

	$gp.links.CollapseAdminPanel = function(){
		var gpversion = $('#simplepanel > div .gpversion');

		$('html').toggleClass('CollapsedAdminPanel');
		$('#simplepanel').toggleClass('compact');
		$('a[data-cmd="CollapseAdminPanel"] > i').toggleClass('fa-chevron-circle-left fa-chevron-circle-right');
		if ($('html').hasClass('CollapsedAdminPanel')){
			gpui.cmpct = 1;
			gpversion.html($('<i>', {'class': 'fa fa-info', 'title': gpversion.text()}));
			$('a[data-cmd="CollapseAdminPanel"]').attr('title', $('a[data-cmd="CollapseAdminPanel"]').attr('_title'));
		}else{
			gpui.cmpct = 0;
			gpversion.text(gpversion.children('i').attr('title')).children('i').remove();
			$('a[data-cmd="CollapseAdminPanel"]').removeAttr('title');
		}
		$gp.SaveGPUI();
	};

	if (gpui.cmpct > 0)
		$gp.links.CollapseAdminPanel();

});