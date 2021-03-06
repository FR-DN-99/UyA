# Usabilidad y Accesibilidad - Seminario DCU, Grupo 10

## Ejercicio 1: Indica en el documento del ejemplo de aplicación del DCU, qué actividades se corresponden con el diagrama de Métodos DCU y en qué fase del diseño se ubica.

### Introducción:

Con el objetivo de familiarizarnos con los distintos métodos de diseño centrado en el usuario, hemos extraído los métodos de DCU indicados en el caso de ejemplo del Campus Virtual. Hemos clasificado los métodos en función de la fase de la Metodología DCU y se ha desarrollado una breve descripción de cada método junto con una exposición de los resultados obtenidos. 

### Análisis:

**Entrevista:** Lo primero que debemos plantearnos a la hora de hacer un sistema es ¿Quién usará el sistema?, y es por ello que la primera técnica utilizada fue la entrevista. En ella se identificaron los primeros requisitos funcionales y no funcionales del proyecto. Para ello se indagó en los posibles contenidos del portal que deseaban poner a disposición del público objetivo y los servicios a través de los cuales podrían lograr una buena interacción de los usuarios con el sistema.

**Tormenta de ideas:** Con el propósito de buscar nuevos requisitos y ver las necesidades coincidentes con los directivos, se aplicó una tormenta de ideas con todos los especialistas y técnicos de la Biblioteca. La tormenta de ideas es un proceso creativo donde se proponen todas las ideas que se le ocurren a los integrantes de un grupo, con el objetivo de solucionar un problema concreto o aplicarlas en un proyecto o trabajo. Se encontraron 11 solicitudes coincidentes y 7 nuevas.

**Estudio de homólogos:** Es una técnica basada en comparaciones entre sitios con objetivos, contenidos y público similar. A partir de esta técnica se hace un conteo de las etiquetas coincidentes sintáctica y semánticamente, así como de la posición que ocupan dentro del sitio. Para el estudio se seleccionó una muestra de 56 bibliotecas universitarias. En los homólogos analizados 38 etiquetas se presentaban de forma independiente y 17 incluidas en otros términos.

### Diseño Conceptual

No se encontró ninguna técnica que pueda asociarse a esta categoría.

### Diseño de Prototipos

**Prototipado en papel:** Se utilizó la técnica de prototipado en papel donde se reflejaron las primeras vistas del sitio. Consiste en realizar los bocetos de todas las páginas o de las más importantes. El objetivo es ahorrar tiempo antes de aplicar la técnica de Prototipado Digital de Baja Fidelidad y discutir con el equipo del proyecto, los posibles cambios y sugerencias del proyecto. De esta forma se está aplicandola técnica de conversaciones guiadas, involucrando también al equipo de programadores, arquitectos, analistas y directivos. 

**Prototipado Digital:** Estos modelos son muy importantes para el equipo de trabajo (analistas, diseñadores y programadores), pues en ellos se refleja la realidad del proyecto aún sin implementar. El especialista de comunicación realiza los diseños respetando la organización de los contenidos del arquitecto. El desarrollador programa el sistema a partir de los requisitos definidos por los analistas y representados por el arquitecto. Con esta técnica se ahorra mucho tiempo en el desarrollo del proyecto y se trabaja en la usabilidad y accesibilidad final del sitio. Primero se realiza la estructura general que tendrá el portal. Luego se procede a representar los contenidos a partir de una plantilla ubicando primero los elementos repetitivos del sitio: todo lo que siempre está visible por cualquier vía que navegue el usuario. Posteriormente se organizan los contenidos de la página principal y de las páginas secundarias.

**Card Sorting:** El “Card Sorting” es una técnica de investigación que permite descubrir cómo la gente entiende y clasifica la información. Es muy útil si se emplea en diseño de un sitio web, conocer cómo los usuarios agrupan la información o descubrir cómo la gente entiende los conceptos e ideas. Además, el card sorting puede ser abierto, cerrado o híbrido.

