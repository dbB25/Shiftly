# Shiftly

Shiftly es una app web gamificada de inglés profesional que prepara a trabajadores para laborar en el extranjero. Enseña vocabulario técnico, jerga laboral e modismos corporativos complejos mediante lecciones interactivas, ayudando a los usuarios a comunicarse con total confianza y evitar malentendidos en su día a día.

---

## 👥 Integrantes del Equipo

- **Luis David Balandrano Delgado** — *Líder Técnico*
- **Keydhy Marelo Villa Aldana** — *Analista*
- **Isis Dayane Arellano Carrillo** — *Frontend*
- **Brian Jael Juárez Rodrigues** — *Frontend*
- **Julio Cesar Licona Hernandez** — *Backend*
- **Vanesa Lugo Ramírez** — *Backend*

---

## 📋 Descripción de la Aplicación

Shiftly brinda una experiencia de aprendizaje personalizada y gamificada. Permite a los usuarios seleccionar un área profesional de interés, evaluar su nivel mediante un test de diagnóstico inicial[cite: 3], realizar ejercicios prácticos iterativos[cite: 4], consultar un glosario con biblioteca de repaso por sectores y dar seguimiento a su racha y progreso dentro de un panel de control dedicado[cite: 2].

---

## 🎯 Objetivo

Desarrollar una plataforma web responsiva, accesible e interactiva construida con Bootstrap[cite: 1, 2, 3, 4] que facilite la capacitación en inglés técnico y corporativo, preparando profesionalmente a los trabajadores para desenvolverse sin barreras idiomáticas en el ámbito laboral extranjero.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructuración de páginas y componentes semánticos[cite: 1, 2, 3, 4].
- **CSS3 (Custom Styles):** Reglas de diseño personalizadas, variables CSS (`--color-primario`, `--color-secundario`, etc.) y ajustes tipográficos.
- **Bootstrap v5.3.3:** Framework de CSS para diseño adaptable (*Mobile-First*) y maquetación mediante *Grid System*[cite: 1, 2, 3, 4].
- **Bootstrap Icons v1.11.3:** Colección de iconografía para la interfaz de usuario[cite: 1].
- **Google Fonts:** Tipografías integradas (`Poppins` y `Playfair Display`)[cite: 4].
- **JavaScript (ES6+):** Scripts de interacción para selección de áreas y componentes dinámicos de Bootstrap[cite: 1, 2, 3].

---

## ⭐ Características Principales

- **Selección de Área Profesional:** Selección de contexto técnico (Programación, Gastronomía, Turismo, Negocios e Inglés Cotidiano).
- **Módulo de Diagnóstico:** Evaluación interactiva con cálculo del nivel B1 (Intermedio) y recomendaciones de estudio[cite: 3].
- **Práctica Gamificada e Interactiva:** Ejercicios dinámicos con banco de palabras, opción múltiple, emparejamiento y llenado de frases[cite: 4].
- **Dashboard de Aprendizaje:** Seguimiento de racha diaria, porcentaje de progreso general y desglose por área (Vocabulario, Gramática, Comprensión, Conversación)[cite: 2].
- **Biblioteca y Glosario por Sectores:** Tarjetas de repaso con ocultamiento de traducción (`<details>`), ejemplos de uso y soporte de pronunciación.
- **Módulo de Autenticación Completo:** Vistas para Inicio de Sesión, Registro, Recuperación de Contraseña y Verificación por Código de 4 Dígitos.
- **Página de Contacto e Integración Geográfica:** Mapa interactivo de ubicación embebido mediante Google Maps[cite: 1].
- **Perfil de Usuario:** Gestión de datos personales y estado de la cuenta.

---

## 🧩 Componentes de Bootstrap Utilizados

