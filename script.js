function refreshPage(){
    window.location.reload();
} 



let container = document.querySelector(`.container`);
let previousElement = ``;

container.addEventListener(`click`, function (event){
    let currentElement = event.target;
    if(currentElement.classList.contains("kubik")) { 
    currentElement.classList.remove("kubik");

    if(previousElement == ``) {
        previousElement = currentElement;
     
    } 
    else if (previousElement.classList.contains("blue")
    && 
    currentElement.classList.contains("blue")
    ) {
        previousElement.style.opacity = 0;
        currentElement.style.opacity = 0;
        previousElement = ``;
    }
    else if (previousElement.classList.contains("pink")
    && 
    currentElement.classList.contains("pink")
    ) {
        previousElement.style.opacity = 0;
        currentElement.style.opacity = 0;
        previousElement = ``;
    }
    else if (previousElement.classList.contains("violet")
    && 
    currentElement.classList.contains("violet")
    ) {
        previousElement.style.opacity = 0;
        currentElement.style.opacity = 0;
        previousElement = ``;
    }
    else {
        previousElement.classList.add("kubik");
        previousElement = currentElement;

    }

}
})