En este proyecto se aplicó el card sorting cerrado. Para ello se seleccionó una muestra pequeña de 32 usuarios de la UCI, formada por especialistas de la biblioteca, desarrolladores de software, profesores y estudiantes. Se propusieron 9 categorías generales y 41 subcategorías agrupadas por cada grupo general. En el ejercicio aplicado, los participantes debían darle un orden consecutivo a las categorías generales y agrupar las subcategorías específicas dentro de cada grupo general.



### Evaluación

**Evaluación heurística:** Se emplea muchas veces para ahorrar el coste que supone hacer test de usuarios. Los análisis heurísticos consisten en que varios expertos analicen individualmente un diseño o página web y posteriormente realicen una puesta en común para señalar los problemas de usabilidad. En este caso, se realizó un análisis heurístico del sitio web a rediseñar, utilizando las heurísticas propuestas por Hassan-Montero y Martín-Fernández (2003), y arrojó 21 errores.

  


## Ejercicio 2: Aplicar el DCU para la realización de un prototipo de una aplicación web para la gestión y optimización del tiempo de estudio de un estudiante del Grado en Ingeniería Informática de la ULL.

El objetivo principal de la aplicación web es mejorar o evitar la mala gestión y optimización del tiempo de estudio del estudiantado, por lo que, en primera instancia hemos diseñado una fase de investigación aplicando el DCU para encontrar aquellos posibles inconvenientes que no permiten al estudiante lograr una buena gestión del tiempo.

### Fase de Análisis - Investigación:

#### Encuestas:

En primer lugar iniciamos un proceso de encuestas con el propósito de conseguir datos estadísticos generales sobre los estudiantes y su plan de estudios. Un total de 31 estudiantes respondieron a la encuesta. El resultado de las encuestas nos demuestran que gran cantidad de los encuestados coinciden en que cuando se les acumula gran cantidad de trabajo se debe a una mala gestión y planificación del tiempo por su parte en la mayoría de ocasiones. Por otra parte también apuntan a que en ocasiones el profesorado se excede en cuanto a la cantidad de trabajo que les asignan, bien por falta de coordinación entre docentes o por falta de tiempo para completar la materia en su totalidad.

A continuación se incluyen las preguntas redactadas para la encuesta junto con la información obtenida a partir de las respuestas de los usuarios:

1. **¿Cuánto tiempo dedicas al estudio en un día?**

    Aproximadamente el 75% de los encuestados dedican entre menos de una hora y 3 horas al día a sus estudios.

2. **¿Organizas o planificas tu tiempo de estudio, de ocio, etc.?**

    Cerca del 90% de los encuestados planifica sus estudios.

3. **¿Utilizas alguna técnica de planificación para estudiar? (Ej: Pomodoro, To do lists, etc.)**

    Tan sólo el 25% de los encuestados acostumbra a utilizar algún método de estudio para gestionar su tiempo.

4. **Si es así, ¿Qué técnica utilizas?**

    La mayoría de los encuestados que han respondido afirmativamente a la pregunta anterior acostumbran a utilizar listas de prioridad (To do lists) para gestionar el tiempo que van a dedicar a cada tarea.

5. **¿Utilizas alguna aplicación que te ayude a planificar tu tiempo? (Ej: Google Calendar, any.do, etc.)**

    Sólo un 16% de los encuestados utiliza alguna aplicación para planificar su tiempo.

6. **Si es así, ¿Qué aplicación utilizas?**

    De ese 16%, la mayoría acostumbra a utilizar Google Calendar.

7. **¿En qué criterio te basas para priorizar las tareas pendientes?**

    Prácticamente todos los encuestados coinciden en priorizar las tareas con fecha de entrega más próxima o mayor dificultad.

8. **¿Qué funcionalidades esperas encontrar en una aplicación que te permita gestionar y organizar tu tiempo?**

