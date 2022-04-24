# POKÉDEX
##### ESPECIFICACIONES DEL PROGRAMA 
#
#
| Carnet            | Nombre      | Auxiliar | Sección|
|-------------------|-------------|------------|--------|
|202101149| Mariano Roberto Rac Noguera | Javier Oswaldo Mirón Cifuentes|F|
#
##### FRONTEND 
###### 1. *TECNOLOGÍA UTILIZADA*
* Angular (uso de TypeScript) 
* HTML
* CSS ( implementaciones de bootstrap).
* NODE
###### 2. *SERVICIOS IMPLEMENTADOS*
* *PokeService*: El servicio utiliza los endpoints de la API para robtener los pokemones y se usan distintos criterios dependiendo la información que desea mostrarse utilizando consultas con GET.

* *TokenFormatService*: Toma el token almacenado en el local storage del navegador y lo formatea para ser usado en una consuta, para así, obtener datos del usuario.
###### 3. *MANUAL DE USO DE LA APLICACIÓN*
Se presenta el manual con las nociones básicas para poder utilizar la Pokédex 

1. *Ejecución* :
 Es necesario: 
* Una computadora y acceso a internet para poder descargar la aplicación. 
* Terminal CMD.
* El navegador preferencia. 
*Pasos:*
Después de la descarga del repositorio de Github:
* Ingresar a CMD preferiblemente desde la carpeta del archivo,  ejecutar la API.
* Dentro de las carpetas descargadas, usar el  comando "` npm run dev `"
* Esperar 
* En otra ventana de CMD, en las carpetas descargadas, usar el  comando  "` npm run ng serve `"
* Dirigirse al navegador y colocar la dirección "` localhost:4200`".

>>>>>>>>>>>>>>>>>>>>>>>>INSTALACIÓN<<<<<<<<<<<<<<<<<<
C:/POKE>cd server
C:/POKE>npm i node modules
C:/POKE>cd client
C:/POKE>npm i node modules
>>>>>>>>>>>>>>>>>>>>>>>>EJECUCIÓN<<<<<<<<<<<<<<<<<<<<<<<
C:/POKE>cd server <- Servidor
C:/POKE/server tsc
C:/POKE/server node build/index.js
C:/POKE/client ng serve



2. **Uso**: Se presentan las distintas vistas y ventanas. 
* *Login*: Se encuentran las opciones para poder iniciar sesión con los usuarios precargados.
![image](https://github.com/akamariano/IPC1-Proyecto2_202101149/blob/main/POKE/login.png)
* *Home: Se encuentran las opciones para poder filtrar los Pokemones, por tipo, no y nombre. También se encuentra un video con la intro de Pokemon, así también un botón para cerrar sesión.
* ![image](https://github.com/akamariano/IPC1-Proyecto2_202101149/blob/main/POKE/numero.png)
* Botón buscar*:Se debe ingresar el parámetro con el cual desea buscar a su pokemon 
* * ![image](https://github.com/akamariano/IPC1-Proyecto2_202101149/blob/main/POKE/nombre.png)
* ![image](https://github.com/akamariano/IPC1-Proyecto2_202101149/blob/main/POKE/todos.png)
##### BACKEND 
###### 1. *MODULOS UTILIZADOS*
* *Angular/cli* : Crear el proyecto de angular.
* *Cors*: Para agregar los encabezados necesario para la comunicacion del backend y frontend.
* *Express*: Crear el servidor necesario para ejecutar la API.
* *Morgan*: Muestra mensajes de servidor por consola.
* *HttpClientModule*: hace llamadas a una API REST y obtener resultados de la misma
* *FormsModule*:facilita la interacción con HTML. Gracias a él, se pueden agregar y usar varias directivas útiles
*  *ReactiveFormsModule*:crear un formulario a partir de una serie de sencillas opciones y permitir que cualquier persona lo responda por internet
###### 2. *REQUERIMIENTOS DEL SISTEMA (SERVIDOR)*
* Node Js LDS.
* 128 MB de RAM
* Procesador de un núcleo
###### 3. *PUERTO UTILIZADO*
* Puerto 3000
###### 4. *ENDPOINT*
* */pokeTodos*: Proporciona una lista de los pokemons registrados en la podekex .
* */users*: Proporciona una lista de losusuarios precargados.
* */pokeNombre/:nombre*: Busca por nombre de pokemon
*  */tipo*: Busca los pokemons del mismo tipo
*  */poke/:no*: Busca por número de pokemon
