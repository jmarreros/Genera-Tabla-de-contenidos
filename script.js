(function($){

	//Comprobación para que se ejecute sólo al ver el detalle de una entrada
	if ( $('body.single').length ){

		//Plantillas para la tabla
		var tmplwrap ="<div id='tabla-contenido'>\n<p class='titulo'>Tabla de Contenido</p>\n{contenido}</div>";
		var tmpllink = "<p {clase}><i class='fa fa-caret-right'></i> <a href={link}>{texto}</a></p>\n";
		var cadena 	= "";
		
		//Preparamos el segundo nivel para que tenga una clase
		$('article h2').siblings('h3').addClass('n2');

		//Bucle, recorremos elementos para construir la tabla
		$('article h2, article h3').each(function(index, element){
	
			clase = $(this).hasClass('n2')?'class="n2"':'';
			texto 	 	= $(this).text();
			enlace_id	= texto.replace(/\d-\s|\?|¿/g,'');
			enlace_id 	= enlace_id.replace(/\s+/g, '_');
			$(this).attr('id',enlace_id);

			//Agregamos en una variable cadena
			cadena += tmpllink.replace('{link}',"'#" + enlace_id + "'");
			cadena  = cadena.replace('{texto}',texto);
			cadena 	= cadena.replace('{clase}',clase);

		});

		//Ejemplo de link adicional, descomentar

		//$('div.rel_posts h3').attr('id','relacionados');
		//cadena +="<p><i class='fa fa-link'></i> <a href='#relacionados'>- Artículos relacionados</a></p>\n";

		cadena = tmplwrap.replace('{contenido}',cadena);

		//Finalmente insertamos la cadena antes del primer elemento
		$(cadena).insertBefore( $('.entry-content h2').first() );
	}


})(jQuery);
