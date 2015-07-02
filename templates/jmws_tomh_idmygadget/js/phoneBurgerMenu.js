/**
 * @package     jmws_tomh_idMyGadget
 * @subpackage  Templates.jmws_tomh_idMyGadget; Modules.jmws_mod_menu_idMyGadget
 * @copyright   Copyright (C) 2005 - 2015 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @since       3.2
 */

var phoneBurgerMenu = {};

(function($)
{
	$(document).ready(function()
	{
		phoneBurgerMenu.leftElt = document.getElementById( 'phone-burger-menu-left' );
		phoneBurgerMenu.rightElt = document.getElementById( 'phone-burger-menu-right' );
		phoneBurgerMenu.leftColor = phoneBurgerMenuLeftColor;     // set in admin console
		phoneBurgerMenu.rightColor = phoneBurgerMenuRightColor;   // set in admin console
		console.log( 'phoneBurgerMenu.leftElt: ' + phoneBurgerMenu.leftElt );
		console.log( 'phoneBurgerMenu.leftColor: ' + phoneBurgerMenu.leftColor );
		console.log( 'phoneBurgerMenu.rightElt: ' + phoneBurgerMenu.rightElt );
		console.log( 'phoneBurgerMenu.rightColor: ' + phoneBurgerMenu.rightColor );
	})
})(jQuery);
