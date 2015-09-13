# jmws_protostar_tomh_idMyGadget
This repo integrates the default joomla template protostar with idMyGadget.  It is very similar to jmws_protostar_idMyGadget, but contains a very few additional changes that I just "felt" like making. 

## Overview
This repo differs from jmws_protostar_idMyGadget in that I have added a few additional changes that I just "felt" like doing, but wanted to keep the changes made to protostar to a minimum in jmws_protostar_idMyGadget.

## Dependencies
To function properly, this code requires installation of code in other repos.

**TODO: Look into using Joomla Composer to manage these dependencies.**

### Required: jmws_idMyGadget_for_joomla
For this template to work properly, the jmws_idMyGadget_for_joomla must be installed.

Note that although jmws_idMyGadget_for_joomla comes with a very simple device detector (detect_mobile_browsers) installed "out of the box," it works best when you add one or more of the more sophisticated third-party device detection tools.

Fret not, however!  You can accomplish much of this by running one or more "git clone" commands.

For information on how to install this required code, see the jmws_idMyGadget_for_joomla README.md file.

### Highly Recommended: jmws_mod_menu_idMyGadget
For best results, install the jmws_mod_menu_idMyGadget module.

This is required for the hamburger (aka. "PhoneBurger") and phone header and footer menus to work. Your joomla site may even whitescreen if you try to create a Hamburger Menu and this module is not present.

