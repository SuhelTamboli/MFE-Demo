import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "secondMFE",
      filename: "remoteEntry.js",
      exposes: {
        "./FormApp": "./src/App.jsx",
        "./SignUpForm": "./src/components/SignUp/SignUp.jsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    port: 5002, // 👈 custom port for remote-app
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
