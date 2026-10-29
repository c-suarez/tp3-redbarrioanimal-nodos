# TP3 · Dos sentencias, dos soluciones — RedBarrioAnimal

**IFTS 29 · Desarrollo de Sistemas Web · Front End · 2026** · Grupo 18 · Equipo Nodos

* 🌐 **Landing publicada:** [tp3-redbarrioanimal-nodos.vercel.app](https://tp3-redbarrioanimal-nodos.vercel.app/)
* 📁 **Repositorio:** [github.com/c-suarez/tp3-redbarrioanimal-nodos](https://github.com/c-suarez/tp3-redbarrioanimal-nodos)

## Startup y bloque asignados
- **Startup:** RedBarrioAnimal — red de donaciones por redondeo de compras para refugios de animales (creada por estudiantes del IFTS 16).
- **Bloque:** Impacto e incidencias (S02-C). Logo original en `img/logo-redbarrioanimal.png`.
- **FRASE 1 · R5:** «Si una donación fue confirmada, el donante autorizó recibir novedades y hay una actualización de impacto del refugio beneficiario disponible y aún no enviada a ese donante, el sistema solicita enviar esa actualización.»
- **FRASE 2 · R6:** «Si se informa un cobro duplicado o una diferencia de importe, el sistema registra el reclamo y lo deriva a una persona, sin ejecutar otro cobro ni un reintegro automático.»

## Integrantes y aportes
| Integrante | GitHub | Aporte concreto |
|---|---|---|
| Omar Virili | [@ovirili](https://github.com) | Configuración base, estructura general y verificación de flujos |
| Cynthia Sotelo | [@csotelo](https://github.com) | Coordinación de instrucciones y prompts al agente de programación |
| Analía Fernández | [@afernandez](https://github.com) | Documentación del proceso agéntico y registro de evidencias de iteración |
| Jairo N. Calla Girón | [@jcalla](https://github.com) | Gestión de estados, pruebas en Vercel y estructura del repositorio |
| Cristian Suárez | [@csuarez](https://github.com) | Revisión de sentencias, lógica proposicional y diagramas SVG |

**Revisión entre integrantes y mejora (nivel Propone):**
Durante la revisión técnica entre Cristian Suárez y Omar Virili, se detectó que el flujo de R6 omitía visibilizar el bloqueo estricto de cobros o reintegros automáticos antes de derivar el caso a la persona responsable. A partir de esa observación, se instruyó al agente agregar un nodo explícito de advertencia técnica (`[BLOQUEO ESTRICTO: Sin otro cobro ni reintegro automático]`) conectado a la derivación humana, garantizando fidelidad total a la sentencia R6 y evitando ambigüedades operativas.

## Herramientas de IA
| Aplicación | Modelo (tal como figura) | Para qué se usó |
|---|---|---|
| Claude (claude.ai) | Claude 3.5 Sonnet | Análisis inicial de la consigna, interpretación de R5/R6 y generación del esqueleto base |
| OpenCode (VS Code) | Claude 3.5 Sonnet | Refactorización de código, diseño de diagramas SVG, implementación de Dark/Light mode y probadores interactivos |

**Construcción agéntica:** El 100% del código HTML, CSS y JS fue generado y corregido por agentes de programación bajo la dirección del grupo; ningún integrante editó código manualmente.

## Evidencia de iteración (nivel Propone)
1. **Instrucción inicial:** Se solicitó al agente rediseñar los desplegables técnicos y añadir iconos vectoriales SVG para indicar apertura y cierre en cada `<summary>`.
2. **Problema detectado al probar:** Al aplicar estilos generales de SVG para los diagramas (`width: 100%`), el icono chevron heredó esa regla y creció de forma desproporcionada, rompiendo el layout de la pantalla en desktop. Además, en modo claro el nodo de bloqueo de R6 tenía contraste insuficiente.
3. **Corrección pedida y resultado:** Se instruyó al agente aislar las reglas CSS de los diagramas mediante selectores específicos (`figure svg`), forzar dimensiones estrictas de 20x20px en el chevron del desplegable con `flex-shrink: 0`, y calibrar los contrastes de texto y fondo en Light Mode según pautas WCAG. El resultado fue una interfaz limpia, legible y sin desbordes.

## Decisiones de diseño sobre la lógica
- **R5 (Y):** Requiere que las 4 condiciones se cumplan en simultáneo. Si alguna es falsa, no se dispara el evento de envío.
- **R6 (O):** Basta con que se informa un cobro duplicado o una diferencia de importe para activar el protocolo de reclamo y derivación humana, inhibiendo taxativamente acciones automáticas de cobro/reintegro.
- **Supuestos del grupo (bordes punteados en SVG):** Se explicitan el manejo de colas de reintento en R5 y la recepción sin incidencias en R6.
- **Alcance Front End:** La landing no invoca APIs externas, no procesa transacciones financieras ni ejecuta modelos de IA en runtime; se trata de una presentación visual y simulación estática de los flujos agénticos.

## Estructura y cómo reproducirlo
```
index.html · css/style.css · js/main.js · img/logo-redbarrioanimal.png
```
HTML/CSS/JS sin dependencias (solo Google Fonts). Abrir `index.html` en el navegador, o publicar la carpeta como sitio estático en Vercel (sin build, directorio raíz).

## Comprobación de enlaces y funcionamiento
- [x] Repositorio abre desde una ventana sin sesión
- [x] Landing de Vercel abre sin sesión y muestra la versión final
- [x] Logo completo y legible · ambos diagramas legibles en desktop
- [x] Desplegables abren/cierran con clic y con teclado (Enter/Espacio)
- [x] Probador: caso que cumple y caso que no, en каждый flujo
