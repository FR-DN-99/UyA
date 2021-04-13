$(document).ready(function(){

$('#button').click(function() {
	if(!isNaN($('#myForm').serializeArray()[0].value)){
		$.ajax({
			url:'https://jsonplaceholder.typicode.com/comments',
			type:'GET',
			async: true,
			data: $('#myForm').serialize(),
			success: function(result){
				let str_result = "";
				result.forEach((v) => {
					str_result += `{<br>postId: ${v.postId},<br>id: ${v.id},<br>name: ${v.name},<br>body: ${v.body}<br>}<br><br>`;
				});
				$('#result').html(str_result);
			},
			error: function(err){
				alert("An error occured: " + err.status + " " + err.statusText);
			}
		});
	} else {
		alert("An error occured: You must insert a number");
	}
});

});

