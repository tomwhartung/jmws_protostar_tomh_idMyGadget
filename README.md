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

Following are a few known differences (as opposed to additions, which appear below):

* The header for this template differs slightly from jmws_protostar_idMyGadget 
* The options for this template reflect this difference 
* Because I added site description parameters for phones, tablets, and desktops, I changed the case for these parameter names slightly, from sitedescription to siteDescriptionPhone, etc.
* To force the template to display a custom image instead of using the HTML5 canvas element to draw the hamburger menu icon, put the files in the templates/jmws_protostar_tomh_idMyGadget/images/idMyGadget/ directory (rather than the templates/jmws_protostar_idmygadget/images/idMyGadget/ directory as described in that README.md).

## Specific Changes Made to Protostar
Integration of IdMyGadget with the template enables the addition of options to the template's administrator's console.

### Integration With IdMyGadget
This template uses IdMyGadget to determine whether the user is accessing the site on a phone, tablet, or desktop, and changes the output accordingly.

This template adds the following tabs to the joomla administration console for it:

* IdMyGadget
* Hamburger Nav
* Phone Nav

These tabs contain options allowing administrators to customize the appearance of their site, especially the header, without the need for additional programming.

### Additional Admin Console Options
The following article on [JooMooWebSites.Com](http://wwww.joomoowebsites.com) walks through the options in these new tabs:
* [Protostar Tomh IdMyGadget Demo](http://joomoowebsites.com/index.php/demos/demos-joomla/joomla-templates/demo-protostar-tomh-idmygadget)

It contains screen shots of each tab and describes and demonstrates these options, and is an excellent supplement to the information in this README.md file.

### Options Shared With jmws_protostar_idMyGadget
Note that this template contains all of the options added to the [jmws_protostar_idMyGadget](https://github.com/tomwhartung/jmws_protostar_idMyGadget) template, along with some other enhancements that I just "felt" like making.

For more information about that template, see the [jmws_protostar_idMyGadget README.md file](https://github.com/tomwhartung/jmws_protostar_idMyGadget/blob/master/README.md).

-------------------------
-------------------------

### Admin Console Options Unique to this Template
Following are the changes to the joomla administrator console options that are specific to this template (as opposed to jmws_protostar_idMyGadget):

#### IdMyGadget Tab

##### Site header params - Phones
* Show Site Name (Phone) - option is specific to this template only
* Element for Site Name (Phone) - option is specific to this template only
* Element for Site Title (Phone) - option is specific to this template only
* Element for Tag Line (Phone) - option is specific to this template only

##### Site header params - Tablets
* Show Site Name (Tablet) - option is specific to this template only
* Element for Site Name (Tablet) - option is specific to this template only
* Element for Site Title (Tablet) - option is specific to this template only
* Element for Tag Line (Tablet) - option is specific to this template only

##### Site header params - Desktop Browsers
* Show Site Name (Desktop) - option is specific to this template only
* Element for Site Name (Desktop) - option is specific to this template only
* Element for Site Title (Desktop) - option is specific to this template only
* Element for Tag Line (Desktop) - option is specific to this template only

#### Hamburger Nav Tab

##### Hamburger Menu Icon, Left Side
* Show on Phones - option is specific to this template only

##### Hamburger Menu Icon, Right Side
* Show on Phones - option is specific to this template only

#### Phone Nav Tab
* Show phone nav on phones - option is specific to this template only
* Show phone nav on tablets - option is specific to this template only
* Show phone nav on desktops - option is specific to this template only


### Changes to Template Positions

#### position-7
Modules placed in the protostar template's existing position-7 appear on all devices

* To make a module appear in position-7 on phones only, put it in position-7-phone .
* To make a module appear in position-7 on tablets only, put it in position-7-tablet .
* To make a module appear in position-7 on desktops only, put it in position-7-desktop .

Note that the protostar idMyGadget template does *not* have a position-7-desktop  making it slightly different.

#### New Positions
The following positions appear in this template, but not in protostar:

* phone-header-nav
* phone-footer-nav
* phone-burger-menu-left
* phone-burger-menu-right

## About IdMyGadget:

For information about the IdMyGadget Device Detection Adapter API&copy;, see the [About-IdMyGadget.md file in this directory](https://github.com/tomwhartung/jmws_protostar_tomh_idMyGadget/blob/master/ABOUT-IdMyGadget.md).

