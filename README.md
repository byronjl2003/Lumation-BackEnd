
# Proyecto para aplicar a plaza de Web Developer

Este proyecto  consiste en una API Rest para la centralizacion de busquedas de servicios externos, unificar esa informacion y tranformarla en un standar para que la aplicacion cliente la pueda utilizar.

---
## Mas detalles de la aplicacion
La API solo pose una ruta llamada "search" que responde al verbo http GET con el resultado de la busqueda solicitada. Esta ruta no requiere de autenticacion para poder acceder a los recursos expuestos.
### Documentacion
Para la documentacion de la api se puede consultar la documentacion creada con la herramienta swagger. La documentacion estara disposible en el siguiente enlace, luego de iniciar la aplicacion http://localhost:3001/api-docs/
## Requerimientos

Para entornos de desarrollo solo se necesitara de Nodejs instalado en tu equipo, asi como tambien los siguientes paquetes:

* nodemon
* Express
* soap
* swagger-ui-express
* yamljs 

### Node
- #### Instalacion de Node en Windows

  Ir a la pagina oficial de Node [official Node.js website](https://nodejs.org/) y descargar el instalador.

  Tener en cuenta en configurar tus variables de entorno para acceder a `npm`

- #### Instalacion de Node en sistemas Unix/Linux

    Tienes la opcion de instalar linux atraves del gestor de paquetes nativo.
    Por ejemplo en Ubuntu solo bastara de los siguientes comandos:
      $ sudo apt install nodejs
      $ sudo apt install npm




## Instalacion y descarga de dependencias

    $ git clone https://github.com/byronjl2003/Lumation-BackEnd.git
    $ cd NOMBRE_PROYECTO
    $ npm install


## Para correr el proyecto

    $ npm run start

## Docker
Si en sus sistema cuenta con docker instalado la opcion ideal ses contruir la imagen con el dockerfile del repositorio y ejecutar el contenedor
