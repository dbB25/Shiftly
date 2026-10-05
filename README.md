# Shiftly
Shiftly es una app web gamificada de inglés profesional que prepara a trabajadores para laborar en el extranjero. Enseña vocabulario técnico, jerga laboral e modismos corporativos complejos mediante lecciones interactivas, ayudando a los usuarios a comunicarse con total confianza y evitar malentendidos en su día a día.
# Shiftly

---

## 👥 Integrantes del Equipo

* **Luis David Balandrano Delgado** - *Líder Técnico*  
  *(Apartado para foto)*
* **Keydhy Marelo Villa Aldana** - *Analista*  
  *(Apartado para foto)*
* **Isis Dayane Arellano Carrillo** - *Frontend*  
  *(Apartado para foto)*
* **Brian Jael Juárez Rodrigues** - *Frontend*  
  *(Apartado para foto)*
* **Julio Cesar Licona Hernandez** - *Backend*  
  *(Apartado para foto)*
* **Vanesa Lugo Ramírez** - *Backend*  
  *(Apartado para foto)*

---

## 📝 Descripción de la Aplicación

Shiftly brinda una experiencia de aprendizaje personalizada y gamificada[cite: 9]. Permite a los usuarios seleccionar un área profesional de interés[cite: 6], evaluar su nivel mediante un test de diagnóstico inicial[cite: 3, 12], realizar ejercicios prácticos iterativos[cite: 4], consultar un glosario con biblioteca de repaso por sectores[cite: 5, 14] y dar seguimiento a su racha y progreso dentro de un panel de control dedicado[cite: 2].

---

## 🎯 Objetivo

Desarrollar una plataforma web responsiva, accesible e interactiva construida con Bootstrap[cite: 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 17] que facilite la capacitación en inglés técnico y corporativo[cite: 9, 11, 14], preparando profesionalmente a los trabajadores para desenvolverse sin barreras idiomáticas en el ámbito laboral extranjero[cite: 9].

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructuración de páginas y componentes semánticos[cite: 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 17].
* **CSS3 (Custom Styles):** Reglas de diseño personalizadas, variables CSS (`--color-primario`, `--color-secundario`, etc.) y ajustes tipográficos[cite: 15, 16].
* **Bootstrap v5.3.3:** Framework de CSS para diseño adaptable (*Mobile-First*) y maquetación mediante *Grid System*[cite: 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 17].
* **Bootstrap Icons v1.11.3:** Colección de iconografía para la interfaz de usuario[cite: 1, 7, 8, 10, 11, 13, 14, 17].
* **Google Fonts:** Tipografías integradas (`Poppins` y `Playfair Display`)[cite: 4, 15, 16].
* **JavaScript (ES6+):** Scripts de interacción para selección de áreas[cite: 6] y componentes dinámicos de Bootstrap[cite: 1, 2, 3, 5, 6, 10, 12, 17].

---

## ✨ Características Principales

* **Selección de Área Profesional:** Selección de contexto técnico (Programación, Gastronomía, Turismo, Negocios e Inglés Cotidiano)[cite: 6].
* **Módulo de Diagnóstico:** Evaluación interactiva con cálculo del nivel B1 (Intermedio) y recomendaciones de estudio[cite: 3, 12].
* **Práctica Gamificada e Interactiva:** Ejercicios dinámicos con banco de palabras, opción múltiple, emparejamiento y llenado de frases[cite: 4].
* **Dashboard de Aprendizaje:** Seguimiento de racha diaria, porcentaje de progreso general y desglose por área (Vocabulario, Gramática, Comprensión, Conversación)[cite: 2].
* **Biblioteca y Glosario por Sectores:** Tarjetas de repaso con ocultamiento de traducción (`<details>`), ejemplos de uso y soporte de pronunciación[cite: 5, 14].
* **Módulo de Autenticación Completo:** Vistas para Inicio de Sesión[cite: 7], Registro[cite: 11], Recuperación de Contraseña[cite: 10] y Verificación por Código de 4 Dígitos[cite: 17].
* **Página de Contacto e Integración Geográfica:** Mapa interactivo de ubicación embebido mediante Google Maps[cite: 1].
* **Perfil de Usuario:** Gestión de datos personales y estado de la cuenta[cite: 8].

---

## 🧩 Componentes de Bootstrap Utilizados

* **Navbar:** Menús de navegación superiores fijos (*sticky-top*) y colapsables con menú hamburguesa[cite: 1, 2, 5, 10, 14, 17].
* **Grid System (Rows & Cols):** Sistema de maquetación adaptable mediante contenedores y columnas (`row`, `col-lg-*`, `col-md-*`)[cite: 1, 2, 3, 4, 5, 8, 14].
* **Cards:** Tarjetas contenedoras para estadísticas[cite: 2], preguntas de diagnóstico[cite: 3], ejercicios[cite: 4], tarjetas de vocabulario[cite: 14], perfiles[cite: 8] y formularios[cite: 1, 10, 17].
* **Progress Bars:** Barras para la representación visual del avance en lecciones y métricas del dashboard[cite: 2, 3, 4, 12, 13].
* **Badges:** Identificadores y etiquetas de estado (*"USUARIO ACTIVO"*, *"Sector Técnico"*, *"Medicina & Salud"*)[cite: 5, 8, 14].
* **Buttons & Button Groups:** Botones de acción directos, filtros con píldoras (`rounded-pill`) y variantes de contorno (`btn-outline-*`)[cite: 1, 2, 3, 5, 12, 14, 17].
* **Forms & Input Groups:** Formularios con iconos integrados en los campos de texto[cite: 1, 5, 7, 8, 10, 11, 17].

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
