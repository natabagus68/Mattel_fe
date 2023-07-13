import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    host: "192.168.99.197"
  },
  plugins: [
    react(),
    // VitePWA({
    //     includeAssets: ["favicon.ico", "apple-touch-icon.png"],
    //     registerType: "auto",
    //     manifest: {
    //         name: "Mining Web Admin - General",
    //         short_name: "Web Admin - General",
    //         description: "Web Admin for Mining Apps - General",
    //         theme_color: "#ffffff",
    //         icons: [
    //             {
    //                 src: "android-chrome-192x192.png",
    //                 sizes: "192x192",
    //                 type: "image/png",
    //             },
    //             {
    //                 src: "android-chrome-384x384.png",
    //                 sizes: "384x384",
    //                 type: "any maskable",
    //             },
    //         ],
    //     },
    // }),
  ],
});
