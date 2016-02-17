//ExampleView Object constructor
var SideBarView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html(model.getNumberOfGuests());

	var menuList = model.getFullMenu();
	var dish = menuList[0];
	var dishTot = model.getDishPrice(dish.id);

	this.pendingGetTotalMenuPrice = container.find("#pendingGetTotalMenuPrice");
	this.pendingGetTotalMenuPrice.html('0.00');

	this.sekGetTotalMenuPrice = container.find("#sekGetTotalMenuPrice");
	this.sekGetTotalMenuPrice.html(dishTot);

	this.selectedDish = container.find("#selectedDish");
	this.selectedDishPrice = container.find("#selectedDishPrice");

	
	console.log(dish);
	console.log('hej');

	this.selectedDish.html(dish.name);
	this.selectedDishPrice.html(dishTot);



	
}
 