- **Navbar:** Menús de navegación superiores fijos (*sticky-top*) y colapsables con menú hamburguesa[cite: 1, 2].
- **Grid System (Rows & Cols):** Sistema de maquetación adaptable mediante contenedores y columnas (`row`, `col-lg-*`, `col-md-*`)[cite: 1, 2, 3, 4].
- **Cards:** Tarjetas contenedoras para estadísticas[cite: 2], preguntas de diagnóstico[cite: 3], ejercicios[cite: 4], tarjetas de vocabulario, perfiles y formularios[cite: 1].
- **Progress Bars:** Barras para la representación visual del avance en lecciones y métricas del dashboard[cite: 2, 3, 4].
- **Badges:** Identificadores y etiquetas de estado (*"USUARIO ACTIVO"*, *"Sector Técnico"*, *"Medicina & Salud"*).
- **Buttons & Button Groups:** Botones de acción directos, filtros con píldoras (`rounded-pill`) y variantes de contorno (`btn-outline-*`)[cite: 1, 2, 3].
- **Forms & Input Groups:** Formularios con iconos integrados en los campos de texto[cite: 1].

---

## 📁 Estructura del Proyecto

```text
Shiftly/
│
├── img_log/
│   └── logotipo interfaz.svg     # Logotipo oficial de la aplicación
│
├── index.html                    # Selección de área de aprendizaje
├── login.html                    # Formulario de inicio de sesión
├── registro.html                 # Registro de usuarios
├── recuperar-password.html        # Recuperación de acceso
├── verificacion-correo.html      # Confirmación por código de 4 dígitos
├── dashboard.html                # Panel de control y estadísticas del usuario
├── diagnostico.html              # Test de diagnóstico de nivel
├── resultado.html                # Resultado del diagnóstico inicial
├── Ejercicios.html               # Módulo interactivo de lecciones y ejercicios
├── resultados-leccion.html       # Desglose de puntuación al finalizar una lección
├── glosario.html                 # Biblioteca y repaso técnico por sectores
├── servicios.html                # Tarjetas de vocabulario técnico detallado
├── perfil.html                   # Configuración del perfil de usuario
├── contacto.html                 # Formulario de contacto y mapa interactivo
│
├── style.css                     # Hoja de estilos global y variables del proyecto
├── Style de ejercicios.css      # Estilos dedicados al módulo de ejercicios
└── README.md                     # Documentación del proyecto
```

## Evidencias de interfaz

1.- Panel del Usuario

El panel del usuario permite acceder de manera rápida a las principales funcionalidades de la plataforma Shiftly. La interfaz cuenta con un menú de navegación, accesos directos a los módulos de aprendizaje y resultados, y un formulario para editar los datos del perfil del usuario.

2.- Test de Diagnóstico de Inglés

La interfaz del test de diagnóstico permite a los usuarios evaluar su nivel actual de inglés mediante una serie de preguntas de opción múltiple. A partir de las respuestas, la plataforma busca orientar al usuario hacia recursos y recomendaciones de aprendizaje adecuados a sus necesidades.


3.- Biblioteca y Repaso Técnico

La interfaz de Biblioteca y Repaso Técnico permite a los usuarios explorar y consultar vocabulario relacionado con diferentes sectores profesionales. Cuenta con un buscador para localizar conceptos o lecciones específicas, así como filtros por área de conocimiento.

4.- Panel de Ruta de Aprendizaje y Recomendaciones

Esta interfaz presenta un panel de seguimiento del aprendizaje que permite al usuario consultar la siguiente lección recomendada, revisar sus módulos recientes y visualizar su progreso dentro de la plataforma Shiftly.

5.- Resultados del Diagnóstico de Inglés

Esta interfaz presenta los resultados obtenidos al finalizar el test de diagnóstico de inglés. Muestra el nivel estimado del usuario, una descripción de sus conocimientos y una recomendación general para continuar mejorando sus habilidades lingüísticas.

6.- Resultados de la Lección

Esta interfaz permite al usuario consultar la puntuación obtenida después de completar una lección y acceder al detalle de sus resultados en diferentes sectores profesionales.

7.- Ruta de Aprendizaje

Esta interfaz permite al usuario visualizar las áreas profesionales disponibles para estudiar y llevar un seguimiento de su progreso dentro de la plataforma Shiftly. Cada área cuenta con una descripción de los contenidos que se pueden aprender y una opción para marcarla como completada.
