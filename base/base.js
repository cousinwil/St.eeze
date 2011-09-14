/* Style + Ease = ST.EEZE.us Front End Starter-Kit v 0.3
   Author: Wil Everts - http://cousinwil.com - @cousinwil
  
                                (80 chars, the suggested maximum line length)-->
  --------------------------------------------------------------------------- */

var base = {
  
  /* Google 
  
    base.google.visit - allows us to connect to your Google Analytics acct and 
                          track visits which occur w/o page load. Track things 
                          like which button was clicked, etc using some url 
                          hackery
                         
    base.google.font  - downloads webfonts from google 
                         
  --------------------------------------------------------------------------- */
  google: {    
    visit: function(tracked){
      console.log('Tracked: ' + tracked);
      pageTracker._trackPageview(tracked);
    } // end base.google.track
  }, // end base.google
  
  init: {

  /* INITs for each controller, view, just as needed...
       These allow you to load up event handlers and functions specific to
       a template or view. 
       
       Each unique init, like my 'home' init, has a three init functions:
       ready (on document ready), load (on load), and resize (on resize for 
       redrawing absolute elements, etc.)
  --------------------------------------------------------------------------- */
  
    main: {
    
      ready: function(info){
        console.log('steeze is inside base.init.main.ready() MSG: '+info);
      }, // end base.init.main.ready 
      load: function(info){
        console.log('steeze is inside base.init.main.load() MSG: '+info);          
      }, // end base.init.main.load     
      size: function(info){
        console.log('steeze is inside base.init.main.size() MSG: '+info);
      }, // end base.init.main.size
      scroll: function(info){
        console.log('steeze is inside base.init.main.scroll() MSG: '+info);
      } // end base.init.main.size
    
    }
    
  } // end base.init

};