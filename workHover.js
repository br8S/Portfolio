document.querySelector(".project-container").addEventListener("mouseover", function(event){
    if(event.target.classList.contains("mouse")){
        // Make the next element sibling visible
        event.target.nextElementSibling.classList.remove("work-link");
    }
});
