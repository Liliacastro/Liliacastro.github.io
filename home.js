function alert_name(){
  //create name variable
  var name = " Lilia";
  alert("My name is " + name);
  console.log("test 123")
}

function change_image(){
  var image = document.getElementById('ham.jpg');
  image.src = "bird.jpg";
}

function bigImg(x) {
  x.style.height = "500px";
  x.style.width = "500px";
}

function normalImg(x) {
  x.style.height = "300px";
  x.style.width = "300px";
}
