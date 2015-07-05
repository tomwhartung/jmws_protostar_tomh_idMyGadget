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
	//	phoneBurgerMenu.drawThinSquarePhoneBurgerMenu( phoneBurgerMenu.leftElement, phoneBurgerMenuLeftColor );
	//	phoneBurgerMenu.drawFatSquarePhoneBurgerMenu( phoneBurgerMenu.leftElement, phoneBurgerMenuLeftColor );
		phoneBurgerMenu.drawThinRoundedPhoneBurgerMenu( phoneBurgerMenu.leftElement, phoneBurgerMenuLeftColor );
	//	phoneBurgerMenu.drawFatRoundedPhoneBurgerMenu( phoneBurgerMenu.leftElement, phoneBurgerMenuLeftColor );
	//	console.log( 'drawing left phone burger menu' );
	}

	if ( typeof phoneBurgerMenuRightColor !== 'undefined' ) {     // set in admin console
	//	phoneBurgerMenu.drawThinSquarePhoneBurgerMenu( phoneBurgerMenu.rightElement, phoneBurgerMenuRightColor );
	//	phoneBurgerMenu.drawFatSquarePhoneBurgerMenu( phoneBurgerMenu.rightElement, phoneBurgerMenuRightColor );
		phoneBurgerMenu.drawThinRoundedPhoneBurgerMenu( phoneBurgerMenu.rightElement, phoneBurgerMenuRightColor );
	//	phoneBurgerMenu.drawFatRoundedPhoneBurgerMenu( phoneBurgerMenu.rightElement, phoneBurgerMenuRightColor );
	//	console.log( 'drawing right phone burger menu' );
	}
};
/**
 * Thin Square: three rectangles, each the same height as the two gaps,
 *    and top and bottom margins as well
 * @param {type} canvasElement
 * @param {type} menuColor
 * @returns {undefined}
 */
phoneBurgerMenu.drawThinSquarePhoneBurgerMenu = function ( canvasElement, menuColor ) {
	if ( canvasElement === null ) {
		console.log( 'phoneBurgerMenu.drawThinSquarePhoneBurgerMenu error: passed-in canvasElement is null!' );
		return;
	}

	var context = canvasElement.getContext( '2d' );
	var canvasWidth = canvasElement.width;
	var canvasHeight = canvasElement.height;
	var barHeight = Math.round( canvasHeight / 7 );
	var gapHeight = barHeight;
	var marginWidth = Math.round( canvasWidth / 7 );
	var barWidth = Math.round( canvasWidth - (marginWidth * 2) );

	console.log( 'ThinSquare, barHeight: ' + barHeight );
	console.log( 'ThinSquare, gapHeight: ' + gapHeight );

	context.save();
	context.fillStyle = menuColor;
	context.fillRect( marginWidth, barHeight, barWidth, barHeight );
	context.fillRect( marginWidth, barHeight * 3, barWidth, barHeight );
	context.fillRect( marginWidth, barHeight * 5, barWidth, barHeight );
};
/**
 * Fat Square: three rectangles, each twice the height of the two gaps,
 *    with no top margin and minimal (leftover) bottom margin
 * @param {type} canvasElement
 * @param {type} menuColor
 * @returns {undefined}
 */
phoneBurgerMenu.drawFatSquarePhoneBurgerMenu = function ( canvasElement, menuColor ) {
	if ( canvasElement === null ) {
		console.log( 'phoneBurgerMenu.drawFatSquarePhoneBurgerMenu error: passed-in canvasElement is null!' );
		return;
	}

	var context = canvasElement.getContext( '2d' );
	var canvasWidth = canvasElement.width;
	var canvasHeight = canvasElement.height;
	var barHeight = Math.round( canvasHeight / 4 );
	var gapHeight = Math.round( canvasHeight / 8 )
	var marginWidth = Math.round( canvasWidth / 8 );
	var barWidth = Math.round( canvasWidth - (marginWidth * 2) );

	console.log( 'FatSquare, barHeight: ' + barHeight );
	console.log( 'FatSquare, gapHeight: ' + gapHeight );

	context.save();
	context.fillStyle = menuColor;
	context.fillRect( marginWidth, 0, barWidth, barHeight );
	context.fillRect( marginWidth, barHeight + gapHeight, barWidth, barHeight );
	context.fillRect( marginWidth, 2 * (barHeight + gapHeight), barWidth, barHeight );
};
/**
 * Thin Rounded: three rounded rectangles, each the same height as the two gaps,
 *    and top and bottom margins as well
 * @param {type} canvasElement
 * @param {type} menuColor
 * @returns {undefined}
 */
