import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "firstMFE",
      filename: "remoteEntry.js",
      exposes: {
        "./WidgetApp": "./src/App.jsx",
        "./Widget": "./src/components/Widget/Widget.jsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    port: 5001, // 👈 custom port for remote-app
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
