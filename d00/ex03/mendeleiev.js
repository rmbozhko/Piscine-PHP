var cards = document.querySelectorAll('.card');

if (cards)
{
	console.log("Elements successfully found.");
	
	cards.forEach(function (item, idx) {
        item.addEventListener('click', function () {
            this.classList.toggle('is-flipped');
        });
    });
}
else
{
	console.log("No elements were found.");
}