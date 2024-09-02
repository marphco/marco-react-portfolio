import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'redirect-plugin',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.headers.host === 'marcofr.com') {
            res.writeHead(301, { Location: 'https://www.marcofr.com' + req.url });
            res.end();
          } else {
            next();
          }
        });
      }
    }
  ],
  build: {
    outDir: 'dist'
  }
})
