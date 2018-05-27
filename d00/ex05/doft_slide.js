function  start_slider()
{
  var myNode = document.getElementById("clusterWrapper");
  while (myNode.firstChild)
    myNode.removeChild(myNode.firstChild);

  for (var i = 0; i < 8; i++) {
    var img = document.createElement("img");
    img.className = "img";
    img.src = "";
    myNode.appendChild(img);
  }
  document.getElementById('text_field').value = "";
  var audio = document.createElement("audio");
  audio.hidden = true;
  audio.src = "";
  audio.type = "audio/mpeg";
  audio.id = "audio";
  audio.controls = 'controls';
  audio.autoplay = 'autoplay';
  myNode.appendChild(audio);
  getBckgImages();
}


function returnImages(imgName)
{
  let i = -1;
  imgFields = document.getElementsByClassName("img");
  console.log(imgName)
  while (++i < imgFields.length)
  {
    imgFields[i].src = "resources/" + imgName + "_" + i + ".jpg";
    console.log(imgFields[i].src)
    imgFields[i].style.width = "1025px";
    imgFields[i].style.height = "580px";
  }
}

function getBckgImages()
{
  var el_val = prompt("Choose the slider mode", "ussr | ac | scooby | tbbt (The Bing Bang Theory)");
  switch (el_val) {
    case "ussr":
      document.getElementById("audio").src = "soviet_march.mp3";
      returnImages("ussr");
      break ;
    case "ac":
      document.getElementById("audio").src = "Everybody Wants To Rule The World.mp3";
      returnImages("ac");
      break ;
    case "scooby":
      document.getElementById("audio").src = "scooby.mp3";
      returnImages("scooby");
      break;
    case "tbbt":
      document.getElementById("audio").src = "tbbt.mp3";
      returnImages("tbbt");
      break;
  }
  slider();
}

function slider()
{
  var current = 0,
  slides = document.getElementsByClassName("img");

  setInterval(function() {
    let i = -1;
    while (++i < slides.length)
      slides[i].style.opacity = 0;
    current = (current != slides.length - 1) ? current + 1 : 0;
    slides[current].style.opacity = 1;

  }, 6000);
}
