$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var sideBarView = new SideBarView($(".myDinner"), model);
	var mainView = new MainView($(".chosenCourse"), model);

});
