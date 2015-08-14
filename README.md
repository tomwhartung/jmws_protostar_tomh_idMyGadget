# jmws_tomh_idMyGadget
This repo integrates the default joomla template protostar with idMyGadget (like jmws_protostar_idMyGadget). 

## Overview
This repo differs from jmws_protostar_idMyGadget in that I have added a few additional changes that I just "felt" like doing, but wanted to keep the changes made to protostar to a minimum in jmws_protostar_idMyGadget.

## Differences From jmws_protostar_idMyGadget 
Unless noted here, the documentation for jmws_protostar_idMyGadget applies equally here.

* The header for this template differs slightly from jmws_protostar_idMyGadget 

* The options for this template reflect this difference 

* Because I added site description parameters for phones, tablets, and desktops, I changed the case slightly, from sitedescription to siteDescriptionPhone, etc.

## Status
The initial version is pretty much complete, with the following exceptions:

* Integration testing has been minimal.
* Documentation is currently in progress, so may be minimal or even lacking completely.

For a project like this, the task of "integration testing" can be extensive and problematic.

Moreover, because this is an experimental project, integration testing hardly seems worthwhile, because I do not know how many people, or even if any at all, might want to use it, much less what they might want to use it for.

Documentation suffers for similar reasons, and carries the additional burden that any documentation only increases the technical debt incurred when changes are made to the underlying code or that written on top of it.


## References
For details about idMyGadget, see the idMyGadget README.md file:
* https://github.com/tomwhartung/idMyGadget/blob/master/README.md

Feel free to download idMyGadget, install the device detectors, and run the demos.

To see idMyGadget in action (without joomla) see my resume:
* http://tomwhartung.com/resume

To see the power of device detection, when coupled with jQuery Mobile, be sure to visit the site using both a mobile phone and a desktop PC.

Note that the source for my resume is in github here:
* https://github.com/tomwhartung/resume

Feel free to download my resume, add your own details (in json, following the examples in the js/*-examples.js files, and make your own mobile-friendly resume!

For details about the specific idMyGadget code I am using for integration with joomla, see the jmws_idMyGadget_for_joomla README.md file:
* https://github.com/tomwhartung/jmws_idMyGadget_for_joomla/blob/master/README.md

