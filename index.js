

$("input").on("input",function(kg){

$(".all-of-cards").removeClass("all-of-cards");
var pound = kgToPound(kg.target.valueAsNumber);
var ounce = kgToOunce(kg.target.valueAsNumber);
var stones = kgToStones(kg.target.valueAsNumber);
$(".card1 h6").html("<h6>Pound:"+pound.toFixed(2)+"</h6>");
$(".card2 h6").html("<h6>Ounces:"+ounce.toFixed(2)+"</h6>");
$(".card3 h6").html("<h6>Stones:"+stones.toFixed(2)+"</h6>");
});

function kgToPound(kg){
   var pound = kg*2.204;
   feet = Math.round(pound*100)/100;
   return pound;
}

function kgToOunce(kg){
   var ounce = kg*35.2739;
   ounce = Math.round(ounce*100)/100;
   return ounce;
}

function kgToStones(kg){
   var stones = kg/0.1763;
   stones =  Math.round(stones*100)/100;
   return stones;
}
