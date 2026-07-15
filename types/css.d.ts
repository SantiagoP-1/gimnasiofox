// Next.js resuelve los imports de CSS en tiempo de build (webpack/SWC), pero
// el servidor de TypeScript del editor a veces necesita esta declaración
// explícita para no marcar en rojo los imports "side-effect" de estilos,
// como los de @fontsource o ./globals.css. No afecta el build ni el runtime.
declare module "*.css";
