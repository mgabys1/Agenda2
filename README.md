# Agenda2
Es una aplicación móvil básica desarrollada con Ionic y Angular que permite a los usuarios agregar y listar tareas.
Este proyecto sirve como una cáscara funcional para una aplicación de gestión de tareas, 
proporcionando una estructura inicial que se puede ampliar con funcionalidades adicionales.

## Características

- Agregar nuevas tareas.
- Listar tareas existentes.
- Almacenamiento de datos en `localStorage` del navegador.

## Requisitos Previos

Antes de comenzar, asegúrese de tener instalado Node.js y npm. 
Puede descargar Node.js (que incluye npm) desde [nodejs.org](https://nodejs.org/).

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

src/app/home: Contiene los archivos relacionados con la página de inicio, donde están las tareas.
src/app/create-edit-task: Contiene los archivos relacionados con la página para crear y editar tareas.
src/app/app-routing.module.ts: Define las rutas de navegación de la aplicación.
src/app/app.module.ts: Configura los módulos principales de la aplicación.

home.page.ts
Este archivo contiene el componente HomePage, que es responsable de cargar y mostrar las tareas almacenadas en localStorage.
HomePage Component: Define el componente HomePage con su selector, plantilla y estilos.
ngOnInit: Se ejecuta una vez cuando el componente se inicializa. Llama a loadTasks para cargar las tareas almacenadas.
ionViewWillEnter: Se ejecuta cada vez que la vista está a punto de ser visible. También llama a loadTasks.
loadTasks: Intenta cargar las tareas desde localStorage. Si no hay datos, inicializa con un array vacío. 
Si ocurre un error durante la carga, captura el error y lo registra en la consola.

home.page.html
Este archivo define la estructura HTML de la página de inicio, mostrando un botón para agregar tareas y una lista de tareas existentes.
ion-header: Contiene la barra de herramientas y el título de la página.
ion-button: Un botón que navega a la página de creación/edición de tareas.
ion-list: Muestra una lista de tareas.
ngFor: Una directiva de Angular que itera sobre las tareas y muestra cada una como un ion-item.

create-edit-task.page.ts
Este archivo define el componente CreateEditTaskPage, que maneja la creación y edición de tareas.
CreateEditTaskPage Component: Define el componente con su selector, plantilla y estilos.
taskName: Una propiedad que almacena el nombre de la tarea que el usuario ingresa.
saveTask: Lee las tareas actuales de localStorage, añade la nueva tarea, y guarda las tareas actualizadas de vuelta en localStorage. 
Luego, navega de vuelta a la página de inicio.
Router: Utilizado para la navegación entre páginas.

create-edit-task.page.html
Este archivo define la estructura HTML para la página de creación/edición de tareas.
ion-header: Contiene la barra de herramientas y el título de la página.
ion-item: Un contenedor para los campos de entrada.
ion-label: Una etiqueta flotante para el campo de entrada.
ion-input: Un campo de entrada enlazado bidireccionalmente a la propiedad taskName usando ngModel.
ion-button: Un botón que llama a la función saveTask cuando se hace clic.

app-routing.module.ts
Este archivo define las rutas de navegación de la aplicación, mapeando URLs a componentes específicos.
Routes: Define una array de rutas.
La ruta home carga el módulo de la página de inicio.
La ruta por defecto redirige a home.
La ruta create-edit-task carga el módulo para la página de creación/edición de tareas.
RouterModule.forRoot: Configura el enrutador en el nivel raíz.
PreloadAllModules: Estrategia de precarga que carga todos los módulos de forma preventiva para mejorar el rendimiento.
NgModule: Configura el módulo de enrutamiento, importando y exportando RouterModule.

app.module.ts
Este archivo es el módulo raíz de la aplicación, configurando los módulos y proveedores principales.
NgModule: Define un módulo de Angular.
declarations: Declara los componentes pertenecientes a este módulo. Aquí, se declara AppComponent.
imports: Importa otros módulos necesarios para la aplicación.
BrowserModule: Proporciona servicios esenciales que son necesarios para ejecutar la aplicación en un navegador.
IonicModule.forRoot(): Configura el módulo Ionic.
AppRoutingModule: Importa las rutas configuradas.
FormsModule: Importa el módulo de formularios de Angular para soportar el enlace de datos en los formularios.
providers: Proporciona los servicios necesarios para la aplicación.
RouteReuseStrategy: Estrategia de reutilización de rutas personalizada para Ionic.
bootstrap: Especifica el componente raíz que Angular debe cargar al iniciar la aplicación. Aquí, se especifica AppComponent.
