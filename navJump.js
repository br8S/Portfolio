document.querySelector(".home-div").addEventListener('click', function(event) {
    document.getElementById("jump_to_home").scrollIntoView({behavior: 'smooth'});
})

document.querySelector(".work-div").addEventListener('click', function(event) {
    document.getElementById("jump_to_work").scrollIntoView({behavior: 'smooth'});
})
