window.onscroll = function( ) {
	var nav = document.getElementById( 'header' );
	var xfceheader = document.getElementById( 'xfce-header' );
	if( window.pageYOffset > ( nav.scrollHeight + xfceheader.scrollHeight + 100 ) ) {
		nav.classList.add( 'scrolled' );
	} else {
		nav.classList.remove( 'scrolled' );
	}
}
