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
	this.pendingGetTotalMenuPrice.html(dishTot);

	this.sekGetTotalMenuPrice = container.find("#sekGetTotalMenuPrice");
	this.sekGetTotalMenuPrice.html(dishTot);


	
}
 
