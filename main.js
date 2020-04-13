var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'view-source:https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload =function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
}



function renderHTML(data){
    var htmlString = "<p>this is a test</p>";
}