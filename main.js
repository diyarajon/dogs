var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'view-source:https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload =function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
}
ourRequest.send();



function renderHTML(data){
    var htmlString = "this is a test"
}