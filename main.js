var i = 0;
var txt = 'beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans beans ';
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('demo').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();