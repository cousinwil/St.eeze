/* Style + Ease = ST.EEZE.us Front End Starter-Kit 
   v1.1 (Updated: 8/1/2010)
   Author: Wil Everts - http://cousinwil.com - @cousinwil
  
   File: javascripts/buddy.js - A simple object oriented framework to
                                tweak as you see fit.
  
  
                                (80 chars, the suggested maximum line length)-->
  --------------------------------------------------------------------------- */


var st = {

  /* Eeze - data objects which make common functions look cleaner
    ------------------------------------------------------------------------- */
  
  eeze: {
  
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
  
    sample: function(){
        
    } // end st.init.sample       
  
  }, // end st.init
  
  /* Tracking Function - Allows us to track *anything* easily 
  --------------------------------------------------------------------------- */

  racker: function(tracked){
    console.log('Tracked: ' + tracked);
  } // end st.racker

};

var wil = st; // rename the steeze object to suit your domain or branding