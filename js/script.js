var heading = document.getElementById('heading');
var hCaption = document.createElement('h1');
hCaption.innerText = "This is the gallery Page";
heading.appendChild(hCaption);
var gallery = document.getElementById('gallery');

// JSON text
//var json = JSON.parse(jText);
// console.log(json);


//JSON file
fetch('JSON/images.json').then(function(response){
    response.json().then(function(json){

        
        for(var i = 0; i < json.Images.length ; i++){
            var img = document.createElement('img');
            var aImg = document.createElement('a');
            aImg.href = json.Images[i].URL;
            img.src = json.Images[i].URL;
            img.alt = json.Images[i].hCaption;
            img.calss = "card-img-top";
            img.style = 'width:100%';
        
            var divCard = document.createElement('div');
            divCard.class = "card";
            divCard.style = "width:100%";
        
            var divCardBody = document.createElement('div');
            divCardBody.class = "card-body";
        
            var imgCaption = document.createElement('h4')
            imgCaption.class = "card-title";
            imgCaption.style = "text-align:center";
            imgCaption.innerText = json.Images[i].Caption;
        
            var divCol = document.createElement('div');
            divCol.class = 'col';
        
            aImg.appendChild(img)
            divCardBody.appendChild(imgCaption);
            divCard.appendChild(aImg);
            divCard.appendChild(divCardBody);
            divCol.appendChild(divCard)
            gallery.appendChild(divCol)
        };
        

    });
});

