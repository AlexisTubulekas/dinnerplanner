//ExampleView Object constructor
var MainView = function (container,model) {
		
	this.foodImageSpan = container.find("#foodImageSpan");

	var num = model.getNumberOfGuests();
	var menuList = model.getFullMenu();
	var dish = menuList[0];
	var dishTot = model.getDishPrice(dish.id);

	var ingrStr = function (dish){
				var tableStr = '';
				for (i=0; i < dish.ingredients.length; i++){
					tableStr = tableStr + '<tr><td>'+dish.ingredients[i].quantity*num+dish.ingredients[i].unit+'</td>'
				+ '<td>'+dish.ingredients[i].name+'</td>'
				+ '<td>SEK '+dish.ingredients[i].price*num+'</td></tr>';
				console.log(i);
				}
				return tableStr;
			};

	var foodImageStr = '<h2>'+dish.name+'</h2>'
			+'<div class="col-md-3 foodImage"><img src="'+dish.image+'" class="img-thumbnail" alt="Cinque Terre" width="500" height="500">'
			+'<p id="imagetext">'+dish.description+'</p></div>'
			+ '<div class="col-md-4 ingridients">'
			+ '<h3 class="ingridientsForPersons">Ingredients for '+num+' persons</h3><hr>'
			+ '<table class="table table-hover">'
			+ ingrStr(dish)
			+ '</table><hr><div class="col-md-6 ingridientConfirm">'
			+ '<button type="button" class="btn btn-warning">Confirm Dinner</button>'
			+ '</div><div class="totalCost"><center><b>SEK '+dishTot+'</b></center></div>'
			+ '</div><div class="col-md-6 backbutton"><button type="button" class="btn btn-warning">Back to Seect Dish</button>'
			+ '</div><div class="wrapper"><h2 align="left">Preparations</h2>'+dish.description+'</div>';

	


	


	this.foodImageSpan.html(foodImageStr);

		
}
