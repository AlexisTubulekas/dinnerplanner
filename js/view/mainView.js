//ExampleView Object constructor
var MainView = function (container,model) {
		
	this.imageLoop = container.find("#imageLoop");

	var imagesStr = "";
	var loadDishes = function (type) {
		// body...
		var typeList = model.getAllDishes(type);
		for (var i=0; i < typeList.length; i++){ 
			var dish = typeList[i];
			imagesStr = imagesStr + '<div class="col-md-2 image">'
			 + '<center><img src="'+dish.image+'"  alt="'+dish.name+'" width="150" height="200"></img>'
			 + '<button class="food">'+dish.name+'</button>'	 
			 + '<p class="text-justify description">'+dish.description+'</p></div></center>';			
		}
		return imagesStr;
	}
	loadDishes('main dish');
	this.imageLoop.html(imagesStr);	
}



 
