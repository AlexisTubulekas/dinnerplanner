//DinnerModel Object constructor
var DinnerModel = function() {
   var dinnerMenu = [1, 3, 102];
   var list = [];
   var otherList = [];
   var numberOfGuests = 2;
   
   
   	this.setNumberOfGuests = function(num) {
		//TODO Lab 2
		//num är värdet av klicket när man ökar/minskar antalet gäster
		if (num === '1'){
			numberOfGuests = numberOfGuests + 1;
            console.log('increase');

		}
		else if (num == '-1'){
			numberOfGuests = numberOfGuests - 1;
            console.log('decrease');
		}
		return numberOfGuests;	
		
	}

	this.getNumberOfGuests = function() {
		//TODO Lab 2
		return numberOfGuests;
	}

	this.getSelectedDish = function(type) {
		var typeList = [];
          for (menEl = 0; menEl< dinnerMenu.length; menEl++){ //går igenom varje element i menyn
            var gottenDish = this.getDish(dinnerMenu[menEl]); //hämtar ut dish om den finns i menyn
            if (gottenDish.type == type){ 
              typeList.push(gottenDish.id); //lägger i listan om rätt type
            }
          }
        return typeList; //skriver ut listan med rätta-typ-rätter
          }
		//TODO Lab 2



  
    this.getFullMenu = function() {
		//TODO Lab 2
		var fullList = [];
		for (menEl = 0; menEl< dinnerMenu.length; menEl++){ //går igenom varje element i menyn
            var gottenDish = this.getDish(dinnerMenu[menEl]);
            fullList.push(gottenDish);
        	}
        return fullList; //skriver ut listan med rätta-typ-rätter
          }
    
  
    this.getAllIngredients = function() {
		//TODO Lab 2
		var ingrList = [];	
      for (menEl = 0; menEl< dinnerMenu.length; menEl++){ //går igenom varje element i menyn
            var gottenDish = this.getDish(dinnerMenu[menEl]);
            var gottenIngr = gottenDish.ingredients;
          for (var key in gottenIngr){
            ingrList.push(gottenIngr[key]);
          }
        	}
        return ingrList; //skriver ut listan med rätta-typ-rätter
          }


    this.getDishPrice = function(id){

    	var priceList = [];	
    	var gottenDish = this.getDish(id);
    	var gottenIngr = gottenDish.ingredients;
    	for (var key in gottenIngr){
    		//console.log(gottenIngr[key].price);
            priceList.push(gottenIngr[key].price);
          }
       	var sum = 0;
       	var len = priceList.length;
      	for (var i=0; i < len; i++){
      		//console.log('listan är '+ priceList.length);
      		var popped = priceList.pop();
      		sum = sum + popped;
      		//console.log('summan är' + sum);
      	}
      	var sum = sum*numberOfGuests; 
      	if (isNaN(sum) === true){
         	console.log('nan');
         	return ('0.00');
         }
         else if (isNaN(sum) === false){
         	console.log('all good sum!' + sum);
         	return (sum+'.00');
         }
    }
//Returns the total price of the menu (all the ingredients multiplied by number of guests).

 	this.getTotalMenuPrice = function() {
		//TODO Lab 2
		var priceList = [];	
      for (menEl = 0; menEl< dinnerMenu.length; menEl++){ //går igenom varje element i menyn
            var gottenDish = this.getDish(dinnerMenu[menEl]);
            var gottenIngr = gottenDish.ingredients;
          for (var key in gottenIngr){
            priceList.push(gottenIngr[key].price);
          }
        	}
        	
      var sum = 0;
      var len = priceList.length;
      for (i=0; i < len; i++){
      		var popped = priceList.pop();
      		var sum = sum + popped;
      }  
         //var sum = priceList.reduce(function(pv, cv) { return pv + cv; }, 0);
         var sum = sum*numberOfGuests;
         if (isNaN(sum) === true){
         	console.log('nan');
         	return ('0.00');
         }
         else if (isNaN(sum) === false){
         	console.log('all good sum!' + sum);
         	return (sum+'.00');
         }
         //skriver ut listan med rätta-typ-rätter
          }
	
  	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		//TODO Lab 2 
      var dishToAdd = this.getDish(id);
      for (menEl = 0; menEl< dinnerMenu.length; menEl++){ //går igenom varje element i menyn
      var gottenDish = this.getDish(dinnerMenu[menEl]); //hämtar ut dish om den finns i menyn
      if (gottenDish.type == dishToAdd.type){
        dinnerMenu.splice(menEl, 1, dishToAdd.id);       
      }
      else if (gottenDish.id in dinnerMenu){
        dinnerMenu.push(dishToAdd.id);
      }
      }
      return dinnerMenu;
	}
  
this.removeDishFromMenu = function(id) {
		//TODO Lab 2
		var dishToRemove = this.getDish(id);
		for (menEl = 0; menEl< dinnerMenu.length; menEl++){ //går igenom varje element i menyn
            var gottenDish = this.getDish(dinnerMenu[menEl]);
            if (dishToRemove.id == gottenDish.id){
            	dinnerMenu.splice(menEl, 1);
            }
	    }
        return dinnerMenu;
    };
    

  //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return $(dishes).filter(function(index,dish) {
		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });	
	} 
	
  //function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(var key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	};
  


   /* this.getIngredient = function(id){
		for (menEl = 0; menEl< dinnerMenu.length; menEl++){ //går igenom varje element i menyn
            var gottenDish = this.getDish(dinnerMenu[menEl]);
				gottenDish.ingredients.forEach ();
                  //console.log('ob is ' + ob);
					//return dishes[ob].ingredients;
				}
			};*/
		
	
    

	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}
