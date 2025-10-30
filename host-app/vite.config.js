import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        // dashboard: "http://localhost:5001/assets/remoteEntry.js",
        // auth: "http://localhost:5002/assets/remoteEntry.js",
        dashboard:
          "https://mfe-widget-with-react.vercel.app/assets/remoteEntry.js",
        auth: "https://mfe-form-with-react.vercel.app/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    port: 5000, // 👈 custom port for host
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
