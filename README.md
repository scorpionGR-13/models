*PROYECTO AULA 3D - SEGUNDO AÑO*

*Visualizador Interactivo de un Aula en 3D con React y @react-three/fiber*

Contenido
- #introducción
- #características-clave
- #tecnologías-utilizadas
- #requisitos-previos
- #instalación-y-configuración
- #ejecución-en-desarrollo
- #acceso-móvil-con-sensores
- #estructura-del-proyecto
- #componentes-principales
- #incorporación-de-modelos-3d
- #optimización-y-rendimiento
- #contribuciones-y-colaboración
- #licencia-y-contacto

Introducción
AULA 3D - SEGUNDO AÑO es un proyecto educativo que muestra la integración de React con Three.js mediante `@react-three/fiber` y `@react-three/drei`. El objetivo es renderizar un aula en 3D interactiva, permitiendo explorar la escena con controles de mouse y sensores móviles.

Características Clave
- Renderizado 3D de alta calidad con Three.js y `@react-three/fiber`
- Controles intuitivos para navegación y exploración
- Integración con sensores móviles para experiencia inmersiva
- Carga de modelos 3D personalizables desde `public/modelos`
- Configuración optimizada para desarrollo con Vite y pruebas móviles vía ngrok (HTTPS)
- Estructura modular para fácil mantenimiento y expansión
- Soporte para múltiples resoluciones y dispositivos
- Interfaz de usuario responsiva y accesible

Tecnologías Utilizadas
- React
- @react-three/fiber
- @react-three/drei
- Three.js
- Vite
- ngrok (para túnel HTTPS)
- DeviceOrientationControls (implementación personalizada)

Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn
- Navegador con WebGL habilitado
- (Opcional) Cuenta ngrok para pruebas móviles

Instalación y Configuración
1. Clona el repositorio:
git clone https://github.com/tu-usuario/AULA3D-REACT.git
cd AULA3D-REACT

2. Instala dependencias:
npm install
o
yarn install

Ejecución en Desarrollo
Iniciar Frontend con Vite
npm run dev

Accede a http://localhost:5173 en tu navegador.

Configuración de ngrok
1. Instala ngrok globalmente:
npm install -g ngrok

2. Configura tu authtoken:
ngrok config add-authtoken TU_AUTHTOKEN

3. Crea un túnel HTTPS:
ngrok http 5173

Abre la URL generada en tu dispositivo móvil.

Estructura del Proyecto
- public/
    - modelos/ (archivos .glb/.gltf)
- src/
    - main.jsx (punto de entrada)
    - App.jsx (escena principal)
    - ControlMovil.jsx (manejo de sensores)
    - controles/ (implementaciones personalizadas)
    - assets/ (recursos estáticos)

Componentes Principales
- App.jsx: Configura la escena 3D y controles
- ControlMovil.jsx: Maneja permisos y control por sensores
- DeviceOrientationControls.js: Implementación personalizada para móviles

Incorporación de Modelos 3D
1. Coloca modelos en `public/modelos`
2. Importa y carga en App.jsx:
import { useGLTF } from '@react-three/drei';
const { scene } = useGLTF('/modelos/aula.glb');

3. Añade a la escena:
<primitive object={scene} />

Optimización y Rendimiento
- Utiliza modelos 3D optimizados
- Implementa LOD (niveles de detalle)
- Carga asíncrona de assets
- Reduce resolución de texturas para móviles
- Desactiva efectos pesados en dispositivos limitados

Contribuciones y Colaboración
1. Abre un issue para discutir cambios
2. Crea una rama feature/nombre-descriptivo
3. Envía un Pull Request con descripción detallada
4. Asegúrate de seguir las reglas de lint

Licencia y Contacto
- Licencia: No se ha incluido un archivo LICENSE en el repositorio. Si deseas una licencia, la recomendación por defecto es MIT.
- Autor: https://github.com/scorpionGR-13
