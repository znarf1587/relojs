# relojs

RelojS es una libreria de prueba que implementa una funcion que muestra la hora actual del servidor.

### Version estable

V.1.0.3

### Pre-requisitos

Debera tener instaldo en su equipo **_node, npm y git_**

### Ejemplo de implementacion directa

> Paso 1

Crar una carpeta que servira de repositorio para su proyecto

> Paso 2

Abriendo la linea de comandos debe ubicarse sobre la ruta en la que se encuentra la carpeta creada en el paso anterior **por ejemplo:**

`C:\usuarios\develop\test`

> Paso 3

inicie el gestor de paquetes

`npm init`

Complete los datos que concidere necesarios

> Paso 4

Instale los paquetes o dependencias necesarios para su proyecto, para utilizar la libreria RelojS debe hacerlo con el siguiente comando:

`npm install relojs`

> Paso 5

Dentro de su archivo inicial index.js puede utilizar el siguiente codigo para validar su funcionalidad:

```var express = require("express");
var app = express();
var relojs = require("relojs");

app.get("/", function(req, res) {
res.send(relojs.myTimer());
});

app.listen(3000, function() {
console.log("Example app listening on port 3000!");
});
```

> Paso 6

Abriendo una ventana nueva en su navador direccione a la ruta sel servidor de Node por defecto:

`http://localhost:3000`

### Enlaces de referencia

GitHub: https://github.com/znarf1587/relojs.git
NPM: https://www.npmjs.com/package/relojs
