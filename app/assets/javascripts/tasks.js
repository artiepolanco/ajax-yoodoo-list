// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// This is great for listening for the page to load
// $(function() {
//   console.log('document is ready!', new Date()); // this logging is optional
//   $('#task_name').focus();
// });

//This is great to listen for a turbolinks event
$(document).on('turbolinks:load', function() {
  // console.log('document is ready!', new Date()); // this logging is optional
  $('#task_name').focus();

  $('#save').click(function(event) {
    event.preventDefault();
    $('.submit-form').submit();
  });
});
