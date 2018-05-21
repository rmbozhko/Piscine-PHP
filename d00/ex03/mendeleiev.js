var cards = document.querySelectorAll('.card');
// var audio = document.getElementsByClassName("audio");
// console.log(audio, audio.length);
// console.log(cards);
// console.log(cards[11].firstElementChild.childNodes[1].src = "rf.mp3");

function		play(track_name)
{
	// cards[11].firstElementChild.childNodes[1].src = track_name
	new Audio(track_name).play();
	// for (var i = 0; i < audio.length; i++) {
	// 	audio[i].addEventListener("click", function () { item.play(); });
	// }
}

if (cards)
{
	console.log("Elements successfully found.");
	cards.forEach(function (item, idx) {
        item.addEventListener('click', function () {
            this.classList.toggle('is-flipped');
        });
    });

    for (var i = 0; i < cards.length; i++) {
		var text = cards[i].innerText.split('\n')[0];
		console.log(text, text.length);
		if (text.length >= 10)
			cards[i].firstElementChild.style.fontSize = "75%";
	}
}
else
{
	console.log("No elements were found.");
}