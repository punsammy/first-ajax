$(document).ready(function () {

  $('#step-12').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    });
  });

  $('#step-3456').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      $('#step-3456').append(responseData);
    });
  });
});


// $.ajax({
//   url: 'http://first-ajax-api.herokuapp.com/',
//   method: 'GET',
//   // data: ,
//   // dataType:
// }).done(function(data) {
//   console.log('DONE')
// }).fail(function(jqXHR, testStatus) {
//   console.log('FAILED' + jqXHR.status + '' + jqXHR.statusText);
//   console.log(jqXHR);
// }).always(function() {
//   console.log('REQUEST FINISHED')
// });








//
// $(function() {
//
//   $('#load-monsters').on('click', function(){
//     console.log('Before .ajax');
//
// 'http://first-ajax-api.herokuapp.com/'
//
//     //Do Ajax Request
//       $.ajax({
//         url: 'http://monsters-api.herokuapp.com/monsters',
//         method: 'GET',
//         dataType: 'html',
//         // data: { limit: 2 }
//       }).done(function(data) {
//         console.log('ajax done')
//         $('body').append(data);
//       }).fail(function(jqXHR, testStatus) {
//         console.log('.ajax FAILED with ' + jqXHR.status + '' + jqXHR.statusText);
//         console.log(jqXHR);
//       }).always(function() {
//         console.log('.ajax request finished')
//       });
//     console.log('After .ajax');
//     //this after ajax runs before the function because it takes time to load
//   });
//
//   $('#add-monster').on('click', function(){
//     $.ajax({
//       //same URL because you can do different requests with same URL as long as your handled it
//       url: 'http://monsters-api.herokuapp.com/monsters',
//       method: 'POST',
//       // dataType: '',
//       data: {
//         monster: {
//           name: 'Bowser',
//           home: 'Castle',
//           creepiness: 200
//         }
//       }
//     }).done(function() {
//       $('body').append('SUCCESS: Monster Created')
//     }).fail(function() {
//       $('body').append('ERROR: Could not create monster')
//     }).always(function() {
//       $('body').append('Add operation compelte')
//     });
//   });
//
// });
