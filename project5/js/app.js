window.addEventListener('load', function() {
    baguetteBox.run('.gallery')
 });


function searchList() {
	let input, filter, a, title, i;
	input = document.getElementById('search');
	filter = input.value.toUpperCase();
	a = document.getElementsByTagName( 'a' );
	for (i = 0; i < a.length; i++) {
	  title = a[i].getAttribute('title');	
	  if (title.toUpperCase().indexOf(filter) > -1) {
	  	a[i].style.display = "";
	} else {
		a[i].style.display = "none";
	}
  }
}