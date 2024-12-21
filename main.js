let check = document.querySelector('#check');
let box = document.querySelector('.box');
let ball = document.querySelector('.ball');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');


check.addEventListener('change', function () {
    if (this.checked) {
      // Night mode
      box.style.backgroundColor = 'white';
      ball.style.transform = 'translateX(100%)';
      document.body.style.backgroundColor = '#333A3F';
      document.body.style.color = 'white';
      line1.style.color = 'transparent';
      line2.style.color = 'white';
    } else {
      // Day mode
      box.style.backgroundColor = '#333A3F';
      ball.style.transform = 'translateX(0%)';
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#333A3F';
      line1.style.color = '#333A3F';
      line2.style.color = 'transparent';
    }
  });