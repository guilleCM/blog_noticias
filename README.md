# blog_noticias
Proyecto final para Lenguaje de Marcas 1º DAW DUAL.  
Realizado por: Guillermo Cirer  
Profesor: Miguel Urbina

# Analisis y planificacion del proyecto
La idea era hacer una especie de blog de noticias, esto quiere decir, un muro similar al de facebook pero con noticias extraidas de periódicos. Por eso tiene un estilo bastante minimalista que solo presenta una imagen, un titulo, una breve descripcion y la fecha de la publicación a modo de poster encima de un muro.

# Planificación y diseño de la web
El primer diseño que dibujé presentaba un menu superior demasiado cargado, quería presentar demasiada información. Tenia una idea de dividir el menu en dos bloques. En el superior se veria el logo a la izquierda. En el centro mostraría el tiempo climático, la fecha y la ciudad y en la parte derecha el perfil del usuario. El bloque inferior del menu seria un navbar típico de bootstrap.
Las dificultades para colocar todo y que cuadrase bien en responsive me llevaron a eliminar el bloque superior y dejarlo solo con una imagen de fondo, la fecha y el nombre de la ciudad.  
![1st design](https://github.com/guilleCM/blog_noticias/blob/master/img/draw-design.jpg)  
Las noticias se presentarían a modo de rectángulos de los que el 25% de su longitud aproximadamente serían la imagen de la noticia. Pero luego con el uso de bootstrap me di cuenta de que la mayoria de los estilos tienden a tener los bordes redondeados y no ser tan rectos, asi que me descuadraba un poco estéticamente.  
![2nd design](https://github.com/guilleCM/blog_noticias/blob/master/img/draw-design-v2.jpg)  
En el primer diseño habia pensado que cuando hicieses un :hover sobre cada noticia esta se oscureciese para dar mayor interactividad. Pero el resultado no fué demasiado bueno puesto que mi paleta de colores es de blancos y negros, y no encontraba el color adecuado que casase con el efecto :hover. De modo que encontré otra solución, añadí un efecto de sombreado a la noticia lo que le da sensación de profundidad y cuadra mejor con el estilo sencillo que he seguido.  
![card hover](https://github.com/guilleCM/blog_noticias/blob/master/img/7card-design.jpg)  
En la versión móvil la publicidad he decidido que se quede fijada en el top y que las imágenes de las noticias pasen en su lugar a estar debajo del título porque sino se apelotonaba demasiado.
![card hover](https://github.com/guilleCM/blog_noticias/blob/master/img/vertical-design.jpg)  

# Todas las noticias e imágenes son propiedad de:
http://www.elmundo.es/  
http://www.elpais.com/  
http://hipertextual.com/  
