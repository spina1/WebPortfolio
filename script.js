button = document.querySelector('.button');

button.addEventListener('mouseup', function(){
  this.classList.add('active');
  setTimeout(function () {
    button.classList.remove('active');
}, 300);
});