* Notificaciones discretas, alarmas, recordatorios de eventos…
* Widget
* To do lists
* Temporizador (pomodoro)
* Asistente de voz para recordatorios
* Gestión de horarios
* Facilidad de uso, intuitividad
* Estadísticas (Qué % de tiempo ha dedicado a cada tarea)

9. **¿Consideras que tus estudios conllevan una gran carga de trabajo?**

    Cerca del 80% de los encuestados afirman que sus estudios conllevan una gran carga de trabajo

10. **Si es así, ¿Por qué?**

    La mayoría coincide en que las materias son amplias y densas, y algunas tareas requieren una gran cantidad de tiempo y además variable.

11. **¿Qué cantidad de carga de trabajo consideras que tienen tus estudios?**

    En una escala entre 1 y 5, la mayoría de los encuestados consideran que sus estudios conllevan una carga de trabajo de entre 3 y 4.

12. **¿Sueles tener gran cantidad de trabajo acumulado?**

    El 75% de los encuestados afirma que sólo en algunas ocasiones sienten que tienen gran cantidad de trabajo acumulado.

13. **¿A qué crees que se debe?**

    Gran cantidad de los encuestados coinciden en que cuando se les acumula gran cantidad de trabajo se debe a una mala gestión y planificación del tiempo por su parte en la mayoría de ocasiones. Por otra parte también apuntan a que en ocasiones el profesorado se excede en cuanto a la cantidad de trabajo que les asignan, bien por falta de coordinación entre docentes o por falta de tiempo para completar la materia en su totalidad.

En conclusión, muy pocos usuarios acostumbran a planificar su tiempo de estudio y esto conlleva a una gran acumulación de trabajo que perjudica el rendimiento académico de los mismos.

Para ayudar a nuestros usuarios a gestionar el tiempo, algunos requisitos que debemos introducir en la aplicación podrían ser:

#### Entrevistas en profundidad:

Además de las encuestas hemos realizado una entrevista en profundidad a los miembros del grupo 11 con el propósito de obtener respuestas más detalladas sobre las necesidades e inquietudes de los usuarios. Las preguntas que han formado parte de la entrevista han sido las siguientes:

1. **¿Cómo suele organizar su tiempo de estudio?**

2. **¿Cuáles cree que son los principales factores negativos que le perjudican a la hora de estudiar?**

3. **Cuando tiene varias tareas pendientes, ¿cómo determina cuáles debe hacer primero?**

4. **A la hora de trabajar, ¿Suele alternar distintas tareas o prefiere finalizar la primera antes de empezar con la segunda?**

5. **¿Suele revisar su agenda con frecuencia? En caso de que la respuesta sea no, ¿De qué forma cree que podría mantener la agenda al día?** 

6. **¿Emplea alguna técnica de estudio (Pomodoro, To do lists…)? ¿Las considera beneficiosas para el desarrollo eficiente de tareas o por el contrario cree que no suponen ningún beneficio notable? ¿Por qué?**

7. **¿Mantiene un horario fijo de estudio? ¿Qué franja horaria suele dedicar al estudio y desarrollo de las actividades con mayor frecuencia?**

8. **¿Qué elementos considera más llamativos en una página o aplicación?** 

9. **En caso de poder acceder a una herramienta que pudiera ayudarle a organizar sus tareas, ¿Qué funciones cree que resultarían más útiles para ayudarle a completarlas todas en el tiempo establecido?**

10. **¿Cuál es su opinión sobre las aplicaciones actuales de agendas, calendarios y organización de tareas?¿Qué elementos de su diseño o forma de uso considera que no son de su agrado? ¿Qué cambiarías?**

Todos los integrantes del grupo 11 respondieron a las preguntas anteriores con detalle y sinceridad, y en base a sus respuestas hemos podido obtener las siguientes conclusiones, además de los posibles requisitos, listados a continuación:

