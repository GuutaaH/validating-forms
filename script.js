"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Guutaa Hassen
      Date:   

      Filename: project06-03.js
*/



document.addEventListener('load', function() {
      
      let useShipCheckbox = document.getElementById('useShip');
      let shippingFields = document.getElementById('shipping').getElementsByTagName('input');
      let billingFields = document.getElementById('billing').getElementsByTagName('input');
    
     
      useShipCheckbox.addEventListener('change', function() {
      
        if (this.checked) {
          copyFields(shippingFields, billingFields);
        } else {
          
          clearFields(billingFields);
        }
      });
    
     
      let form = document.getElementById('billShip');
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault(); // Prevent form submission if invalid
          displayErrorMessage('Please fill out all required fields.');
        }
      });
    
      
      let inputFields = document.getElementsByTagName('input');
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].addEventListener('input', clearErrorMessage);
      }
    });
    
    
    function copyFields(sourceFields, targetFields) {
      for (let  i = 0; i < sourceFields.length; i++) {
        targetFields[i].value = sourceFields[i].value;
      }
    }
    
    
    function clearFields(fields) {
      for (let i = 0; i < fields.length; i++) {
        fields[i].value = '';
      }
    }
    
   
    function displayErrorMessage(message) {
      let errorBox = document.getElementById('errorBox');
      errorBox.textContent = message;
    }
    
   
    function clearErrorMessage() {
      let errorBox = document.getElementById('errorBox');
      errorBox.textContent = '';
    }
    