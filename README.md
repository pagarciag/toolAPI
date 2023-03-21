# toolAPI
Basic API intended to be used as a development tool.
La arquitectura de esta API es tan básica que aún no se puede definir un modelo al que siga específicamente. Empezando solo como un servicio dummie para cuando sea necesaria en algún desarrollo, apuntando a llegar a implementar más layers como services y models
para lograr una herramienta más completa. Se busca siempre seguir una arquitectura limpia.
## Instalación y configuración
* NodeJs 14.18.0
* npm 6.14.15

´´´
npm i
´´´
Para entrar al modo de desarrollo:
´´´
npm run dev
´´´
## Directorio de src
- [controllers](#id1)
- [middleware](#id2)
- [routes](#id3)
## controllers <a name="id1"></a>
En este folder se añaden archivos que servirán para responder las solicitudes del cliente. Es decir las funciones que responderan las
peticiones GET, POST, PUT, DELETE, etc. 
## middlware <a name="id2"></a>
En este folder actualmente solo se encuentran middlewares relacionados con JWT.

## routes <a name="id3"></a>
Aquí se dictan las rutas y conexiones entre: petición, middlewares y controladores. Lo ideal es que exista un archivo de rutas por cada archivo de controladores y sean referenciadas hacia el archivo index.