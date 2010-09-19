/* Style + Ease = ST.EEZE.us Front End Starter-Kit 
   v1.01 (Updated: 9/6/2010)
   Author: Wil Everts - http://cousinwil.com - @cousinwil
  
   File: javascripts/buddy.js - A simple object oriented template to
                                tweak as you see fit.
  
  
                                (80 chars, the suggested maximum line length)-->
  --------------------------------------------------------------------------- */


var st = {
  
    /* Google Analytics - allows us to connect st.eeze.track to your GA acct
      ----------------------------------------------------------------------- */
    google: {    
      track: function(tracked){
        console.log('Tracked: ' + tracked);
        pageTracker._trackPageview(tracked);
      }, // end st.google.track
    }, // end st.google


  /* Eeze - data objects which make common functions look cleaner
    ------------------------------------------------------------------------- */
  
  eeze: {
    
    /* AJAX objects for cleaner .ajax() - see init for sample usage
      ----------------------------------------------------------------------- */
    ajax: {
      
    }, // end st.eeze.ajax
  
    /* Validation objects for cleaner .validate() - see init for sample usage
      ----------------------------------------------------------------------- */
    valid: {
          
    }, // end st.eeze.valid
      
    us: 'http://cousinwil.com' // steeze was compiled & developed by @cousinwil

  }, // end st.eeze
    
  /* INITs for each controller or view or just as needed...
       These allow you to load up event handlers and functions specific to
       a template or view. 
       
       Each unique init, like my 'home' init, has a three init functions:
           Main (on ready), load (on load), and resize (redraw absolute elem.)
       
  --------------------------------------------------------------------------- */
  
  init: {
  
    home: {
    
      main: function(){
        //console.log('inside home main init');

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