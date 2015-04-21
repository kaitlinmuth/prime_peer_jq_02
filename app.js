//Javascript goes here
function Property(){
	this.propId = randomNumber(1,9999);
	this.sqFt = randomNumber(1,9999);
	this.price = randomNumber(20,29);
}


function randomNumber(min, max){
	return Math.floor(Math.random() * (1+max-min) + min);
}

$(document).ready(function() {
	$("#btn").on('click', function(){
		var newProperty = new Property();
		//var newRow = "<ul><li>Property ID: " + newProperty.propId + "</li><li>" + newProperty.sqFt
		var newRow = "<div id=row><div id=cell>" + "Property ID: " + newProperty.propId +"</div><div id=cell>" + newProperty.sqFt + " SQFT </div><div id=cell>" + "$" + newProperty.price + " P/SqFt</div><div id=cell><button class='removeButton'>Remove</button></div></div>";
		$("#propTable").prepend(newRow);
	});

	$("#propTable").on('click', '.removeButton', function(){
		$(this).parent().parent().slideUp();
		});
	});
