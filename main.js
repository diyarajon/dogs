var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://diyarajon.github.io/cats/');
ourRequest.onload =function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
}
ourRequest.send();