$(document).ready(function() {
	$(".button-collapse").sideNav();

	// ...> Para mostrar le modal de que tu mensaje fue enviado 
	function modal_send_information(){
		swal({
			title: 'Genial!',
			text: 'Gracias a ti, estamos llevando la música electrónica a todo Latinoamérica',
			type: 'success',
			confirmButtonText: 'Ok'
		});
	}

	var row_remix_data = document.querySelector('.row-remix-data');
	var button_recommend_remix = document.querySelector('.button-recommend-remix');
	var button_send_information = document.querySelector('.button-send-information');

	button_recommend_remix.addEventListener('click', function(){
		row_remix_data.classList.add('display-block');
	});

	button_send_information.addEventListener('click', function(){
		modal_send_information();
		row_remix_data.classList.remove('display-block');
	});
	// ...... <

	var remix_1 = document.querySelector('.remix-1');
	var remix_2 = document.querySelector('.remix-2');
	var remix_3 = document.querySelector('.remix-3');
	var remix_4 = document.querySelector('.remix-4');
	var remix_5 = document.querySelector('.remix-5');
	var remix_6 = document.querySelector('.remix-6');
	var remix_7 = document.querySelector('.remix-7');
	var icons_play_pause_1 = document.querySelector('.icons-play-pause-1');
	var icons_play_pause_2 =document.querySelector('.icons-play-pause-2');
	var icons_play_pause_3 =document.querySelector('.icons-play-pause-3');
	var icons_play_pause_4 =document.querySelector('.icons-play-pause-4');
	var icons_play_pause_5 =document.querySelector('.icons-play-pause-5');
	var icons_play_pause_6 =document.querySelector('.icons-play-pause-6');
	var icons_play_pause_7 =document.querySelector('.icons-play-pause-7');

	function checking_status_pause(){
		if( remix_1.paused ){
			icons_play_pause_1.classList.remove('icon-pause');
			icons_play_pause_1.classList.add('icon-play');
			contador_remix_1 = 0;
		}else{
			icons_play_pause_1.classList.remove('icon-play');
			icons_play_pause_1.classList.add('icon-pause');
			contador_remix_1 = 1;
		}
		if( remix_2.paused ){
			icons_play_pause_2.classList.remove('icon-pause');
			icons_play_pause_2.classList.add('icon-play');
			contador_remix_2 = 0;
		}else{
			icons_play_pause_2.classList.remove('icon-play');
			icons_play_pause_2.classList.add('icon-pause');
			contador_remix_2 = 1;
		}
		if( remix_3.paused ){
			icons_play_pause_3.classList.remove('icon-pause');
			icons_play_pause_3.classList.add('icon-play');
			contador_remix_3 = 0;
		}else{
			icons_play_pause_3.classList.remove('icon-play');
			icons_play_pause_3.classList.add('icon-pause');
			contador_remix_3 = 1;
		}
		if( remix_4.paused ){
			icons_play_pause_4.classList.remove('icon-pause');
			icons_play_pause_4.classList.add('icon-play');
			contador_remix_4 = 0;
		}else{
			icons_play_pause_4.classList.remove('icon-play');
			icons_play_pause_4.classList.add('icon-pause');
			contador_remix_4 = 1;
		}
		if( remix_5.paused ){
			icons_play_pause_5.classList.remove('icon-pause');
			icons_play_pause_5.classList.add('icon-play');
			contador_remix_5 = 0;
		}else{
			icons_play_pause_5.classList.remove('icon-play');
			icons_play_pause_5.classList.add('icon-pause');
			contador_remix_5 = 1;
		}
		if( remix_6.paused ){
			icons_play_pause_6.classList.remove('icon-pause');
			icons_play_pause_6.classList.add('icon-play');
			contador_remix_6 = 0;
		}else{
			icons_play_pause_6.classList.remove('icon-play');
			icons_play_pause_6.classList.add('icon-pause');
			contador_remix_6 = 1;
		}
		if( remix_7.paused ){
			icons_play_pause_7.classList.remove('icon-pause');
			icons_play_pause_7.classList.add('icon-play');
			contador_remix_7 = 0;
		}else{
			icons_play_pause_7.classList.remove('icon-play');
			icons_play_pause_7.classList.add('icon-pause');
			contador_remix_7 = 1;
		}
	}

	function verifying_completion_remix7(){
		var verificar_remix7 = setInterval(function(){
			if( remix_7.ended ){
			//Cuando todavia no se liberan todas las canciones
				remix_7.pause();
				remix_1.pause();
				checking_status_pause();
				clearInterval(verificar_remix7);
			//Cuando ya se libero todas las canciones
				/*remix_7.pause();
				remix_1.play();
				checking_status_pause();
				clearInterval(verificar_remix7);
				contador_remix_1 = 1;
				verifying_completion_remix1();*/
			}
		}, 1000);
	}
	function verifying_completion_remix6(){
		var verificar_remix6 = setInterval(function(){
			if( remix_6.ended ){
			//Cuando todavia no se liberan todas las canciones
				remix_6.pause();
				remix_7.pause();
				checking_status_pause();
				clearInterval(verificar_remix6);
			//Cuando ya se libero todas las canciones
				/*remix_6.pause();
				remix_7.play();
				checking_status_pause();
				clearInterval(verificar_remix6);
				contador_remix_7 = 1;
				verifying_completion_remix7();*/
			}
		}, 1000);
	}
	function verifying_completion_remix5(){
		var verificar_remix5 = setInterval(function(){
			if( remix_5.ended ){
			//Cuando todavia no se liberan todas las canciones
				remix_5.pause();
				remix_6.pause();
				checking_status_pause();
				clearInterval(verificar_remix5);
			//Cuando ya se libero todas las canciones
				/*remix_5.pause();
				remix_6.play();
				checking_status_pause();
				clearInterval(verificar_remix5);
				contador_remix_6 = 1;
				verifying_completion_remix6();*/
			}
		}, 1000);
	}

	function verifying_completion_remix4(){
		var verificar_remix4 = setInterval(function(){
			if( remix_4.ended ){
			//cuando todavia no se liberan todas las canciones
				remix_4.pause();
				remix_5.pause();
				checking_status_pause();
				clearInterval(verificar_remix4);
			//Cuando ya se libero todas las canciones
				/*remix_4.pause();
				remix_5.play();
				checking_status_pause();
				clearInterval(verificar_remix4);
				contador_remix_5 = 1;
				verifying_completion_remix5();*/
			}
		}, 1000);
	}

	function verifying_completion_remix3(){
		var verificar_remix3 = setInterval(function(){
			if( remix_3.ended ){
			//Cuando todavia no se librean todas las canciones
				remix_3.pause();
				remix_4.pause();
				checking_status_pause();
				clearInterval(verificar_remix3);
			//Cuando ya se libero todas las canciones
				/*remix_3.pause();
				remix_4.play();
				checking_status_pause();
				clearInterval(verificar_remix3);
				contador_remix_4 = 1;
				verifying_completion_remix4();*/
			}
		}, 1000);
	}

	function verifying_completion_remix2(){
		var verificar_remix2 = setInterval(function(){
			if( remix_2.ended ){
			//Cuando todavia no se liberan todas las canciones
				remix_2.pause();
				remix_3.pause();
				checking_status_pause();
				clearInterval(verificar_remix2);
			//cuando ya se libero todas las canciones
				/*remix_2.pause();
				remix_3.play();
				checking_status_pause();
				clearInterval(verificar_remix2);
				contador_remix_3 = 1;
				verifying_completion_remix3();*/
			}
		}, 1000);
	}

	function verifying_completion_remix1(){
		var verificar_remix1 = setInterval(function(){
			if( remix_1.ended ){
			// Cuando todavia no se liberan todas las canciones
				/*remix_1.pause();
				remix_2.pause();
				checking_status_pause();
				clearInterval(verificar_remix1);*/
			//cuando ya se libero todas las canciones o quiere liberar la cancion2
				remix_1.pause();
				remix_2.play();
				checking_status_pause();
				clearInterval(verificar_remix1);
				contador_remix_2 = 1;
				verifying_completion_remix2();
			}
		}, 1000);
	}

	var contador_remix_1 = 0;
	icons_play_pause_1.addEventListener('click', function(){
		if( contador_remix_1 === 0 ){
			remix_1.play();
			this.classList.remove('icon-play');
			this.classList.add('icon-pause');
			remix_2.pause();
			remix_3.pause();
			remix_4.pause();
			remix_5.pause();
			remix_6.pause();
			remix_7.pause();
			contador_remix_1 = 1;
			checking_status_pause();
			verifying_completion_remix1();
		}else if( contador_remix_1 === 1 ){
			remix_1.pause();
			this.classList.remove('icon-pause');
			this.classList.add('icon-play');
			contador_remix_1 = 0;
		}
	});

	var contador_remix_2 = 0;
	icons_play_pause_2.addEventListener('click', function(){
		if( contador_remix_2 === 0 ){
			remix_2.play();
			this.classList.remove('icon-play');
			this.classList.add('icon-pause');
			remix_1.pause();
			remix_3.pause();
			remix_4.pause();
			remix_5.pause();
			remix_6.pause();
			remix_7.pause();
			contador_remix_2 = 1;
			checking_status_pause();
			verifying_completion_remix2();
		}else if( contador_remix_2 === 1 ){
			remix_2.pause();
			this.classList.remove('icon-pause');
			this.classList.add('icon-play');
			contador_remix_2 = 0;
		}
	});

	var contador_remix_3 = 0;
	icons_play_pause_3.addEventListener('click', function(){
		if( contador_remix_3 === 0 ){
			remix_3.play();
			this.classList.remove('icon-play');
			this.classList.add('icon-pause');
			remix_1.pause();
			remix_2.pause();
			remix_4.pause();
			remix_5.pause();
			remix_6.pause();
			remix_7.pause();
			contador_remix_3 = 1;
			checking_status_pause();
			verifying_completion_remix3();
		}else if( contador_remix_3 === 1 ){
			remix_3.pause();
			this.classList.remove('icon-pause');
			this.classList.add('icon-play');
			contador_remix_3 = 0;
		}
	});

	var contador_remix_4 = 0;
	icons_play_pause_4.addEventListener('click', function(){
		if( contador_remix_4 === 0 ){
			remix_4.play();
			this.classList.remove('icon-play');
			this.classList.add('icon-pause');
			remix_1.pause();
			remix_2.pause();
			remix_3.pause();
			remix_5.pause();
			remix_6.pause();
			remix_7.pause();
			contador_remix_4 = 1;
			checking_status_pause();
			verifying_completion_remix4();
		}else if( contador_remix_4 === 1 ){
			remix_4.pause();
			this.classList.remove('icon-pause');
			this.classList.add('icon-play');
			contador_remix_4 = 0;
		}
	});

	var contador_remix_5 = 0;
	icons_play_pause_5.addEventListener('click', function(){
		if( contador_remix_5 === 0 ){
			remix_5.play();
			this.classList.remove('icon-play');
			this.classList.add('icon-pause');
			remix_1.pause();
			remix_2.pause();
			remix_3.pause();
			remix_4.pause();
			remix_6.pause();
			remix_7.pause();
			contador_remix_5 = 1;
			checking_status_pause();
			verifying_completion_remix5();
		}else if( contador_remix_5 === 1 ){
			remix_5.pause();
			this.classList.remove('icon-pause');
			this.classList.add('icon-play');
			contador_remix_5 = 0;
		}
	});

	var contador_remix_6 = 0;
	icons_play_pause_6.addEventListener('click', function(){
		if( contador_remix_6 === 0 ){
			remix_6.play();
			this.classList.remove('icon-play');
			this.classList.add('icon-pause');
			remix_1.pause();
			remix_2.pause();
			remix_3.pause();
			remix_4.pause();
			remix_5.pause();
			remix_7.pause();
			contador_remix_6 = 1;
			checking_status_pause();
			verifying_completion_remix6();
		}else if( contador_remix_6 === 1 ){
			remix_6.pause();
			this.classList.remove('icon-pause');
			this.classList.add('icon-play');
			contador_remix_6 = 0;
		}
	});
	var contador_remix_7 = 0;
	icons_play_pause_7.addEventListener('click', function(){
		if( contador_remix_7 === 0 ){
			remix_7.play();
			this.classList.remove('icon-play');
			this.classList.add('icon-pause');
			remix_1.pause();
			remix_2.pause();
			remix_3.pause();
			remix_4.pause();
			remix_5.pause();
			remix_6.pause();
			contador_remix_7 = 1;
			checking_status_pause();
			verifying_completion_remix7();
		}else if( contador_remix_7 === 1 ){
			remix_7.pause();
			this.classList.remove('icon-pause');
			this.classList.add('icon-play');
			contador_remix_7 = 0;
		}
	});

	var icon_like_dislike_1 = document.querySelectorAll('.icon-like-dislike-1');
	var icon_like_dislike_2 = document.querySelectorAll('.icon-like-dislike-2');
	var icon_like_dislike_3 = document.querySelectorAll('.icon-like-dislike-3');
	var icon_like_dislike_4 = document.querySelectorAll('.icon-like-dislike-4');
	var icon_like_dislike_5 = document.querySelectorAll('.icon-like-dislike-5');
	var icon_like_dislike_6 = document.querySelectorAll('.icon-like-dislike-6');
	var icon_like_dislike_7 = document.querySelectorAll('.icon-like-dislike-7');

	icon_like_dislike_1[0].addEventListener('click', function(){
		this.classList.toggle('like-dislike-selected');
		icon_like_dislike_1[1].classList.remove('like-dislike-selected');
	});
	icon_like_dislike_1[1].addEventListener('click', function(){
		this.classList.toggle('like-dislike-selected');
		icon_like_dislike_1[0].classList.remove('like-dislike-selected');
	});
	icon_like_dislike_2[0].addEventListener('click', function(){
		this.classList.toggle('like-dislike-selected');
		icon_like_dislike_2[1].classList.remove('like-dislike-selected');
	});
	icon_like_dislike_2[1].addEventListener('click', function(){
		this.classList.toggle('like-dislike-selected');
		icon_like_dislike_2[0].classList.remove('like-dislike-selected');
	});
	icon_like_dislike_3[0].addEventListener('click', function(){
		this.classList.toggle('like-dislike-selected');
		icon_like_dislike_3[1].classList.remove('like-dislike-selected');
	});
	icon_like_dislike_3[1].addEventListener('click', function(){
		this.classList.toggle('like-dislike-selected');
		icon_like_dislike_3[0].classList.remove('like-dislike-selected');
	});
	icon_like_dislike_4[0].addEventListener('click', function(){
		this.classList.toggle('like-dislike-selected');
		icon_like_dislike_4[1].classList.remove('like-dislike-selected');
	});
	icon_like_dislike_4[1].addEventListener('click', function(){
		this.classList.toggle('like-dislike-selected');
		icon_like_dislike_4[0].classList.remove('like-dislike-selected');
	});
	icon_like_dislike_5[0].addEventListener('click', function(){
		this.classList.toggle('like-dislike-selected');
		icon_like_dislike_5[1].classList.remove('like-dislike-selected');
	});
	icon_like_dislike_5[1].addEventListener('click', function(){
		this.classList.toggle('like-dislike-selected');
		icon_like_dislike_5[0].classList.remove('like-dislike-selected');
	});
	icon_like_dislike_6[0].addEventListener('click', function(){
		this.classList.toggle('like-dislike-selected');
		icon_like_dislike_6[1].classList.remove('like-dislike-selected');
	});
	icon_like_dislike_6[1].addEventListener('click', function(){
		this.classList.toggle('like-dislike-selected');
		icon_like_dislike_6[0].classList.remove('like-dislike-selected');
	});
	icon_like_dislike_7[0].addEventListener('click', function(){
		this.classList.toggle('like-dislike-selected');
		icon_like_dislike_7[1].classList.remove('like-dislike-selected');
	});
	icon_like_dislike_7[1].addEventListener('click', function(){
		this.classList.toggle('like-dislike-selected');
		icon_like_dislike_7[0].classList.remove('like-dislike-selected');
	});


	// Cuando el usuario le da click al boton "Liberar"

	var button_liberate_song = document.querySelectorAll('.button-liberate-song');
	var locked_song = document.querySelectorAll('.locked-song');
	var guess = document.querySelectorAll('.guess');
	var first_letter_remix2 = document.querySelectorAll('.first-letter-remix2');
	var first_letter_remix3 = document.querySelectorAll('.first-letter-remix3');
	var first_letter_remix4 = document.querySelectorAll('.first-letter-remix4');
	var first_letter_remix5 = document.querySelectorAll('.first-letter-remix5');
	var first_letter_remix6 = document.querySelectorAll('.first-letter-remix6');
	var first_letter_remix7 = document.querySelectorAll('.first-letter-remix7');
	var button_remix2 = document.querySelector('.button-remix2');
	var button_remix3 = document.querySelector('.button-remix3');
	var button_remix4 = document.querySelector('.button-remix4');
	var button_remix5 = document.querySelector('.button-remix5');
	var button_remix6 = document.querySelector('.button-remix6');
	var button_remix7 = document.querySelector('.button-remix7');
	 
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
	button_liberate_song[6].addEventListener('click', function(){
		guess[6].style.display = 'block';
	});



	// Remix 2
	first_letter_remix2[0].addEventListener('click', function(){
		guess[1].style.display = 'none';
		button_liberate_song[1].style.display = 'none';
	});
	first_letter_remix2[1].addEventListener('click', function(){
		guess[1].style.display = 'none';
		locked_song[1].style.display = 'none';
		button_remix2.setAttribute('href', 'https://soundcloud.com/speakerofthehouse/alone-remix');
	});
	first_letter_remix2[2].addEventListener('click', function(){
		guess[1].style.display = 'none';
		button_liberate_song[1].style.display = 'none';
	});

	// Remix 3
	first_letter_remix3[0].addEventListener('click', function(){
		guess[2].style.display = 'none';
		locked_song[2].style.display = 'none';
		button_remix3.setAttribute('href', 'https://www.youtube.com/watch?v=pfM-jcHpf5g');
	});
	first_letter_remix3[1].addEventListener('click', function(){
		guess[2].style.display = 'none';
		button_liberate_song[2].style.display = 'none';
	});
	first_letter_remix3[2].addEventListener('click', function(){
		guess[2].style.display = 'none';
		button_liberate_song[2].style.display = 'none';
	});

	// Remix 4
	first_letter_remix4[0].addEventListener('click', function(){
		guess[3].style.display = 'none';
		locked_song[3].style.display = 'none';
		button_remix4.setAttribute('href', 'https://soundcloud.com/itsleonleon/tired-of-talking-young-bombs-remix-1');
	});
	first_letter_remix4[1].addEventListener('click', function(){
		guess[3].style.display = 'none';
		button_liberate_song[3].style.display = 'none';
	});
	first_letter_remix4[2].addEventListener('click', function(){
		guess[3].style.display = 'none';
		button_liberate_song[3].style.display = 'none';
	});

	// Remix 5
	first_letter_remix5[1].addEventListener('click', function(){
		guess[4].style.display = 'none';
		locked_song[4].style.display = 'none';
		button_remix5.setAttribute('href', 'https://www.youtube.com/watch?v=fR-dX84nQO4');
	});
	first_letter_remix5[0].addEventListener('click', function(){
		guess[4].style.display = 'none';
		button_liberate_song[4].style.display = 'none';
	});
	first_letter_remix5[2].addEventListener('click', function(){
		guess[4].style.display = 'none';
		button_liberate_song[4].style.display = 'none';
	});

	// Remix 6
	first_letter_remix6[2].addEventListener('click', function(){
		guess[5].style.display = 'none';
		locked_song[5].style.display = 'none';
		button_remix6.setAttribute('href', 'https://www.youtube.com/watch?v=wE5WpWz1oqI&feature=em-subs_digest-vrecs');
	});
	first_letter_remix6[0].addEventListener('click', function(){
		guess[5].style.display = 'none';
		button_liberate_song[5].style.display = 'none';
	});
	first_letter_remix6[1].addEventListener('click', function(){
		guess[5].style.display = 'none';
		button_liberate_song[5].style.display = 'none';
	});

	// Remix 7
	first_letter_remix7[1].addEventListener('click', function(){
		guess[6].style.display = 'none';
		locked_song[6].style.display = 'none';
		button_remix7.setAttribute('href', 'https://soundcloud.com/vindata/all-i-really-need-vindata-vip-mix');
	});
	first_letter_remix7[0].addEventListener('click', function(){
		guess[6].style.display = 'none';
		button_liberate_song[6].style.display = 'none';
	});
	first_letter_remix7[2].addEventListener('click', function(){
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
			button_remix2.setAttribute('href', 'https://soundcloud.com/speakerofthehouse/alone-remix');
		}
		if( i === 2 ){
			button_remix3.setAttribute('href', 'https://www.youtube.com/watch?v=pfM-jcHpf5g');
		}
		if( i === 3 ){
			button_remix4.setAttribute('href', 'https://soundcloud.com/itsleonleon/tired-of-talking-young-bombs-remix-1');
		}
		if( i === 4 ){
			button_remix5.setAttribute('href', 'https://www.youtube.com/watch?v=fR-dX84nQO4');
		}
		if( i === 5){
			button_remix6.setAttribute('href', 'https://www.youtube.com/watch?v=wE5WpWz1oqI&feature=em-subs_digest-vrecs');
		}
		if( i === 6 ){
			button_remix7.setAttribute('href', 'https://soundcloud.com/vindata/all-i-really-need-vindata-vip-mix');
		}
	}


});