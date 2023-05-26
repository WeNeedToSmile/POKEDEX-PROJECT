
var boxbox;
const printName = document.querySelector(".card");


function printCardHtml(s1, s2, s3, s4) {

    boxbox = document.createElement('div');
    boxbox.className = 'container';

    const firstBox = document.createElement('p');
    firstBox.innerHTML = s1;

    const secondBox = document.createElement('p');
    secondBox.innerHTML = s2;

    const circleBox = document.createElement('img');
    circleBox.src = s3;

    const afficherNom = document.createElement('p');
    afficherNom.innerHTML = s4;

    boxbox.appendChild(firstBox);
    boxbox.appendChild(secondBox);
    boxbox.appendChild(circleBox);
    boxbox.appendChild(afficherNom);

    return boxbox;

}

var premierSValue;
var secondSValue;
var thirdSValue;
var fourthSValue;

const formulaireCard = document.querySelector(".formulaire-card");
formulaireCard.addEventListener("submit", function (event) {


    var premierS = document.getElementById("name-id");
    premierSValue = premierS.value;

    var secondS = document.getElementById("user-id");
    secondSValue = secondS.value;

    var thirdS= document.getElementById("link-id");
    thirdSValue = thirdS.value;

    var fourthS = document.getElementById("year-id");
    fourthSValue = fourthS.value;

    console.log("La valeur de s1 est:" + premierSValue);
    console.log("La valeur de s2 est:" + secondSValue);
    console.log("La valeur de s3 est:" + thirdSValue);
    console.log("La valeur de s4 est:" + fourthSValue);

    event.preventDefault();

})


const buttonsendName = document.querySelector(".btn-send");
buttonsendName.addEventListener("click", function () {

    printName.appendChild(printCardHtml(premierSValue, secondSValue, thirdSValue, 'SCK ' + fourthSValue));
    //infoPerso ('Captain Smile' , 'SCK 39','https://assets.codepen.io/6093409/sprocket.svg' , 'WeSmi1e') ;
    // infoPerso ('Captain Dev' , 'SCK 36','https://visualstudio.microsoft.com/wp-content/uploads/2021/10/Product-Icon.svg' , 'Don Dev') ;
    //infoPerso ('Young Fûton' , 'SCK 24','https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' , 'Le vent prend son temps') ;
})

