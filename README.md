# Drilling S2-M6

Este proyecto forma parte de un ejercicio práctico sobre el uso de npm y la instalación de paquetes en un entorno Node.js, en el marco del curso de **"Introducción al gestor de paquetes NPM"**. A continuación, se detalla la estructura y pasos seguidos durante el desarrollo.

## Ejercicio

### 1. Inicialización del Proyecto
- Se creó una nueva carpeta e inicializó un repositorio de Git con:
  ```bash
  git init
  ```
- Se agregó un archivo .gitignore que omite la carpeta node_modules para evitar subir dependencias innecesarias al repositorio.

### 2. Instalación de Paquetes npm

-	Se investigaron los paquetes más populares en npm y se instalaron cinco de los más utilizados.
- La instalación se realizó con el siguiente comando:
  ```npm install [nombre_paquete]```

### 3. Desinstalación de Paquetes

- Posteriormente, se desinstalaron dos de los paquetes instalados usando:
 ```npm uninstall [nombre_paquete]```

### 4. Archivos Modificados

- Al instalar o desinstalar paquetes, el archivo package-lock.json fue modificado, y los cambios se registraron en el repositorio.

## Ejercicio con Lodash

### Archivos Involucrados

- **datos.js:** Contiene dos arrays: autos y animales.
- **index.js:** Importa los arrays desde datos.js y utiliza los métodos uniq() y find() del paquete Lodash para realizar operaciones sobre estos datos.

### Instalación de Lodash

Para este ejercicio, se instaló el paquete lodash:

```npm install lodash@^4.17.21```

### Descripción del Código

- En datos.js se encuentran los arrays de datos:
```
let autos = ["mazda", "renault", "ferrari", "mazda", "jeep", "audi", "ferrari"];
let animales = [
  { animal: 'perro', tipo: 'mascota', nombre: 'elvis' },
  { animal: 'tigre', tipo: 'salvaje', nombre: 'hendrix' },
  { animal: 'tiburon', tipo: 'salvaje', nombre: 'ray charles' },
  { animal: 'gato', tipo: 'mascota', nombre: 'lady gaga' }
];

module.exports = { autos, animales };
```
-	En index.js se importan los arrays y se utilizan los métodos de Lodash:
  ```
const _ = require('lodash');
const { autos, animales } = require('./datos');

// Obtener un array de autos únicos
const autosUnicos = _.uniq(autos);
console.log('Autos únicos:', autosUnicos);

// Obtener los animales salvajes
const animalesSalvajes = animales.filter(animal => animal.tipo === 'salvaje');
console.log('Animales salvajes:', animalesSalvajes);
```
### Instrucciones para Ejecutar el Proyecto

	1.	Asegúrate de tener Node.js instalado.
	2.	Clona este repositorio:
 ```
git clone https://github.com/soyNelsonValenzuela/Drilling_S2-M6.git
```

	3.	Navega a la carpeta del proyecto:
 ```
cd Drilling_S2-M6
```

	4.	Instala las dependencias del proyecto:
 ```
 npm install
```
 
	5.	Ejecuta el archivo index.js para ver el resultado en consola:
 ```
 node index.js
```

### Resultado Esperado

- Un array con los autos únicos.
- Un listado de animales de tipo "salvaje"

### Notas

Este ejercicio permitió profundizar en el uso de npm, la instalación y desinstalación de paquetes, así como en la implementación de funciones de Lodash como uniq() y find().

## Autor

Este proyecto fue desarrollado por Nelson Valenzuela como parte del curso sobre el uso de npm y la implementación de paquetes en Node.js. Puedes encontrar más información sobre el autor y sus proyectos en su perfil de [GitHub](https://github.com/soyNelsonValenzuela).










