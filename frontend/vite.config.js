import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://ticketmaster.ashyisland-d656732b.brazilsouth.azurecontainerapps.io",
});
