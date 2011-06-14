/* Style + Ease = ST.EEZE.us Front End Starter-Kit v 0.20
   Author: Wil Everts - http://cousinwil.com - @cousinwil
  
                                (80 chars, the suggested maximum line length)-->
  --------------------------------------------------------------------------- */

var steeze = {
  
    /* Google Analytics - allows us to connect st.eeze.track to your GA acct
      ----------------------------------------------------------------------- */
    google: {    
      track: function(tracked){
        console.log('Tracked: ' + tracked);
        pageTracker._trackPageview(tracked);
      }, // end st.google.track
    }, // end st.google
    
  
  init: {

  /* INITs for each controller or view or just as needed...
       These allow you to load up event handlers and functions specific to
       a template or view. 
       
       Each unique init, like my 'home' init, has a three init functions:
           ready (on document ready), load (on load), and resize (on resize for redrawing 
           absolute elements, etc.)
  --------------------------------------------------------------------------- */
  
    home: {
    
      ready: function(){
        //console.log('inside home ready init');
        
      }, // end st.init.sample 
      
      load: function(){
        //console.log('inside home load init');
          
      }, // end st.init.load     
      
      resize: function(){
        //console.log('inside home resize init');
          
      } // end st.init.resize
    }
    
  } // end st.init

};