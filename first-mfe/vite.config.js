import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/App.jsx",
        "./BarChart": "./src/components/Charts/BarChart/BarChart.jsx",
        "./PieChart": "./src/components/Charts/PieChart/PieChart.jsx",
        "./LineChart": "./src/components/Charts/LineChart/LineChart.jsx",
        "./MapView": "./src/components/Maps/MapView.jsx",
        "./Dashboard": "./src/components/Dashboard/Dashboard.jsx",
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
