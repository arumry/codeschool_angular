(function(){
	//angular module
	var app = angular.module('store', []); //array for possible dependencies
	
	//gems
	var gems = [{
		name: "Triangle",
		price: 2.80,
		description: "Really?",
		canPurchase: false,
		soldOut: false
	},
	{
		name: "Square",
		price: 2.80,
		description: "Really?",
		canPurchase: false,
		soldOut: false
	},
	{
		name: "Rectangle",
		price: 2.80,
		description: "Really?",
		canPurchase: false,
		soldOut: false
	},
	{
		name: "Hexagon",
		price: 2.80,
		description: "Really?",
		canPurchase: false,
		soldOut: false
	}];

	//controller
	app.controller('storeController', function(){
		this.products = gems;
	});
	


})();
