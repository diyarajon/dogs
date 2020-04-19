//var ourRequest = new XMLHttpRequest();
//ourRequest.open('b ')

//        var restaurant = {name:"Asia Cafe", 
//                        takeOut: "yes",
//                        delivery: "no"};
//
//    document.getElementById("p1").innerHTML =
//    restaurant.name  + "<br>"+ " has take out : " +restaurant.takeOut + "<br>"
//    + "has delivery: " + restaurant.delivery; 
//
//    var shops = ["rr donuts", "asia cafe", 'criquet clothing' ];
//
//    for(i = shops.length ; i > 0; i--){
//        document.getElementById("p2").innerHTML += 
  //      shops[i];
    //}

  //  var cafe = ["rr", 'asia', 'yoyoyyo'];
    //var txt = "";
  //  cafe.forEach(myFunction);
    //document.getElementById("p3").innerHTML = txt;
 //   document.getElementById("p3").color = "red";
   // function myFunction(value)
 //   {
   //     txt += value + " <br>";
  //  }

    //document.getElementById("demo").innerHTML =
//obj.employees[1].firstName + " " + obj.employees[1].lastName;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.name;
    document.getElementById("demo").innerHTML = myObj.name;
  }
};
document.getElementById("demo").innerHTML = myObj.name;

xmlhttp.open("GET", "side.json", true);
xmlhttp.send();