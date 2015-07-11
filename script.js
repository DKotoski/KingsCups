function Card(value, suite, flavorText){
	this.value = value;
	this.suite = suite;
	this.flavorText = flavorText;
	this.img = "img/"+value +'_'+ suite+'.png';
}

function Deck(){
	this.cards = new Array();
	var deck = this;
	this.createDeck = function(){
	    for(var i = 0 ; i<52;i++){
			var value;
			var suite;
			var flavorText;
			switch(i%13){
				case 0:
					value = "A";
					flavorText = "something";
					break;
				case 1:
					value = 2;
					flavorText = "something";
					break;
				case 2:
					value = 3;
					flavorText = "something";
					break;
				case 3:
					value = 4;
					flavorText = "something";
					break;
				case 4:
					value = 5;
					flavorText = "something";
					break;
				case 5:
					value = 6;
					flavorText = "something";
					break;
				case 6:
					value = 7;
					flavorText = "something";
					break;
				case 7:
					value = 8;
					flavorText = "something";
					break;
				case 8:
					value = 9;
					flavorText = "something";
					break;
				case 9:
					value = 10;
					flavorText = "something";
					break;	
				case 10:
					value = "J";
					flavorText = "something";
					break;
				case 11:
					value = "Q";
					flavorText = "something";
					break;
				case 12:
					value = "K";
					flavorText = "something";
					break;	
			}
			switch(i%4){
				case 0: suite="H"; break;
				case 1: suite="D"; break;
				case 2: suite="C"; break;
				case 3: suite="S"; break;
			}
			var card = new Card(value,suite,flavorText);
			deck.cards.push(card);
		}
	}
	this.shuffle = function(){
		for(var j = 0 ; j<3 ;j++){
			for(var i = 0; i<52;i++){
				var rand = Math.floor((Math.random() * 51));
				var tmp = deck.cards[i];
				deck.cards[i] = deck.cards[rand];
				deck.cards[rand] = tmp;
			}
		}
	}
	this.draw = function () {
	    var cardDrawn = deck.cards.pop();
	    console.log(cardDrawn);
	    return cardDrawn;
	}
}
console.log("something");
$(function () {
	console.log("something");
	var deck = new Deck();
	deck.createDeck();
	deck.shuffle();
	$(".front").on("click", function () {
	    $(".front").removeClass("front");
	    $(".front").addClass("back");
	    $(".back").removeClass("back");
	    $(".back").addClass("front");
	    $("#text").flip(true);
	    var drawn = deck.draw();
	    $(this).css("background-image", "url(" + drawn.img + ")");
	    $("#text").text(drawn.flavorText);
	});
});