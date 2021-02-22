let mouseCursor = document.querySelector('.cursor')
let socialLinks = document.querySelectorAll('.links')
let navMove = document.querySelectorAll('.nav-move')

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

const animateit = function (e) {
      const span = this.querySelector('span');
      const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,

      move = 15,
      xMove = x / width * (move * 1.2) - move,
      yMove = y / height * (move * 1.2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === 'mouseleave') span.style.transform = '';
};

navMove.forEach(b => b.addEventListener('mousemove', animateit));
navMove.forEach(b => b.addEventListener('mouseleave', animateit));