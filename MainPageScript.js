

$(document).ready(function(){
	$('.sectionInfo').fadeTo(0,.5);
	$('#isu').hover(
		function(){
			$('#isuSection').fadeTo(300,.85);
		},
		function(){
			$('#isuSection').fadeTo(300,.5);
		});
		
	$('#heartland').hover(
		function(){
			$('#heartlandSection').fadeTo(300,0.85);
		},
		function(){
			$('#heartlandSection').fadeTo(300,0.5);
		});
	$('#SD, #SK, #AQ, #TT').hover(
		function(){
			$(this).css("background-color", "rgb(193,193,193)");
		},
		function(){
			$(this).css("background-color", "#ffffff");
		});
		
	$('#SD, #SK, #AQ, #TT').click(function(){
		if($(this).attr('id') === "SD"){
			$('#interestDisplay').css("background-image", "url('./Pictures/194.jpg')");
		}
		if($(this).attr('id') === "SK"){
			$('#interestDisplay').css("background-image", "url('./Pictures/Skiing.jpg')");
		}
		if($(this).attr('id') === "AQ"){
			$('#interestDisplay').css("background-image", "url('./Pictures/Aquarium.jpg')");
		}
		if($(this).attr('id') === "TT"){
			$('#interestDisplay').css("background-image", "url('./Pictures/TableTop.jpg')");
		}
		
	});
});