A la hora de estructurar el tiempo de estudio, los distintos entrevistados han presentado formas distintas de asignar prioridad a las tareas. Podríamos definir los requisitos
* El usuario deberá poder indicar sus preferencias al sistema para organizar las actividades, pudiendo priorizar:
  * Ninguna, las tareas se asignan en orden aleatorio
  * Aquellas tareas con mayor dificultad (Parámetro definido por el usuario)
  * Aquellas tareas que se encuentren más próximas a su fecha de finalización.
  * Aquellas con mayor / menor duración estimada (Parámetro definido por el usuario).

A su vez, todos los entrevistados han coincidido en que su mayor problema a la hora de estudiar son las distracciones que suponen las redes sociales y demás páginas web, por lo que podríamos añadir:
* El sistema no contabilizará el tiempo dedicado a las horas de estudio mientras que alguna de las páginas o aplicaciones añadidas a una “lista negra” se encuentre activa en el dispositivo.
* Durante las horas asignadas a tiempo de estudio, el sistema notificará al usuario en caso de que alguna de las páginas o aplicaciones de la lista negra se encuentre activa en el dispositivo con el propósito de incitar al cierre de las mismas.

Respecto al orden de realización de las tareas, el 66% de los entrevistados prefieren realizar las tareas en orden secuencial, esperando a la finalización de una tarea para empezar la siguiente. Aún así, dentro de este porcentaje, se ha hablado de mezclar tareas en casos excepcionales. Por todo esto, sería conveniente añadir:
* El usuario deberá poder decidir de qué forma se organizan las tareas en su agenda:
  * Secuencial: Se organizan las tareas de tal forma que una segunda tarea no inicia hasta que no se haya finalizado la anterior (En caso de que exista una diferencia notoria entre la duración real y la duración estimada de la tarea se realizará una reestructuración automática de la agenda).
  * Mixta: Una sesión de trabajo para una segunda actividad comienza después de una sesión de trabajo para una primera actividad, independientemente de que en la sesión anterior se haya finalizado la tarea o no.
  * Híbrido: Similar al modelo secuencial, pero en cualquier momento de la sesión de trabajo el usuario puede interrumpir la actividad actual y dedicar el tiempo restante a otra actividad. El sistema realizará automáticamente todos los cambios necesarios.

Alguno de los entrevistados ha indicado que el uso que da a la agenda disminuye a medida que se desarrolla el curso académico. Por tanto, un requisito podría ser:
* El sistema deberá contar con un servicio de notificaciones cuyo formato variará dependiendo del dispositivo

Además, el entrevistado ha añadido que le resultaría más sencillo seguir usando la agenda si tuviera acceso a alguna herramienta que le ayude a mantenerla actualizada, por ello:
* El sistema deberá poder notificar periódicamente a los usuarios para recordarles que deben añadir las nuevas tareas a la agenda.
* El sistema deberá permitir crear grupos de trabajo que sigan la estructura de una clase, permitiendo a los usuarios ingresar con el rol de alumno o profesor (Aquel que creó el grupo o aquellos validados por el creador del grupo).
* Todas las tareas impuestas en un grupo de trabajo del que forme parte el usuario con el rol de alumno serán añadidas automáticamente a la agenda del usuario, y se ordenarán automáticamente siguiendo las preferencias del usuario.

Aunque los entrevistados parecen coincidir en que no siguen un horario fijo para la realización del trabajo, todos ellos afirman poseer una franja horaria en la que distribuyen su tiempo de estudio. En base a esta información podemos enunciar los siguientes requisitos:
* El usuario deberá poder introducir una franja horaria de trabajo para que el sistema pueda asignar el tiempo de trabajo de las tareas automáticamente.
* El usuario podrá retrasar o aplazar sesiones de trabajo. En tal caso, el sistema reorganizará automáticamente las sesiones de trabajo dentro de la franja horaria definida.
* El usuario debe poder ajustar manualmente las sesiones de trabajos asignadas de forma automática en la franja horaria de trabajo. 
* Si el usuario desea, de forma improvisada, dedicar tiempo a una actividad fuera de la sesión de trabajo asignada a dicha actividad, el sistema deberá poder generar una nueva sesión sobre la marcha. Todo el tiempo contabilizado en la sesión improvisada será restado a la duración de las sesiones ya asignadas, por lo que el sistema reorganizará automáticamente las sesiones de trabajo ya existentes.

