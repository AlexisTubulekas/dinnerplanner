//ExampleView Object constructor
var MainView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)	
	this.imageLoop = container.find("#imageLoop");
	var typeList = model.getAllDishes('main dish');
	console.log(this.typeList);	

	function LooptyLoop () {
		// body...
		
		var imagesStr = [];
		for (i=0; i < 4; i++){
			imagesStr += imagesStr + '<div class="col-md-1 image">';
			imagesStr += imagesStr + '<img src="" class="img-thumbnail" alt="Cinque Terre" width="150" height="200"><center>'   ;
			imagesStr += imagesStr + '<button class="food" data-toggle="collapse" data-target="#demo"><span id=""></span></button>';	 
			imagesStr += imagesStr + '<div id="demo" class="collapse">Lorem ipsum dolor text....</div></center>'	;
			imagesStr += imagesStr + '<p class="text-justify description">'
									+ typeList[i].description + '</p></div>';
										
		

		} 
		return imagesStr;
	}

	
	this.imageLoop.html(LooptyLoop());
	console.log(imagesStr);	
	

	
}
 
