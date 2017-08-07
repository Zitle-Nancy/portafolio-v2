(function() {
	page('/',index);
	page('/acerca-de-mi',sobreMi);
	page('/habilidades', habilidades);
	page('/mas-habilidades', masHabilidades);
	page('/proyecto-dos',proyectoDos);
	page('/proyecto-tres',proyectoTres);
	page('/proyectos',proyectos);
	page({
		hashbang:true
	});

	function index() {
		$('#inicio').removeClass('hidden');
		$('#fondo-sobre-mi').addClass('hidden');
		$('#habilidades').addClass('hidden');
		$('#masHabilidades').addClass('hidden');
		$('#proyectos').addClass('hidden');
		$('#proyecto-dos').addClass('hidden');
		$('#proyecto-tres').addClass('hidden');
	};

	function sobreMi(){
		$('#inicio').addClass('hidden');
		$('#fondo-sobre-mi').removeClass('hidden');
		$('#habilidades').addClass('hidden');
		$('#masHabilidades').addClass('hidden');
		$('#proyectos').addClass('hidden');
		$('#proyecto-dos').addClass('hidden');
		$('#proyectoTres').addClass('hidden');
	}
	function habilidades(){
		$('#habilidades').removeClass('hidden');
		$('#fondo-sobre-mi').addClass('hidden');
		$('#masHabilidades').addClass('hidden');
		$('#proyecto-dos').addClass('hidden');
		$('#proyecto-tres').addClass('hidden');
		$('#proyectos').addClass('hidden');
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
			}, 1000);
		});
	}

	function masHabilidades(){
		$('#masHabilidades').removeClass('hidden');
		$('#habilidades').addClass('hidden');
		$('#proyecto-dos').addClass('hidden');
		$('#proyecto-tres').addClass('hidden');
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
			}, 1000);
		});

	}
	function proyectos(){
		$('#proyectos').removeClass('hidden');
		$('#habilidades').addClass('hidden');
		$('#proyecto-dos').addClass('hidden');
		$('#proyecto-tres').addClass('hidden');
	}
	function proyectoDos(){
		$('#proyecto-dos').removeClass('hidden');
		$('#proyectos').addClass('hidden');
		$('#habilidades').addClass('hidden');
		$('#index').addClass('hidden');
		$('#proyecto-tres').addClass('hidden');
	}
	function proyectoTres(){
		$('#proyecto-tres').removeClass('hidden');
		$('#proyecto-dos').addClass('hidden');
		$('#proyectos').addClass('hidden');
		$('#habilidades').addClass('hidden');
		$('#index').addClass('hidden');
	}
	var cargarPagina = function () {
		$('#siguiente').click(proyectoDos);
		$('#siguiente-tres').click(proyectoTres);
		$('#regresar-uno').click(proyectos);
		$('#regresar-dos').click(proyectoDos);
		
	}

	var splash = function () {
		var splashScreen = document.querySelector('.splash');
		var splashScreen = document.querySelector('.splash');
		var home = document.querySelector('.contenedor');
		splashScreen.style.display = 'none';
		home.classList.remove('hidden');
	}

	// setTimeout(splash, 1);
	$(document).ready(cargarPagina);
})();