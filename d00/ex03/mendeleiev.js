var card = document.querySelectorAll('.card')[0];
if (card)
{
	console.log("Elements successfully found.");
	card.addEventListener( 'click', function() {
	  card.classList.toggle('is-flipped');
	});
}
else
{
	console.log("No elements were found.");
}