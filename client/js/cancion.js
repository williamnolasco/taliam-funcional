$(document).ready(function(){

	// Cuando el usuario le da click al boton "Liberar"

	var button_liberate_song = document.querySelectorAll('.button-liberate-song');
	var locked_song = document.querySelectorAll('.locked-song');
	var guess = document.querySelectorAll('.guess');
	var button_go_original2 = document.querySelector('.button-go-original2');
	var button_go_original3 = document.querySelector('.button-go-original3');
	var button_go_original4 = document.querySelector('.button-go-original4');
	var button_go_original5 = document.querySelector('.button-go-original5');
	var button_go_original6 = document.querySelector('.button-go-original6');
	var button_go_original7 = document.querySelector('.button-go-original7');
	var first_letter_original2 = document.querySelectorAll('.first-letter-original2');
	var first_letter_original3 = document.querySelectorAll('.first-letter-original3');
	var first_letter_original4 = document.querySelectorAll('.first-letter-original4');
	var first_letter_original5 = document.querySelectorAll('.first-letter-original5');
	var first_letter_original6 = document.querySelectorAll('.first-letter-original6');
	var first_letter_original7 = document.querySelectorAll('.first-letter-original7');
	var button_original2 = document.querySelector('.button-original2');
	var button_original3 = document.querySelector('.button-original3');
	var button_original4 = document.querySelector('.button-original4');
	var button_original5 = document.querySelector('.button-original5');
	var button_original6 = document.querySelector('.button-original6');
	var button_original7 = document.querySelector('.button-original7');
	 
	button_liberate_song[0].addEventListener('click', function(){
		guess[0].style.display = 'block';
	});
	button_liberate_song[1].addEventListener('click', function(){
		guess[1].style.display = 'block';
	});
	button_liberate_song[2].addEventListener('click', function(){
		guess[2].style.display = 'block';
	});
	button_liberate_song[3].addEventListener('click', function(){
		guess[3].style.display = 'block';
	});
	button_liberate_song[4].addEventListener('click', function(){
		guess[4].style.display = 'block';
	});
	button_liberate_song[5].addEventListener('click', function(){
		guess[5].style.display = 'block';
	});


	// Remix 2
	first_letter_original2[1].addEventListener('click', function(){
		guess[1].style.display = 'none';
		button_liberate_song[1].style.display = 'none';
	});
	first_letter_original2[0].addEventListener('click', function(){
		guess[1].style.display = 'none';
		locked_song[1].style.display = 'none';
		button_original2.setAttribute('href', 'https://youtu.be/S2PeAVB4fhg');
	});
	first_letter_original2[2].addEventListener('click', function(){
		guess[1].style.display = 'none';
		button_liberate_song[1].style.display = 'none';
	});

	// Remix 3
	first_letter_original3[0].addEventListener('click', function(){
		guess[2].style.display = 'none';
		locked_song[2].style.display = 'none';
		button_original3.setAttribute('href', 'https://www.youtube.com/watch?v=Eagm9TEOPSU');
	});
	first_letter_original3[1].addEventListener('click', function(){
		guess[2].style.display = 'none';
		button_liberate_song[2].style.display = 'none';
	});
	first_letter_original3[2].addEventListener('click', function(){
		guess[2].style.display = 'none';
		button_liberate_song[2].style.display = 'none';
	});

	// Remix 4
	first_letter_original4[1].addEventListener('click', function(){
		guess[3].style.display = 'none';
		locked_song[3].style.display = 'none';
		button_original4.setAttribute('href', 'https://www.youtube.com/watch?v=17Ao5ictww4&feature=youtu.be');
	});
	first_letter_original4[0].addEventListener('click', function(){
		guess[3].style.display = 'none';
		button_liberate_song[3].style.display = 'none';
	});
	first_letter_original4[2].addEventListener('click', function(){
		guess[3].style.display = 'none';
		button_liberate_song[3].style.display = 'none';
	});

	// Remix 5
	first_letter_original5[2].addEventListener('click', function(){
		guess[4].style.display = 'none';
		locked_song[4].style.display = 'none';
		button_original5.setAttribute('href', 'https://soundcloud.com/iamtheelephante/elephante-plans-feat-brandyn-burnette');
	});
	first_letter_original5[0].addEventListener('click', function(){
		guess[4].style.display = 'none';
		button_liberate_song[4].style.display = 'none';
	});
	first_letter_original5[1].addEventListener('click', function(){
		guess[4].style.display = 'none';
		button_liberate_song[4].style.display = 'none';
	});

	// Remix 6
	first_letter_original6[0].addEventListener('click', function(){
		guess[5].style.display = 'none';
		locked_song[5].style.display = 'none';
		button_original6.setAttribute('href', 'https://www.youtube.com/watch?v=0zxEjrXpuM0');
	});
	first_letter_original6[1].addEventListener('click', function(){
		guess[5].style.display = 'none';
		button_liberate_song[5].style.display = 'none';
	});
	first_letter_original6[2].addEventListener('click', function(){
		guess[5].style.display = 'none';
		button_liberate_song[5].style.display = 'none';
	});

	// Remix 7
	first_letter_original7[2].addEventListener('click', function(){
		guess[6].style.display = 'none';
		locked_song[6].style.display = 'none';
		button_original7.setAttribute('href', 'https://soundcloud.com/nosleepmusic/no-sleep-feat-gia-koka-born-to-lose');
	});
	first_letter_original7[0].addEventListener('click', function(){
		guess[6].style.display = 'none';
		button_liberate_song[6].style.display = 'none';
	});
	first_letter_original7[1].addEventListener('click', function(){
		guess[6].style.display = 'none';
		button_liberate_song[6].style.display = 'none';
	});


	// Detectando los dias para liberar las canciones

	var now = new Date();
	var day = now.getDay();

	if( day === 0 ){
		day = 7;
	}
	for (var i = 0; i < day; i++) {
		locked_song[i].classList.add('display-none');
		if( i === 1 ){
			button_original2.setAttribute('href', 'https://youtu.be/S2PeAVB4fhg');
		}
		if( i === 2 ){
			button_original3.setAttribute('href', 'https://www.youtube.com/watch?v=Eagm9TEOPSU');
		}
		if( i === 3 ){
			button_original4.setAttribute('href', 'https://www.youtube.com/watch?v=17Ao5ictww4&feature=youtu.be');
		}
		if( i === 4 ){
			button_original5.setAttribute('href', 'https://soundcloud.com/iamtheelephante/elephante-plans-feat-brandyn-burnette');
		}
		if( i === 5){
			button_original6.setAttribute('href', 'https://www.youtube.com/watch?v=0zxEjrXpuM0');
		}
		if( i === 6 ){
			button_original7.setAttribute('href', 'https://soundcloud.com/nosleepmusic/no-sleep-feat-gia-koka-born-to-lose');
		}
	}

});