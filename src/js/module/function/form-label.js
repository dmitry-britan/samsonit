
  //
  // Material Effect for form elements
  //---------------------------------------------------------------------------------------
	(function(){
		$('.form__input').focus(function() {
			$(this).parent().find('label').addClass('is--active');
		}).blur(function() {
			if ( $(this).val() == '' ){
				$(this).parent().find('label').removeClass('is--active');
			}
		});
	})();