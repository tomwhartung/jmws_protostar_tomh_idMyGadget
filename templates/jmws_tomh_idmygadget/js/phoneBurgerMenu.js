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
		phoneBurgerMenu.drawPhoneBurgerMenus();
	})
})(jQuery);

phoneBurgerMenu.drawPhoneBurgerMenus = function () {
	phoneBurgerMenu.leftElement = document.getElementById( 'phone-burger-menu-left' );
	phoneBurgerMenu.rightElement = document.getElementById( 'phone-burger-menu-right' );

	if ( typeof phoneBurgerMenuLeftColor !== 'undefined' ) {     // set in admin console
		phoneBurgerMenu.drawMenu( phoneBurgerMenu.leftElement, phoneBurgerMenuLeftColor );
		console.log( 'drawing left phone burger menu' );
	}

	if ( typeof phoneBurgerMenuRightColor !== 'undefined' ) {     // set in admin console
		phoneBurgerMenu.drawMenu( phoneBurgerMenu.rightElement, phoneBurgerMenuRightColor );
		console.log( 'drawing right phone burger menu' );
	}
};

phoneBurgerMenu.drawMenu = function ( canvasElement, menuColor ) {
	if ( canvasElement === null ) {
		console.log( 'phoneBurgerMenu.drawMenu error: passed-in canvasElement is null!' );
		return;
	}

	var context = canvasElement.getContext( '2d' );
	var canvasWidth = canvasElement.width;
	var canvasHeight = canvasElement.height;
	var barHeight = Math.round( canvasHeight / 7 );
	var gapHeight = barHeight;   // for now...
	var marginWidth = Math.round( canvasWidth / 7 );
	var barWidth = Math.round( canvasWidth - (marginWidth * 2) );

	console.log( 'canvasWidth: ' + canvasWidth );
	console.log( 'canvasHeight: ' + canvasHeight );

	context.fillStyle = menuColor;
	context.fillRect( marginWidth, barHeight, barWidth, barHeight );
	context.fillRect( marginWidth, barHeight * 3, barWidth, barHeight );
	context.fillRect( marginWidth, barHeight * 5, barWidth, barHeight );

};