## Status
The initial version of this is complete, and I am using it as the default template for my site [JooMooWebSites.Com](http://joomoowebsites.com/)

#### Future Work
The goal of this project is to integrate IdMYGadget with the protostar default Joomla template, and add any other changes I just "felt" like making.

Right now that goal is accomplished, so additional work on this is on hold for now.

#### Demo Site
This is the default template for [JooMooWebSites.Com](http://joomoowebsites.com/)

#### Self-Promotion Alert!
I'd certainly be happy to do customize this template to your needs, for a "small price!"  ;-)

## Installation:

Installation of all jmws_* joomla extensions is the same.
For details, see the following documents in the [Jmws Accoutrements Repo on github](https://github.com/tomwhartung/jmws_accoutrements/):

* [Installing Jmws Joomla Extensions document](https://github.com/tomwhartung/jmws_accoutrements/blob/master/doc/joomla/install.md)
* [Jmws Github Strategy document](https://github.com/tomwhartung/jmws_accoutrements/blob/master/doc/devops/cms_github_strategy.md)

## Differences From jmws_protostar_idMyGadget 
In general, all of the information in the [README.md for jmws_protostar_idMyGadget](https://github.com/tomwhartung/jmws_protostar_idMyGadget/blob/master/README.md) applies equally to this template.

That is because this template contains all the changes I made to [jmws_protostar_idMyGadget](https://github.com/tomwhartung/jmws_protostar_idMyGadget/blob/master/README.md), plus several more additional change that I just "felt" like making.

Following are a few known differences (as opposed to additions, which appear below):

* The header for this template differs slightly from jmws_protostar_idMyGadget 
* The options for this template reflect this difference 
* Because I added site description parameters for phones, tablets, and desktops, I changed the case for these parameter names slightly, from sitedescription to siteDescriptionPhone, etc.
* To force the template to display a custom image instead of using the HTML5 canvas element to draw the hamburger menu icon, put the files in the templates/jmws_protostar_tomh_idMyGadget/images/idMyGadget/ directory (rather than the templates/jmws_protostar_idmygadget/images/idMyGadget/ directory as described in that README.md)
* This template contains additional options on the IdMyGadget and Phone Nav tabs

This list is an example of the sort of changes I just "felt" like making, and is not intended to be a complete list, although it should contain most of them.

## Specific Changes Made to Protostar
Integration of IdMyGadget with the template enables the addition of options to the template's administrator's console.

### Integration With IdMyGadget
This template uses IdMyGadget to determine whether the user is accessing the site on a phone, tablet, or desktop, and changes the output accordingly.

This template adds the following tabs to its configuration options in the joomla administration console:

* IdMyGadget
* Hamburger Nav
* Phone Nav

These tabs contain options allowing administrators to customize the appearance of their site, especially the header, without the need for additional programming.

### Additional Admin Console Options
The following article on [JooMooWebSites.Com](http://wwww.joomoowebsites.com) walks through the options in these new tabs:
* [Protostar Tomh IdMyGadget Demo](http://joomoowebsites.com/index.php/demos/demos-joomla/joomla-templates/demo-protostar-tomh-idmygadget)

It contains screen shots of each tab and describes and demonstrates these options, and is an excellent supplement to the information in this README.md file.

### More Options Than jmws_protostar_idMyGadget
Note that this template contains all of the options added to the [jmws_protostar_idMyGadget](https://github.com/tomwhartung/jmws_protostar_idMyGadget) template, along with some other enhancements that I just "felt" like making.

For more information about that template, see the [jmws_protostar_idMyGadget README.md file](https://github.com/tomwhartung/jmws_protostar_idMyGadget/blob/master/README.md).

#### New tab: IdMyGadget
Clicking on the IdMyGadget tab reveals the following options unique to this template:

* Device Detector
  * Allows quickly switching between third-party device detectors
  * Note that each of these is **released under a different license** and has massively different capabilities, but that the IdMyGadget Adapter API makes them "look the same" to joomla
  * Note that only the Detect Mobile Browsers detector works "out of the box," and it does not detect tablets
  * Mobile Detect requires installation from github, for more information see the (IdMyGadget README.md for Mobile Detect)[http://github.com/tomwhartung/idMyGadget/blob/master/gadget_detectors/m
obile_detect/README.md]
  * Tera Wurfl requires installation from source forge and is dependent on a database. For more information see the (IdMyGadget README.md for Tera Wurfl)[https://github.com/tomwhartung/idMyGadge
t/blob/master/gadget_detectors/tera_wurfl/README.md]

##### Site header params - Phones

* Logo (Phone) - Replaces Admin -> Logo in protostar for phones
* Fluid Layout (Phone) - Replaces Admin -> Fluid Layout in protostar for phones
* Site Title (Phone) - Replaces Admin -> Site Title in protostar for phones
* Tag Line (Phone) - Replaces Admin -> Tag Line in protostar for phones

###### Site header params - Phones - Tomh Template Only
* Show Site Name (Phone) - option is specific to this template only
* Element for Site Name (Phone) - option is specific to this template only
* Element for Title (Phone) - option is specific to this template only
* Element for Tag Line (Phone) - option is specific to this template only

##### Site header params - Tablets

* Logo (tablet) - Replaces Admin -> Logo in protostar for tablets
* Fluid Layout (tablet) - Replaces Admin -> Fluid Layout in protostar for tablets
* Site Title (tablet) - Replaces Admin -> Site Title in protostar for tablets
* Tag Line (tablet) - Replaces Admin -> Tag Line in protostar for tablets

###### Site header params - Tablets - Tomh Template Only
* Show Site Name (Tablet) - option is specific to this template only
* Element for Site Name (Tablet) - option is specific to this template only
* Element for Title (Tablet) - option is specific to this template only
* Element for Tag Line (Tablet) - option is specific to this template only

##### Site header params - Desktop Browsers

* Logo (Desktop) - Replaces Admin -> Logo in protostar for desktop browsers
* Fluid Layout (Desktop) - Replaces Admin -> Fluid Layout in protostar for desktop browsers
* Site Title (Desktop) - Replaces Admin -> Site Title in protostar for desktop browsers
* Tag Line (Desktop) - Replaces Admin -> Tag Line in protostar for desktop browsers

###### Site header params - Desktop Browsers - Tomh Template Only
* Show Site Name (Desktop) - option is specific to this template only
* Element for Site Name (Desktop) - option is specific to this template only
* Element for Title (Desktop) - option is specific to this template only
* Element for Tag Line (Desktop) - option is specific to this template only

#### New tab: Hamburger Nav

This template supports the creation and placement of hamburger menus on one or both sides of the site header.

Clicking on the Hamburger Nav tab reveals the following options unique to this template:

##### Hamburger Menu Icon Params, Left Side - Tomh Template Only
* Show on Phones - option is specific to this template only

##### Hamburger Menu Icon Params, Left Side
* Show on tablets - pick yes to have this menu icon display on tablets
* Show on desktops - pick yes to have this menu icon display on desktops
* Left Hamburger Menu Size - choose one of the available values (in pixels)
* Left Hamburger Menu Color - use the color picker or type in a hexadecimal RGB value
* Left Hamburger Line Cap - select round, square, or butt
* Left Hamburger Line Size - select normal, fat, or thin

##### Hamburger Menu Icon Params, Right Side - Tomh Template Only
* Show on Phones - option is specific to this template only

##### Hamburger Menu Icon Params, Right Side
* Show on tablets - pick yes to have this menu icon display on tablets
* Show on desktops - pick yes to have this menu icon display on desktops
* Right Hamburger Menu Size - choose one of the available values (in pixels)
* Right Hamburger Menu Color - use the color picker or type in a hexadecimal RGB value
* Right Hamburger Line Cap - select round, square, or butt
* Right Hamburger Line Size - select normal, fat, or thin

##### Setup
To make this work, you need to define an appropriate joomla menu and assign it to one of the new positions **phone-burger-menu-left** or **phone-burger-menu-right**.  Use the options on this tab if you define a menu and put it in one of these positions.

This template uses the jQuery Mobile JavaScript Library to display a mobile-friendly pop-up menu.  This may not be the best look, feel, and behavior on desktop browsers!

##### Demo Article Has Complete Setup Instructions

The [Hamburger Nav Demo](http://joomoowebsites.com/index.php/demos/demos-joomla/joomla-modules/idmygadget-menus/hamburger-nav) article gives step-by-step instructions on how to set up these menus.

##### Known Issue and Work-around
This template uses the HTML5 canvas element to draw the hamburger navigation icons.  Not all devices fully support using this functionality in this context.

Placing one or more image files in the `templates/jmws_protostar_idmygadget/images/idMyGadget` directory causes this template to use the file instead of drawing the icons.  This can be a good workaround for devices that do not support the HTML5 canvas in this context.  These images must be named as the following table describes.

File Name | Position | Device
----------|----------|-------
phoneBurgerMenuIconLeftPhone | Left | Phone
phoneBurgerMenuIconRightPhone | Right | Phone
phoneBurgerMenuIconLeftTablet | Left | Tablet
phoneBurgerMenuIconRightTablet | Right | Tablet
phoneBurgerMenuIconLeftDesktop | Left | Desktop
phoneBurgerMenuIconRightDesktop | Right | Desktop

**Note that this template scales the image to the size set in the options (Left Hamburger Menu Size or Right Hamburger Menu Size, as approprate).**

For up-to-date information about compatibility with respect to all of this functionality, see the latest articles on [joomoowebsites.com](http://joomoowebsites.com).

#### New Tab: Phone Nav

Clicking on the Phone Nav tab reveals the following options unique to this template:

* Theme for Nav on Phones - value is passed to jQuery Mobile, which has customizable themes (but not many "out of the box")
* Show phone nav on phones - option is specific to this template only
* Show phone nav on tablets - option is specific to this template only
* Show phone nav on desktops - option is specific to this template only


### Changes to Template Positions

Positions were added, and one was enhanced, but none were harmed in the making of this template.

#### New Positions

The following positions appear in this template, but not in protostar:

* phone-header-nav
* phone-footer-nav
* phone-burger-menu-left
* phone-burger-menu-right

#### position-7

Modules placed in the protostar template's existing position-7 appear on all devices

* To make a module appear in position-7 on phones only, put it in position-7-phone .
* To make a module appear in position-7 on tablets only, put it in position-7-tablet .
* To make a module appear in position-7 on desktops only, put it in position-7-desktop .

Note that the protostar idMyGadget template does *not* have a position-7-desktop  making it slightly different.

## Requests for Enhancements

I am open to doing additional work on this project.

Note however that I have invested a considerable amount of my own time on this, and depending on the nature of your request(s), I may request some sort of compensation.

## About IdMyGadget:

For information about the IdMyGadget Device Detection Adapter API&copy;, see the [About-IdMyGadget.md file in this directory](https://github.com/tomwhartung/jmws_protostar_tomh_idMyGadget/blob/master/ABOUT-IdMyGadget.md).