phoneBurgerMenu.drawThinRoundedPhoneBurgerMenu = function ( canvasElement, menuColor ) {
	if ( canvasElement === null ) {
		console.log( 'phoneBurgerMenu.drawThinRoundedPhoneBurgerMenu error: passed-in canvasElement is null!' );
		return;
	}

	var context = canvasElement.getContext( '2d' );
	var canvasWidth = canvasElement.width;
	var canvasHeight = canvasElement.height;
	var barHeight = Math.round( canvasHeight / 7 );
	var gapHeight = barHeight;
	var marginWidth = Math.round( canvasWidth / 7 );
	var barWidth = Math.round( canvasWidth - (marginWidth * 2) );

	console.log( 'ThinRounded, barHeight: ' + barHeight );
	console.log( 'ThinRounded, barWidth: ' + barWidth );
	console.log( 'ThinRounded, gapHeight: ' + gapHeight );

	context.save();
	context.beginPath();
	context.strokeStyle = menuColor;
	context.lineWidth = barHeight;
	context.lineCap = 'round';

	context.moveTo( marginWidth, gapHeight );
	context.lineTo( marginWidth+barWidth, gapHeight );

	context.moveTo( marginWidth, barHeight+(gapHeight*2) );
	context.lineTo( marginWidth+barWidth, barHeight+(gapHeight*2) );

	context.moveTo( marginWidth, (barHeight*2)+(gapHeight*3) );
	context.lineTo( marginWidth+barWidth, (barHeight*2)+(gapHeight*3) );

	context.stroke();
	context.restore();

};

/**
 * Thin Rounded: three rounded rectangles, each the same height as the two gaps,
 *    and top and bottom margins as well
 * @param {type} canvasElement
 * @param {type} menuColor
 * @returns {undefined}
 */
phoneBurgerMenu.drawThinRoundedPhoneBurgerMenuUsingArcTo = function ( canvasElement, menuColor ) {
	if ( canvasElement === null ) {
		console.log( 'phoneBurgerMenu.drawThinRoundedPhoneBurgerMenu error: passed-in canvasElement is null!' );
		return;
	}

	var context = canvasElement.getContext( '2d' );
	var canvasWidth = canvasElement.width;
	var canvasHeight = canvasElement.height;
	var barHeight = Math.round( canvasHeight / 7 );
	var gapHeight = barHeight;   // for now...
	var marginWidth = Math.round( canvasWidth / 7 );
	var barWidth = Math.round( canvasWidth - (marginWidth * 2) );

	console.log( 'ThinRounded, barHeight: ' + barHeight );
	console.log( 'ThinRounded, barWidth: ' + barWidth );
	console.log( 'ThinRounded, gapHeight: ' + gapHeight );

	context.save();
	context.beginPath();
	context.strokeStyle = menuColor;
//	context.arcTo( marginWidth, barHeight, (marginWidth+barWidth), barHeight * 2, 3 );
	context.moveTo( marginWidth, gapHeight );
	context.lineTo( marginWidth+barWidth, gapHeight );
	context.lineTo( marginWidth+barWidth, gapHeight+barHeight );
	context.arcTo ( marginWidth+barWidth, gapHeight, marginWidth+barWidth, gapHeight+barHeight, 3 );

//	context.arcTo( marginWidth, gapHeight+barHeight, marginWidth, gapHeight, 3 );
//	context.arcTo ( marginWidth+barWidth, gapHeight, marginWidth+barWidth, gapHeight+barHeight, 3 );

//	context.arcTo( marginWidth, gapHeight+barHeight, marginWidth, barHeight, 3 );

//	context.arcTo( marginWidth, barHeight, (marginWidth+barWidth), barHeight * 2, 3 );
	context.stroke();
	context.restore();

//	context.fillStyle = menuColor;
//	context.fill();

//	context.fillRect( marginWidth, barHeight * 3, barWidth, barHeight );
//	context.fillRect( marginWidth, barHeight * 5, barWidth, barHeight );

};


/**
 * Fat Rounded:
 * @param {type} canvasElement
 * @param {type} menuColor
 * @returns {undefined}
 */
phoneBurgerMenu.drawFatRoundedPhoneBurgerMenu = function ( canvasElement, menuColor ) {
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

	console.log( 'FatRounded, barHeight: ' + barHeight );
	console.log( 'FatRounded, gapHeight: ' + gapHeight );

	context.save();
	context.fillStyle = menuColor;
	context.fillRect( marginWidth, barHeight, barWidth, barHeight );
	context.fillRect( marginWidth, barHeight * 3, barWidth, barHeight );
	context.fillRect( marginWidth, barHeight * 5, barWidth, barHeight );
	context.restore();

};
