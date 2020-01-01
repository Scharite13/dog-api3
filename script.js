"use strict"

function getDogImage(breedInput){
  
    fetch(`https://dog.ceo/api/breed/${breedInput}/images/random`)
        .then(response => response.json())
        .then(responseJson => displayImage(responseJson))
        .catch(Error => alert("Breed not found (master breed does not exist)"));
}
function watchForInput(){
  $("#dog-breed-img").submit(e => {
    e.preventDefault();
    let userInput = $("#breed-input").val();
    getDogImage(userInput);
  });
}

function displayImage(responseJson){
    console.log(responseJson);
    if (responseJson.status == "error"){
        alert("Sorry, that breed was not found try another.")
    }
    else{
    $(".results-img").replaceWith(
        `<img src="${responseJson.message}" class="results-img" alt="placeholder">`
    );
    $('.results').removeClass("hidden");}
    }


$(function(){
  console.log("App loaded! Waiting for Submit!");
  watchForInput();
});