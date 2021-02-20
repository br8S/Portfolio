let mouseCursor = document.querySelector('.cursor')
let socialLinks = document.querySelectorAll('.links')

window.addEventListener('mousemove', cursor)

function cursor(e){
      mouseCursor.style.top = e.pageY + 'px';
      mouseCursor.style.left = e.pageX + 'px';
}


socialLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
            mouseCursor.classList.add('link-grow')
      })
      link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('link-grow')
      })
})