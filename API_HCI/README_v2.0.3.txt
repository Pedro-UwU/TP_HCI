API v2.0.3:
-----------
La siguiente actualizaci�n resuelve los siguientes problemas:
* La omisi�n de algunos resultados retornados por la ruta GET /routines luego de haber ingresado un promedio general debido a un problema de redondeo en su c�lculo.
* El error 400 "UNIQUE constraint failed: Cycle_Exercise..." generado por la ruta PUT /cycles/{cycleId}/exercises/{exerciseId} al actualizar los datos de un ejercicio asociado a un ciclo.

Y tambi�n incorpora la siguiente funcionalidad:
* La ruta GET /favourites retorna la informaci�n del usuario que la cre�.
* La ruta GET /exercises/{exerciseId}/images/{imageId} permite consultar las im�genes de un ejercicio creado por otro usuario.
* La ruta GET /exercises/{exerciseId}/videos/{videoId} permite consultar los videos de un ejercicio creado por otro usuario.

Instalaci�n de la actualizaci�n del API:
----------------------------------------
1) Descomprimir el archivo "API v2.0.3 Installer.zip" en el directorio de instalaci�n.
2) Reiniciar el API para que se aplique la actualizaci�n.
NOTA: Para corroborar la correcta instalaci�n de la actualizaci�n verificar que en el encabezado de p�gina de la documentaci�n del API se muestre la leyenda "Swagger Exercise 2.0.3".