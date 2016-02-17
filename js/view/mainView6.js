//ExampleView Object constructor
var MainView = function (container,model) {
		
	this.dinnerImageSpan = container.find("#dinnerImageSpan");

	
	var menuList = model.getFullMenu();
	console.log(menuList);
	var menuTot = model.getTotalMenuPrice();
	var num = model.getNumberOfGuests();
	

	var SouvlakiStr = function (menuList){
		var gyrosStr = '';
		for (var i=0; i < menuList.length; i++){
			var dish = menuList[i];
			var Sch = model.getDishPrice(dish.id);
			gyrosStr = gyrosStr + '<div class="col-md-2 image dinnerImage">'
			+ '<img src="'+ dish.image +'" class="img-thumbnail" alt="Cinque Terre" width="300" height="400">'
			+ '<button class="food">'+dish.name+'</button>'
			+ '<p>SEK '+Sch+'</p></div>';
		}
		return gyrosStr;
	};

	var Souvlaki =  SouvlakiStr(menuList);

	var dinnerImageStr = '<div class="col-md-3 myDinnerBanner">'
			+ '<h1 class="mydinner4ppl">My Dinner: '+num+' People<span id="bestChefs"></span></h1>'
			+ '<button type="button" class="goBackDinnerButton btn btn-warning">Go back and edit dinner</button></div>'
			+ '<div id="clearfix visible-md-block"></div><div class="col-md-12 mychosenDinner">'
			+ '<center><div id="clearfix visible-sm-block"></div>'
			+ Souvlaki
			+ '<div class="verticalLine"><div class="Sum"><p id="sumText">Total:</p>'
			+ '<p id="sumText"> '+menuTot+' SEK</p></div></div>'
			+ '<div class="hline col-md-12"><hr><button type="button" class="printDinnerButton btn btn-warning">Print Full Recipe</button>'
			+ '</div></center>';
	this.dinnerImageSpan.html(dinnerImageStr);

		
}
