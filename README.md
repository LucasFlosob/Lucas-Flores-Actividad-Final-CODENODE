# Lucas-Flores-Actividad-Final-CODENODE
Ultima Actividad CODENODE
# HabitMinimal - Tracker de Hábitos

Un gestor de hábitos simple que cumple con requisitos del proyecto. Permite crear hábitos y marcarlos como completados.

## Decisiones Técnicas
* **Next.js (App Router):** Elegido por rapidez y porque permite unificar frontend y backend en un solo proyecto.
* **Drizzle ORM + SQLite:** Se usó SQLite local (`dev.db`) para no perder tiempo configurando servicios en la nube (PostgreSQL/Supabase). Drizzle permite hacer consultas con pocas líneas de código.
* **Tailwind CSS:** Para el diseño, usando componentes limpios sin complicar el CSS.

## Cómo arrancarlo en local

1. Clonar el repositorio e instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar las migraciones de la base de datos:
   ```bash
   npx drizzle-kit push
   ```

3. Arrancar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir `http://localhost:3000`.

## Uso de IA 
*IAs utilizadas y para que:
* Geminy (Para este archivo y para información sobre Node.js y atajos de VSC
* BlackBox para codigo y correcciones posteriores
* **Le pedí que me generara la configuración inicial de `drizzle.config.ts` y el esquema básico de la tabla de hábitos en SQLite para ahorrar tiempo buscando la sintaxis exacta.
* **Le pedi que me ayudase a corregir este mismo documento para adptarlo a GIT
* **¿Qué tuve que corregir?:** La IA importó erróneamente componentes de una versión antigua de Next.js (`next/router` en lugar de `next/navigation`) para el redireccionamiento, lo cual rompía la app en el App Router. Lo corregí manualmente pasándolo a Server Actions simples.
