
$("#block-yui_3_17_2_1_1530853676327_8650").appendTo(".su-form-tradie");
$("#block-yui_3_17_2_1_1530857589866_35655").appendTo(".su-form-host");

  $('.su-exit').click(function() {
    $('#signup-opacity').removeClass('suo-active');
    $('#signup-outer').removeClass('su-active');
  })

	$('.lp-signup-open').click(function() {
		$('#signup-opacity').addClass('suo-active');
		$('#signup-outer').addClass('su-active');
	})

  $('.su-toggle-host').click(function() {
    $('.su-toggle-host').removeClass('su-toggle-not-active');
    $('.su-toggle-tradie').addClass('su-toggle-not-active');
    $('.su-form-host').addClass('su-form-active');
    $('.su-form-tradie').removeClass('su-form-active');
  })

  $('.su-toggle-tradie').click(function() {
    $('.su-toggle-host').addClass('su-toggle-not-active');
    $('.su-toggle-tradie').removeClass('su-toggle-not-active');
    $('.su-form-host').removeClass('su-form-active');
    $('.su-form-tradie').addClass('su-form-active');
  })
