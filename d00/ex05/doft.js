function  googleQuery()
{
  var query = prompt("Your Google query", "Ask Google something");
  query = query.replace(" ", "+");
  window.open("https://www.google.com.ua/search?q="+query, "_blank");
}

function  getFirstQuestionAnswer()
{
  var el = document.getElementById('play_quiz').value;
    if (String(el).toLowerCase() === 'seven' || String(el).toLowerCase() === '7')
      {
          var parent = document.getElementById('speak_bubble');
          var audio = document.createElement("audio");
          audio.src = "star_wars.mp3";
          audio.controls = "controls";
          audio.autoplay = "autoplay";
          audio.hidden = "true";
          audio.type = "audio/mpeg";
          audio.id = "quiz_audio";
          parent.appendChild(audio);
          document.getElementById('game_text').innerHTML = 'Welcome to the Dark Side, besides, do you want some cookies? :)';
          setTimeout(function () {
            document.getElementById("speak_bubble").hidden = "true";
            audio.src = "#";
            return (1);
          }, 10000);
      }
   else
      {
          document.getElementById('game_text').innerHTML = 'You don\'t merit to be one of us. Prepare better.';
          setTimeout(function () {
            document.getElementById("speak_bubble").hidden = "true";
            audio.src = "#";
            return (0);
          }, 10000);
      }
      document.getElementById('quiz_button').onclick = viewBubbleDiv;
}

function  getFirstQuestion(status)
{
  document.getElementById('game_text').innerHTML = "How many episodes of 'Star Wars' do we have by 2017 ?";
  var child = document.getElementById('play_quiz');
  var button_quiz = document.getElementById('quiz_button');
  child.value = "";
  let series = ["FIVE", "SIX", "FOUR", "SEVEN"];
  var speak_bubble = document.getElementById("speak_bubble");
  speak_bubble.style.width = "560px";
  child.placeholder = "";
  child.style.width = "450px";
  button_quiz.style.width = "80px";
  for (let i = 0; i < 4; i++)
  {
    child.placeholder += series[i] + ((i < 3) ? " | " : " ");
  }
  document.getElementById('quiz_button').onclick = getFirstQuestionAnswer;
}

function  viewBubbleDiv()
{
  if (document.getElementById('speak_bubble').hidden === false)
    document.getElementById('speak_bubble').hidden = true;
  else
    document.getElementById('speak_bubble').hidden = false;
}

function  getAnswer()
{
  var el = document.getElementById('play_quiz').value;
  ((el === 'y' || el === 'yes')) ? getFirstQuestion() : document.getElementById('game_text').innerHTML = 'Maybe next time.';
}

function  getCorrectorImg()
{
  var aka = prompt("Enter you 42's aka", "rbozhko");
  aka = aka.replace(/\s/g, '');
  document.getElementById("clusterWrapper").style.background = "url('https://cdn.intra.42.fr/users/medium_" + aka + ".jpg') no-repeat";
  document.getElementById("clusterWrapper").style.marginLeft = "360px";
  document.getElementById('corr_msg').getElementsByTagName('a')[0].href = "https://profile.intra.42.fr/users/" + aka;
  var prompt_win = document.getElementById("corr_profile");
  prompt_win.innerHTML = "Oh look here, "+ aka +". Is it yours account photo? :)";
  prompt_win.style.fontSize = "20px";
  prompt_win.style.color = "black";
  prompt_win.style.textDecoration = "none";
  prompt_win.style.position = "relative";
  prompt_win.style.left = "320px";
  prompt_win.style.top = "390px";
}
