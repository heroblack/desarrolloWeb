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
