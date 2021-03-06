# RelojS

RelojS, es una librera de prueba, implementa una función que muestra la hora actual del servidor.

### Autor

Franz Ferrufino

### Versin estable

V.1.0.3

### Pre-requisitos

Deber tener instalado en su equipo **_node, npm y git_**.

### Ejemplo de implementacin directa

> Paso 1

Crear una carpeta que servir de repositorio para su proyecto ejemplo: **test**.

> Paso 2

Abriendo la lnea de comandos debe ubicarse sobre la ruta en la que se encuentra la carpeta creada en el paso anterior por ejemplo:

`C:\usuarios\develop\test`

> Paso 3

inicie el gestor de paquetes

`npm init`

_Complete los datos que considere necesarios_

> Paso 4

Instale los paquetes o dependencias necesarios para su proyecto, para utilizar la librera RelojS debe hacerlo con el siguiente comando:

`npm install relojs`

> Paso 5

Dentro de su archivo de inicio **_index.js_** puede utilizar el siguiente cdigo para validar su funcionalidad:

```
var express = require("express");
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

Ejecute en la consola el siguiente comando:

`node index.js`

> Paso 7

Abriendo una ventana nueva en su navegador direccione a la ruta del servidor de node por defecto:

`http://localhost:3000`

### Enlaces de referencia

GitHub: https://github.com/znarf1587/relojs.git

NPM: https://www.npmjs.com/package/relojs
