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

# Multiple ssh key

```
ssh-copy-id -i ~/.ssh/heroblack hackchan@192.168.18.22
ssh-keygen -f ~/.ssh/heroblack -t rsa -b 4096 -C “inge.fabio.rojas@gmail.com”

ssh-keygen -f ~/.ssh/hackchan -t rsa -b 4096 -C “fabiorojas7@gmail.com”

eval `ssh-agent -s`
ssh-add heroblack
ssh-add -l
```

```txt
 Host hackchan
 HostName github.com
 IdentitiesOnly yes
 IdentityFile ~/.ssh/hackchan
```
