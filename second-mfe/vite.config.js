import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/App.jsx",
        "./SignUpForm": "./src/components/Auth/SignUp.jsx",
        "./SignInForm": "./src/components/Auth/SignIn.jsx",
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
