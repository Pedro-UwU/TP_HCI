API v2.0.3:
-----------
La siguiente actualización resuelve los siguientes problemas:
* La omisión de algunos resultados retornados por la ruta GET /routines luego de haber ingresado un promedio general debido a un problema de redondeo en su cálculo.
* El error 400 "UNIQUE constraint failed: Cycle_Exercise..." generado por la ruta PUT /cycles/{cycleId}/exercises/{exerciseId} al actualizar los datos de un ejercicio asociado a un ciclo.

Y también incorpora la siguiente funcionalidad:
* La ruta GET /favourites retorna la información del usuario que la creó.
* La ruta GET /exercises/{exerciseId}/images/{imageId} permite consultar las imágenes de un ejercicio creado por otro usuario.
* La ruta GET /exercises/{exerciseId}/videos/{videoId} permite consultar los videos de un ejercicio creado por otro usuario.

Instalación de la actualización del API:
----------------------------------------
1) Descomprimir el archivo "API v2.0.3 Installer.zip" en el directorio de instalación.
2) Reiniciar el API para que se aplique la actualización.
NOTA: Para corroborar la correcta instalación de la actualización verificar que en el encabezado de página de la documentación del API se muestre la leyenda "Swagger Exercise 2.0.3".