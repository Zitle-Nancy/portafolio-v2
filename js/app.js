(function() {
	page('/',index);
	page('/acerca-de-mi',sobreMi);
	page('/habilidades', habilidades);
	page('/mas-habilidades', masHabilidades);
	page('/proyecto-dos',proyectoDos);
	page('/proyecto-tres',proyectoTres);
	page('/proyectos',proyectos);
	page('/proyecto-cuatro',proyectoCuatro);
	page('/proyecto-cinco',proyectoCinco);
	page('/proyecto-seis',proyectoSeis);
	page({
		hashbang:true
	});

	$(document).keyup(tecla);

	function index() {
		$('nav').addClass('bt-menu-close');
		$('nav').removeClass('bt-menu-open');
		$('.seccion').addClass('hidden');
		$('#inicio').removeClass('hidden');
	};

	function sobreMi(){
		// esta linea te dara el color de la seccion
		var colorSobreMi = $('#fondo-sobre-mi').css('background-color');
		$('body').css('background',colorSobreMi);
		$('nav').addClass('bt-menu-close');
		$('nav').removeClass('bt-menu-open');
		$('.seccion').addClass('hidden');
		$('#fondo-sobre-mi').removeClass('hidden');
	}
	function habilidades(){
		$('nav').addClass('bt-menu-close');
		$('nav').removeClass('bt-menu-open');
		var colorHabilidades = $('#habilidades').css('background-color');
		$('body').css('background',colorHabilidades);
		$('.seccion').addClass('hidden');
		$('#habilidades').removeClass('hidden');
		$('#habilidades-graficas').load('habilidades.html #seccion-habilidades', function() {
			setTimeout(function () {
				var habilidades = [
					{
						nombre: "html",
						nivel: 1
					},
					{
						nombre: "css",
						nivel: 1
					},
					{
						nombre: "javascript",
						nivel: 1
					},
					{
						nombre: "php",
						nivel: 0
					},
					{
						nombre: "bootstrap",
						nivel: 1
					},
					{
						nombre: "materializecss",
						nivel: 1
					},
					{
						nombre: "jQuery",
						nivel: 1
					},
					{
						nombre: "react",
						nivel: 0
					}
				];
				leerPagina(habilidades);
			}, 200);
		});
	}

	function masHabilidades(){
		var colorMasHabilidades = $('#masHabilidades').css('background-color');
		$('body').css('background',colorMasHabilidades);
		$('.seccion').addClass('hidden');
		$('#masHabilidades').removeClass('hidden');
		$('#habilidades-graficas-dos').load('habilidades.html #seccion-habilidades-dos', function() {
			setTimeout(function(){
				var masHabilidades=[
					{
						nombre: 'git',
						nivel: 1
					},
					{
						nombre: 'mysql',
						nivel: 0
					},
					{
						nombre: 'sass',
						nivel: 0
					},
					{
						nombre: 'gulp',
						nivel: 0
					},
					{
						nombre: 'agile',
						nivel: 1
					}
				];
				leerPagina(masHabilidades);
			}, 200);
		});
	}

	function tecla(e) {
		var teclaPresionada = e.keyCode;
		// console.log(teclaPresionada);
		// console.log(direccion);
		if(teclaPresionada == 39){
			switch(location.hash){
				case "#!/proyectos":
					page.redirect('/proyecto-dos');
					break;
				case "#!/proyecto-dos":
					page.redirect('/proyecto-tres');
					break;
				case "#!/proyecto-tres":
					page.redirect('/proyecto-cuatro');
					break;
				case "#!/proyecto-cuatro":
					page.redirect('/proyecto-cinco');
					break;
				case "#!/proyecto-cinco":
					page.redirect('/proyecto-seis');
					break;
			}
			
		}else if(teclaPresionada == 37){
			switch(location.hash){
				case "#!/proyecto-seis":
					page.redirect('/proyecto-cinco');
					break;
				case "#!/proyecto-cinco":
					page.redirect('/proyecto-cuatro');
					break;
				case "#!/proyecto-cuatro":
					page.redirect('/proyecto-tres');
					break;
				case "#!/proyecto-tres":
					page.redirect('/proyecto-dos');
					break;
				case "#!/proyecto-dos":
					page.redirect('/proyectos');
					break;
			}
		}
	}

	function proyectos(){
		$('nav').addClass('bt-menu-close');
		$('nav').removeClass('bt-menu-open');
		var colorProyectos = $('.formato-proyectos').css('background-color');
		// console.log(colorProyectos);
		$('body').css('background', colorProyectos);
		$('.seccion').addClass('hidden');
		$('#proyectos').removeClass('hidden');
	}
	function proyectoDos(){
		var colorProyectos = $('.formato-proyectos').css('background-color');
		// console.log(colorProyectos);
		$('body').css('background', colorProyectos);
		$('.seccion').addClass('hidden');
		$('#proyecto-dos').removeClass('hidden');
	}
	function proyectoTres(){
		var colorProyectos = $('.formato-proyectos').css('background-color');
		$('body').css('background', colorProyectos);
		$('.seccion').addClass('hidden');
		$('#proyecto-tres').removeClass('hidden');
	}
	function proyectoCuatro(){
		var colorProyectos = $('.formato-proyectos').css('background-color');
		$('body').css('background', colorProyectos);
		$('.seccion').addClass('hidden');
		$('#proyecto-cuatro').removeClass('hidden');
	}
	function proyectoCinco(){
		var colorProyectos = $('.formato-proyectos').css('background-color');
		$('body').css('background', colorProyectos);
		$('.seccion').addClass('hidden');
		$('#proyecto-cinco').removeClass('hidden');
	}
	function proyectoSeis(){
		var colorProyectos = $('.formato-proyectos').css('background-color');
		$('body').css('background', colorProyectos);
		$('.seccion').addClass('hidden');
		$('#proyecto-seis').removeClass('hidden');
	}

	var splash = function () {
		var splashScreen = document.querySelector('.splash');
		var splashScreen = document.querySelector('.splash');
		var home = document.querySelector('.contenedor');
		splashScreen.style.display = 'none';
		home.classList.remove('hidden');
	}

	setTimeout(splash, 1500);
})();