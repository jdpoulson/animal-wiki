$(document).ready(function() {

  $('.turtles').click(function() {
  $('#turtle').toggle();
  $('#snake').hide();
  $('#insect').hide();
  });

  $('.snakes').click(function() {
  $('#snake').toggle();
  $('#turtle').hide();
  $('#insect').hide();
  });

  $('.insects').click(function() {
  $('#insect').toggle();
  $('#turtle').hide();
  $('#snake').hide();
  });
});
