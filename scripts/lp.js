
$(document).ready(function() {

  var signupIsActiveClass = 'su-active';
  var signupFormIsActiveClass = 'su-form-active';
  var signupFormOpacityIsActiveClass = 'suo-active';
  var signupFormToggleIsNotActiveClass = 'su-toggle-not-active';

  $("#block-yui_3_17_2_1_1530853676327_8650").appendTo(".su-form-tradie");
  $("#block-yui_3_17_2_1_1530857589866_35655").appendTo(".su-form-host");

  $(document).on('click', '.su-exit', function(){
    $('#signup-opacity').removeClass(signupFormOpacityIsActiveClass);
    $('#signup-outer').removeClass(signupIsActiveClass);
  })

  $(document).on('click', '.lp-signup-open', function(){
    $('#signup-opacity').addClass(signupFormOpacityIsActiveClass);
    $('#signup-outer').addClass(signupIsActiveClass);
  })

  $(document).on('click', '.su-toggle-host', function(){
    $('.su-toggle-host').removeClass(signupFormToggleIsNotActiveClass);
    $('.su-toggle-tradie').addClass(signupFormToggleIsNotActiveClass);
    $('.su-form-host').addClass(signupFormIsActiveClass);
    $('.su-form-tradie').removeClass(signupFormIsActiveClass);
  })

  $(document).on('click', '.su-toggle-tradie', function(){
    $('.su-toggle-host', '.su-toggle-tradie').addClass(signupFormToggleIsNotActiveClass);
    $('.su-toggle-tradie').removeClass(signupFormToggleIsNotActiveClass);
    $('.su-form-host').removeClass(signupFormIsActiveClass);
    $('.su-form-tradie').addClass(signupFormIsActiveClass);
  })

});
