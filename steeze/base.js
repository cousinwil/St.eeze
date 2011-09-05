/* Style + Ease = ST.EEZE.us Front End Starter-Kit v 0.40
   Author: Wil Everts - http://cousinwil.com - @cousinwil
  
                                (80 chars, the suggested maximum line length)-->
  --------------------------------------------------------------------------- */

var steeze = {
  
  /* Google 
  
    steeze.google.visit - allows us to connect to your Google Analytics acct and 
                          track visits which occur w/o page load. Track things 
                          like which button was clicked, etc using some url 
                          hackery
                         
    steeze.google.font  - downloads webfonts from google 
                         
  --------------------------------------------------------------------------- */
  google: {    
    visit: function(tracked){
      console.log('Tracked: ' + tracked);
      pageTracker._trackPageview(tracked);
    }, // end steeze.google.track
    
    font: function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    } // end steeze.google.font
  }, // end steeze.google
  
  init: {

  /* INITs for each controller, view, just as needed...
       These allow you to load up event handlers and functions specific to
       a template or view. 
       
       Each unique init, like my 'home' init, has a three init functions:
       ready (on document ready), load (on load), and resize (on resize for 
       redrawing absolute elements, etc.)
  --------------------------------------------------------------------------- */
  
    home: {
    
      ready: function(info){
        
        // see www.google.com/webfonts for fonts. I prefer to load these on load
        // WebFontConfig = { google: { families: [ 'Open+Sans:latin' ] } }; 
        // steeze.google.font();
        console.log('steeze is inside steeze.init.home.ready. MSG: '+info);
        
      }, // end steeze.init.sample 
      
      load: function(){
        
        // see www.google.com/webfonts for fonts. I prefer to loading these here
        WebFontConfig = { google: { families: [ 'Open+Sans:latin' ] } };
        steeze.google.font();
        console.log('steeze is inside steeze.init.load.ready. MSG: '+info);
          
      }, // end steeze.init.home.init.load     
      
      size: function(){
        console.log('steeze is inside steeze.init.size.ready. MSG: '+info);
          
      } // end steeze.init.home.resize
    }
    
  } // end steeze.init

};