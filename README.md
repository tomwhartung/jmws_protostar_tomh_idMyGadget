# jmws_protostar_tomh_idMyGadget
This repo integrates the default joomla template protostar with idMyGadget.  It is very similar to jmws_protostar_idMyGadget, but contains a very few additional changes that I just "felt" like making. 

## Overview
This repo differs from jmws_protostar_idMyGadget in that I have added a few additional changes that I just "felt" like doing, but wanted to keep the changes made to protostar to a minimum in jmws_protostar_idMyGadget.

## Dependencies
To function properly, this code requires installation of code in other reqpos.

### Required: jmws_idMyGadget_for_joomla
For this template to work properly, the jmws_idMyGadget_for_joomla must be installed.

Note that although jmws_idMyGadget_for_joomla comes with a very simple device detector (detect_mobile_browsers) installed "out of the box," it works best when you add one or more of the more sophisticated third-party device detection tools.

Fret not, however!  You can accomplish much of this by running one or more "git clone" commands.

For information on how to install this required code, see the jmws_idMyGadget_for_joomla README.md file.

### Highly Recommended: jmws_mod_menu_idMyGadget
For best results, install the jmws_mod_menu_idMyGadget module.

This is required for the hamburger (aka "PhoneBurger") menu to work, and your joomla site will probably whitescreen if you try to create a Hamburger Menu and this module is not present.

## Differences From jmws_protostar_idMyGadget 
Unless noted here, the documentation for jmws_protostar_idMyGadget applies equally here.

* The header for this template differs slightly from jmws_protostar_idMyGadget 

* The options for this template reflect this difference 

* Because I added site description parameters for phones, tablets, and desktops, I changed the case slightly, from sitedescription to siteDescriptionPhone, etc.

* Cause the template to display a custom image instead of using the HTML5 canvas element to draw the menu icon by putting the files in the templates/jmws_protostar_tomh_idMyGadget/images/idMyGadget/ directory (rather than the templates/jmws_protostar_idmygadget/images/idMyGadget/ directory as described in that README.md).

## Status
The initial version is pretty much complete, with the following exceptions:

* Integration testing has been minimal.
* Documentation is currently in progress, so may be minimal or even lacking completely.

For a project like this, the task of "integration testing" can be extensive and problematic.

Moreover, because this is an experimental project, integration testing hardly seems worthwhile, because I do not know how many people, or even if any at all, might want to use it, much less what they might want to use it for.

Documentation suffers for similar reasons, and carries the additional burden that any documentation only increases the technical debt incurred when changes are made to the underlying code or that written on top of it.

## Specific Changes Made to Protostar
For a list of most of these changes, see the [jmws_protostar_idMyGadget README.md file](https://github.com/tomwhartung/jmws_protostar_idMyGadget/blob/master/README.md)

### Additional Admin Console Options
Following are the changes to the joomla administrator console options that are specific to this template (as opposed to jmws_protostar_idMyGadget):

#### IdMyGadget Tab

##### Site header params - Phones
* Show Site Name (Phone) - option is specific to this template only

##### Site header params - Tablets
* Show Site Name (Tablet) - option is specific to this template only

##### Site header params - Desktop Browsers
* Show Site Name (Desktop) - option is specific to this template only

## About IdMyGadget:

For information about the IdMyGadget Device Detection Adapter API&copy;, see the [About-IdMyGadget.md file in this directory](https://github.com/tomwhartung/jmws_protostar_tomh_idMyGadget/blob/master/ABOUT-IdMyGadget.md).

