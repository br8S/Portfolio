document.querySelector(".home-div").addEventListener('click', function(event) {
    console.log("we home")
    document.getElementById("jump_to_home").scrollIntoView({behavior: 'smooth'});
})

document.querySelector(".work-div").addEventListener('click', function(event) {
    console.log("we work")
    document.getElementById("jump_to_work").scrollIntoView({behavior: 'smooth'});
})
