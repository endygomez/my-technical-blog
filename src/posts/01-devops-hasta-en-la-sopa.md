---
title: 'DevOps hasta en la "Sopa" 🍲'
date: "2024-04-30"
keywords:
  [
    "DevOps",
    "Automatización de procesos",
    "Construcción y entrega de software",
    "PYMES",
    "Grandes Empresas",
    "Entrega continua (CI/CD)",
    "Eficiencia operativa",
    "Herramientas de DevOps",
    "Transformación digital",
  ]
---

Mi pareja y yo salimos al mercado al menos una vez a la semana, y una de las compras más comunes que hacemos son las carnes para cubrir las proteínas del almuerzo, las cuales solemos pedir por porciones, y listas para congelar.

Quien nos atiende en el abasto, se encarga amablemente de colocar las porciones sobre plástico. Agrega una porción, da una vuelta, agrega otra porción, y así sucesivamente las agrupa una encima de otra hasta que finalmente las almacena en una bolsa. Repite el ciclo por cada tipo de carne hasta que terminamos nuestro pedido.

Al llegar a la casa colocamos las carnes en el refrigerador, y como estamos un poco agotados de las compras, nuestro cerebro nos lleva a pensar que el asunto ya está resuelto y que todo estará listo para cuando llegue la hora de preparar el almuerzo cada día de la semana (como si fuera magia 🪄). Como bien sabes, falta precisamente la parte más importante y es esa _preparación_.

Aproximadamente a las 6:00 de la mañana del día siguiente, llega la hora de _preparar el almuerzo_. Abrimos el refrigerador y elegimos la carne para ese día. Pero empezamos a conseguirnos con **algunos detalles que nos restan velocidad**, como por ejemplo, que todas las porciones están juntas por la baja temperatura del refrigerador que termina creando una capa de hielo entre las porciones de carne, y que finalmente dan como resultado ver todo como una sola porción... ¿y qué sucede? pues que nos toca **descongelar todas las porciones** y seleccionar unicamente las que necesitamos, para proceder a condimentarlas y cocer al gusto.

**Descongelar todas las porciones nos hace volver a refrigerar las que no necesitamos para ese día 😬**

Repetimos el ciclo cada día, hasta que finalmente volvemos al mercado...

## ¿Qué oportunidades de mejora encontramos en este proceso? 💡

Mi futura esposa (Dev) y yo (Ops) nos dimos la tarea de mejorar en lo posible este proceso, con el objetivo de aumentar la velocidad y mantener la calidad con la que preparamos el almuerzo cada día...

## DevOps ♾️ ¿eres tú?

**"Su objetivo es hacer más rápido el ciclo de vida del desarrollo de software y proporcionar una entrega continua de alta calidad" [Wikipedia](https://es.wikipedia.org/wiki/DevOps)**

Si vemos el _almuerzo_ como un _producto de software_, el proceso de preparación es un _pipeline_. Así que nos pusimos manos a la obra a pensar un poco en como agilizar este proceso, y estas fueron algunas de las conclusiones que hemos conseguido:

- Siguiendo nuestro proceso de compra, al llegar del mercado ahora hacemos lo siguiente: **(Etapa de construcción o build)**:
  - Separamos cada porción de carne con la respectiva cantidad de proteína requerida para cada uno.
  - Condimentamos cada porción al gusto, para evitar dedicar este tiempo en su día de preparación.
  - Dividimos las porciones de carne que necesitamos cada día en bolsas ziploc.
  - Colocamos en el refrigerador (Hasta aquí se parece un **artefacto potencial a ser productivo en cualquier momento**, ¿o no?).
- Día de preparación **(Etapa de entrega/despliegue)**:
  - Abrimos el refrigerador y seleccionamos solo aquella bolsa ziploc que ya posee el número de porciones que necesitamos preparar, evitando descongelar porciones innecesarias.
  - Descongelamos las porciones requeridas.
  - Pasamos a su cocción al gusto, y listo.

### En conclusión

Todo proceso por más complejo o simple que parezca podría ser re-evaluado, o incluso evaluado por primera vez, ya que hay acciones que hacemos en nuestro día a día en _"automático"_ (ya sea porque así nos lo enseñaron o porque con el tiempo nososotros mismos creamos ciertos hábitos). Podríamos sorprendernos encontrando fugas de tiempo, tareas que aportan poco valor (_TOIL_), y otros hallazgos que desde la observación nos llevarían a transformar y mejorar continuamente cualquier proceso.

DevOps nos invita a estas reflexiones, en las que pasamos día a día buscando entregar software con calidad a nuestros clientes, pero realmente **¿Cuántas actividades de nuestras rutinas podríamos transformar para conseguir verdadero valor de nuestras acciones?**
