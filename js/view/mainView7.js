//ExampleView Object constructor
var MainView = function (container,model) {
		
	this.printDinnerSpan = container.find("#printDinnerSpan");

	
	var menuList = model.getFullMenu();
	console.log(menuList);
	var menuTot = model.getTotalMenuPrice();
	var num = model.getNumberOfGuests();
	

	var SouvlakiStr = function (menuList){
		var gyrosStr = '';
		for (var i=0; i < menuList.length; i++){
			var dish = menuList[i];
			var Sch = model.getDishPrice(dish.id);
			gyrosStr = gyrosStr + '<div class="col-md-12 finalDinners"><div class="col-md-6 finalDinner">'
			+ '<div class="col-md-12 finalImgText"><div class="col-md-4 finalDinnerImage">'
			+ '<img src="'+dish.image+'" class="img-thumbnail image" alt="Cinque Terre" width="200" height="100" style="margin:0;"></div>'
			+ '<div class="col-md-7 finalDinnerText"><p class ="finalDinnerTextP">'
			+ '<div style="font-size:20; padding-bottom: 10px; font-weight: bold;">'+dish.name+'</div>'+dish.description+'</div>'
			+ '</div></div><div class="col-md-4 prepInstructions"><h3>Preparations</h3>'
			+ '<p class="prepText">'+dish.description+'</p></div></div>';
		}
		return gyrosStr;
	};

	var Souvlaki =  SouvlakiStr(menuList);

	var printDinnerSpan = '<div class="col-md-3 myDinnerBanner">'
			+ '<h1 class="mydinner4ppl">My Dinner: '+num+' People<span id="bestChefs"></span></h1>'
			+ '<button type="button" class="goBackDinnerButton btn btn-warning">Go back and edit dinner</button></div>'
			+ Souvlaki;

	this.printDinnerSpan.html(printDinnerSpan);
}
