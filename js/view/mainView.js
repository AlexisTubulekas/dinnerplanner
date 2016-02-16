//ExampleView Object constructor
var MainView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)	


	function LooptyLoop (type) {
		// body...
		var typeList = model.getAllDishes(type);
		var imagesStr = [];
		for (var i=0; i < 4; i++){
			imagesStr = imagesStr + '<div class="col-md-1 image">';
			imagesStr += imagesStr + '<img src="" class="img-thumbnail" alt="Cinque Terre" width="150" height="200"><center>'   ;
			imagesStr += imagesStr + '<button class="food" data-toggle="collapse" data-target="#demo"><span id=""></span></button>';	 
			imagesStr += imagesStr + '<div id="demo" class="collapse">Lorem ipsum dolor text....</div></center>'	;
			imagesStr += imagesStr + '<p class="text-justify description">'
									+ typeList[i].description + '</p></div>';
										
		$("#imageLoop").append(imagesStr);
		
		} 
		
	}

	LooptyLoop('main dish');

	

	
}


 /*
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)




	var loadDishes = function (type) {
		var dishes = model.getAllDishes(type);
		var dishStr = "";
		for (var i = 0; i < dishes.length; i++) {
			var dish = dishes[i];
			dishStr = '<div class="dishCont" data-id="'+dish.id+'">'; 
			dishStr += '<div class="turtle"> <img src="images/'+dish.image+'" alt="'+dish.name+'"></img>';
			dishStr += '<h3 class="dishName">'+dish.name+'</h3> </div>';
			dishStr += '<div class="description"><h5>'+dish.description+'</h5> </div> </div>';

			$("#dishCont").append(dishStr);
		}
	}
	loadDishes('main dish');
}

*/
 
