var ourRequest = new XMLHttpRequest();
fetch("./side.json")
.then(function(resp){
return resp.json();
}) 
.then(function(data){

});
        var restaurant = {name:"Asia Cafe", 
                        takeOut: "yes",
                        delivery: "no"};

    document.getElementById("p1").innerHTML =
    restaurant.name  + "<br>"+ " has take out : " +restaurant.takeOut + "<br>"
    + "has delivery: " + restaurant.delivery; 

    var shops = ["rr donuts", "asia cafe", 'criquet clothing' ];

    for(i = shops.length ; i > 0; i--){
        document.getElementById("p2").innerHTML += 
        shops[i];
    }

    var cafe = ["rr", 'asia', 'yoyoyyo'];
    var txt = "";
    cafe.forEach(myFunction);
    document.getElementById("p3").innerHTML = txt;
    document.getElementById("p3").color = "red";
    function myFunction(value)
    {
        txt += value + " <br>";
    }

    document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;