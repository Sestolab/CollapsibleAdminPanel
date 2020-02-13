<?php

defined('is_running') or die('Not an entry point...');


class CollapsibleAdminPanel{

	static function GetHead(){
		global $page, $config;

		if (\gp\tool::LoggedIn() && !$page->title){
			include 'CollapsibleAdminPanel_i18n.inc';
			$i18n = isset($CAP_i18n[$config['language']]) ? $CAP_i18n[$config['language']] : $CAP_i18n['en'];
			$page->jQueryCode .= '$(\'<div class="panelgroup">'
									.'<a class="toplink" data-cmd="CollapseAdminPanel" _title="'.$i18n['Expand'].'">'
										.'<i class=\"fa fa-chevron-circle-left\"></i> <span>'.$i18n['Collapse'].'</span>'
									.'</a>'
								.'</div>\').appendTo($(\'#simplepanel > div\'))';

			\gp\tool\Plugins::css('CollapsibleAdminPanel.scss', false);
			\gp\tool\Plugins::js('CollapsibleAdminPanel.js', false);
		}

	}

}

?>