En lo tocante al diseño de la aplicación, todos los entrevistados parecen coincidir en los siguientes puntos:
* El sistema debe contar con una interfaz limpia e intuitiva, que no sature al usuario con demasiadas opciones en pantalla.
* El sistema debe permitir al usuario acceder de forma sencilla a un apartado de ayuda que le permita orientarse a través de los distintos elementos y funcionalidades de la interfaz del sistema.
* El sistema debe poder mostrar al usuario estadísticas útiles relacionadas con la medición del desempeño del trabajo.
* Entre los elementos de la interfaz deberá constar un calendario de tareas, un bloque con información detallada de las tareas planificadas, un bloque que permita interactuar con los grupos de trabajo del usuario, y un acceso rápido a la configuración de la aplicación, que permitiría al usuario cambiar parámetros de configuración varios (Desde notificaciones hasta preferencias en la asignación de tareas).

#### Análisis comparativo

Uno de los métodos fundamentales de la fase de investigación es el análisis comparativo.
Consiste en la comparación de distintas aplicaciones web relacionadas con la gestión y organización del tiempo pudiendo de esta forma encontrar similitudes y diferencias entre ellas. 

En este caso hemos realizado un estudio sobre: **Google Calendar y Any.do**

* El menú lateral izquierdo de any.do se nota minimalista, este contiene 4 desplegables (diferentes eventos, atajos, grupos de actividades o tags) que facilitan la búsqueda y ordenación de las tareas. Por otro lado google calendar contiene dos menús laterales, en el izquierdo se encuentran las funciones de busqueda y ordenacion, parecidas a any.do, junto a un calendario en formato reducido mensual. En el menú derecho están ubicados los atajos a las aplicaciones de google (keep, task, maps) que favorecen al usuario a la hora de tomar notas o recordar alguna tarea.

* En cuanto a la ventana principal, donde se encuentra el calendario principal, podemos identificar pequeñas diferencias entre ambas webs. El calendario de any.do tiene un diseño minimalista que facilita la anotación y visualización de las diferentes actividades tanto semanales como mensuales. Sin embargo, en el caso de google calendar podemos incluir más opciones de ordenación y visualización (Anuales, cada 4 días, cada 3 semanas….).

* El diseño de any.do conforma un background sobre el cual se encuentran las ventanas que contienen las  funcionalidades de la web lo cual le da un aspecto minimalista mientras que google calendar tiene un diseño más sencillo e intuitivo que da prioridad a la funcionalidad en sí.

Como conclusión final a la comparativa observamos que ambas webs priorizan un diseño intuitivo y minimalista, en el caso de google calendar podemos encontrar mayor cantidad de funcionalidades relacionadas con el entorno google. Por lo tanto el diseño de la aplicación web deberá ser claro a la par que funcional, sin olvidar los requisitos relacionados con el usuario 


### Fase de Diseño Conceptual:

#### Personajes:

Para representar los perfiles de posibles usuarios de nuestro sistema hemos empleado el método _“Personajes”_ con el fin de especificar a las personas estereotipo para las cuales se desarrolla el sistema. Hemos definido 3 personas, tratando de abarcar todos los perfiles de usuarios podrían ser interesados en el sistema.

![Persona1](https://i.imgur.com/eaim1D3.jpg)

![Persona2](https://i.imgur.com/aRxxbCFh.jpg)

![Persona3](https://i.imgur.com/3W42gTIh.jpg) 


