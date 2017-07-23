function getViewImg ()
{
  var el_val = document.getElementById('text_field').value;
  switch (el_val) {
    case "view: canyon":
      document.getElementById("clusterWrapper").style.background = "url('resources/grand_canyon.jpg')";
      break ;
    case "view: kremlin":
      document.getElementById("clusterWrapper").style.background = "url('resources/kremlin.jpg')";
      break ;
    case "view: spacex":
      document.getElementById("clusterWrapper").style.background = "url('resources/spacex.jpg')";
      break ;
    case "view: rio":
      document.getElementById("clusterWrapper").style.background = "url('resources/rio.jpg')";
      break ;
    case "view: chaes":
      document.getElementById("clusterWrapper").style.background = "url('resources/chaes.jpg')";
      break ;
    case "view: cluster":
      document.getElementById("clusterWrapper").style.background = "url('resources/cluster.jpg')";
      break;
    case "view: mode":
      window.open("doft_slide.html", "_blank");
      break;
    default:
      document.getElementById("clusterWrapper").style.background = "url('resources/default.jpg')";
      break ;
  }
}
