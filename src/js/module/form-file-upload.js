//
// Обработка элемента формы input[type=file]
// =================================================================
function showUploadThumb(input) {
	if (input.files && input.files[0]) {
		let reader = new FileReader();

		reader.onload = (e) => {
			let $thumb = $(`img[data-upload="${$(input).attr('id')}"]`);

			$thumb.attr('src', e.target.result);
		};

		reader.readAsDataURL(input.files[0]);
	}
}
$('input[type=file]').on('change', (event) => {
	let str = $(event.currentTarget).val();
	let i;

	if (str.lastIndexOf('\\')) {
		i = str.lastIndexOf('\\') + 1;
	} else {
		i = str.lastIndexOf('/') + 1;
	}

	showUploadThumb(event.currentTarget);
});
