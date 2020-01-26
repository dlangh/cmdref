# cmdref
An Electron app that lets you view/search manpages from your computer

This is my first attempt at an electron app.  

## Installation
* If you don't already have jq (https://stedolan.github.io/jq/) you will need to install that.  
** For Mac, you can use brew to install it: 'brew install jq'
** For Ubuntu sudo apt-get install -y jq
* npm install
* npm start




## Todo
* Forgot I left the about window I was building unfinished, it currently pops up as an empty window, will be among the first things I correct.  For the moment, just close it when you start the app.
* Change the filter function so that it filters with 'Starts with' instead of 'contains'.  The problem current is that with so many commands being 2-3 characters the results can leave you having to do a lot of pagination to get the the command, for examnple 'du'.
* Rework the interface to use a side-bar instead of tabs.
* Add the ability to run the genjson.sh script from within the app.
* Check for an empty data/ folder and trigger prompt to run the genjson.sh script
* Install and test on a linux system.  This is low on my priorities at this time, but I am sure it can be done, just not sure what modifications might be needed (perhaps none) to get that working