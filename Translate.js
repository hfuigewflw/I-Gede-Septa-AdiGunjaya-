$(document).ready(function() {
	$('#translate').click(function() {
		const sourceLang = $('#source').val();
		const targetLang = $('#target').val();
		const sourceText = $('#source-text').val();

		$.ajax({
			url: `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${sourceText}`,
			success: function(response) {
				const targetText = response[0][0][0];
				$('#target-text').val(targetText);
			}
		});
	});
});
