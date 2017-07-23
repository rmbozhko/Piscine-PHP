function imgControllPanel()
{
  document.getElementById('text_field').value = 'view: ';
}

function returnImages(imgName)
{
  let i = -1;
  imgFields = document.getElementsByClassName("img");
  while (++i < imgFields.length)
  {
    imgFields[i].src = "resources/" + imgName + "_" + i + ".jpg";
    imgFields[i].style.width = "1025px";
    imgFields[i].style.height = "580px";
  }
}

function getViewImg ()
{
  var el_val = document.getElementById('text_field').value;
  switch (el_val) {
    case "view: ussr":
      document.getElementById("audio").src = "soviet_march.mp3";
      returnImages("ussr");
      break ;
    case "view: ac":
      document.getElementById("audio").src = "Everybody Wants To Rule The World.mp3";
      returnImages("ac");
      break ;
    case "view: scooby":
      document.getElementById("audio").src = "scooby.mp3";
      returnImages("scooby");
      break;
    case "view: tbbt":
      document.getElementById("audio").src = "tbbt.mp3";
      returnImages("tbbt");
      break;
    default:
      document.getElementById("clusterWrapper").style.background = "url('resources/default.jpg')";
      break ;
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
