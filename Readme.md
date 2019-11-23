# Desarrollo Web

## Html

### Dom

DOM es el acrónimo de Document Object Model o Modelo de documento, y es la manera en que se representa el contenido del documento, de manera similar a un árbol de nodos.

A continuación, un ejemplo sencillo de la estructura del DOM:

```html
<html>
  <body>
    <h1>Desarrollo web</h1>
  </body>
</html>
```

### Etiquetas

[etiquetas](https://ibb.co/kBbtNnD)

```html
<!--
Etiquetas
Las etiquetas son la representación básica de la información en un documento html. Sirven para crear y organizar el contenido.
La sintaxis general de una etiqueta es:-->

<nombre>contenido</nombre>
<!-- Hay ciertas etiquetas que tienen una sintaxis diferente, ya que se cierran en sí mismas; es decir, no tienen etiqueta de cierre: -->

<nombre />
Algunas de las etiquetas más conocidas y usadas son:

<!-- Etiquetas de cabecera (head):

doctype: indica al navegador el tipo de documento que se está mostrando.
html: es la etiqueta que envuelve todo el documento
head: es la cabecera del documento y contiene sub etiquetas que describen al documento o incluyen recursos adicionales.
Etiquetas del cuerpo del documento (body):

article: diferencia partes del contenido que pueden vivir por sí mismas.
nav: para hacer menús de navegación.
aside: contenido menos relevante, como publicidad, etc.
section: sirve para diferenciar las secciones principales del contenido.
header: cabecera del documento.
footer: pie de página del documento.
h1 - h6: títulos de nuestro sitio web.
table: tablas de contenidos, similar a la estructura de las hojas de calculo.
ul y ol: listas de items.
div: cualquier división para organizar el contenido. -->
```

### Estructura web

El proyecto que desarrollaremos se trata de un Portafolio Personal, incluirá una cabecera, navegación, un hero (área visual con información destacada) un área de proyectos y otra para eventos, y finalmente un pié de página con un formulario de contacto y enlaces a redes sociales.

El archivo index.html es el archivo que el navegador abre por defecto al acceder a un directorio en un servidor web.

La estructura básica de un archivo html es la siguiente:

```html
<html>
  <head>
    <title> Título de la página title>
  head>
  <body>
    <header> Cabecera del contenido header>
    <section> Sección principal section>
    <section> Otra sección section>
    <footer> Pié de página del documento footer>
  body>
html>
```

las etiquetas a usar:

h1 a h6: son etiquetas para indicar títulos con un estilo que destaca del resto.
article: es la parte de nuestro contenido que puede vivir por sí mismo. Pueden haber tantos artícle como proyectos o eventos tenga nuestro portafolio.
p: define el texto de un párrafo.
small: aplica una apariencia de texto reducido en tamaño.
strong: aplica al texto un formato de negritas.
a: corresponde a un ancla o enlace a una url interna o externa del documento.
img: con esta etiqueta podemos enlazar imágenes en el documento.
figure: le da un contexto semántico a las imágenes.

### Formularios

Los Formularios en html son unidades de información que nos permiten recolectar información para enviarlos al propietario del website o a un servicio externo. Esta formado por dos partes o contextos: una parte donde se hace el ingreso y modelación de esos datos (en el frontend), y otra parte que se encarga de enviar, procesar y almacenar esos datos (en el backend).

Los formularios se crean con la etiqueta form. El atributo principal de un formulario es action, ya que contiene la ruta a la que serán enviados los datos recolectados.

Hay diversos elementos html que permiten la captura o recolección de datos, aunque generalmente se usan los elementos creados con la etiqueta input. Los inputs también sirven para crear botones, aunque existe una etiqueta especial para ésto llamada button… El atributo principal de los inputs es type, que indica el tipo de comportamiento o dato que se espera recibir.

Los elementos creados con la etiqueta label muestran un texto que se puede asociar con un input para darle mayor significado al campo, principalmente cuando no se usa el atributo placeholder.

# Multiple ssh key

```bash
ssh-copy-id -i ~/.ssh/heroblack hackchan@192.168.18.22
ssh-keygen -f ~/.ssh/heroblack -t rsa -b 4096 -C “inge.fabio.rojas@gmail.com”

ssh-keygen -f ~/.ssh/hackchan -t rsa -b 4096 -C “fabiorojas7@gmail.com”

eval `ssh-agent -s`
#adiciona una entrada de ssh-agent
ssh-add heroblack
ssh-add ~/.ssh/hackchan
#lista una entrada de ssh-agent
ssh-add -l
#elimina todas las entradas de ssh-agent
ssh-add -D
#clonando repositorios
git clone git@heroblack:heroblack/repo_name.git
git clone git@hackchan:hackchan/repo_name.git

#local repo
git remote set-url origin git@hackchan:hackchan/repo_name.git
#remoto
git remote add origin git@hackchan:hackchan/repo_name.git
```

```
 Host hackchan
 HostName github.com
 IdentityFile ~/.ssh/hackchan
 User hackchan
 IdentitiesOnly yes

 Host heroblack
 HostName github.com
 IdentityFile ~/.ssh/heroblack
 User heroblack
 IdentitiesOnly yes

```

# Emmet

```html
ul>li*3>a{menu $}
```

# vscode atajos

```bash
#1. Copiar linea
#Windows y Mac:
Shift Alt Down y Shift Alt Up
#Linux:
Ctrl Shift Alt Down y Ctrl Shift Alt Up

#2. mover linea
Alt Down y Alt Up

#3.Comentariar y descomentariar codigo
Ctrl+K y Ctrl+C o Ctrl+U

#4.Quitar espacios y tabuladores del final
Ctrl+E, CTRL+º
Ctrl+E, S
```

# compresor de imagenes

[tinypng](https://tinypng.com/)
