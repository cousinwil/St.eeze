/* Style + Ease = ST.EEZE.us Front End Starter-Kit 
   v1.1 (Updated: 8/1/2010)
   Author: Wil Everts - http://cousinwil.com - @cousinwil
  
   File: javascripts/buddy.js - A simple object oriented template to
                                tweak as you see fit.
  
  
                                (80 chars, the suggested maximum line length)-->
  --------------------------------------------------------------------------- */


var st = {

  /* Eeze - data objects which make common functions look cleaner
    ------------------------------------------------------------------------- */
  
  eeze: {
  
    us: 'http://cousinwil.com', // end st.eeze.us (as in http://st.eeze.us!)
  
    /* AJAX objects for cleaner .ajax() - see init for sample usage
      ----------------------------------------------------------------------- */
    ajax_data: {
      
    }, // end st.eeze.ajax_data
  
    /* Validation objects for cleaner .validate() - see init for sample usage
      ----------------------------------------------------------------------- */
    validate: {
      
      sample_sign_up: {
        element: '#sample-sign-up',
        rules: {
          first_name: { required: true, minlength: 2 },  
          last_name: { required: true, minlength: 3 },  
          email: { required: true, email: true }, 
          password: { required: true, minlength: 6 },
          terms: { required: true }
        },
        messages: {
          first_name: { 
            required: '', 
            minlength: '' 
          },  
          last_name: { 
            required: '', 
            minlength: '' 
          },  
          email: { 
            required: '', 
            email: '' 
          }, 
          password: { 
            required: '', 
            minlength: '' 
          },
          terms: { 
            required: '' 
          }  
        }
        
      } 
          
    }, // end st.eeze.validate
  
  }, // end st.eeze
    
  /* INITs for each controller or view or just as needed...
       These allow you to load up event handlers and functions specific to
       a template or view. A much better organizational structure than having
       them in-template becauase you'll quickly notice reusable bits that can 
       be grouped together in more general use initis, vs more specialized 
       ones for others.
  --------------------------------------------------------------------------- */
  
  init: {
  
    home: {
    
      main: function(){
      
        //console.log('inside home init');
      
        $('header').click(function(){
          //track this click event
          st.racker('js/header');
          //move to the url indicated at st.eeze.us
          setTimeout('window.location = "'+ st.eeze.us +'"', 90);
        });
          
      }, // end st.init.sample 
      
      load: function(){
        //console.log('inside home load init');
          
      }, // end st.init.load     
      
      resize: function(){
        //console.log('inside home resize init');
          
      } // end st.init.resize
    }
    
  }, // end st.init
  
  /* Tracking Function - Allows us to track *anything* easily 
  --------------------------------------------------------------------------- */

  racker: function(tracked){
    console.log('Tracked: ' + tracked);
  } // end st.racker

};

var wil = st; // rename the steeze object to suit your domain or branding