
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4cWdjcmlqdXFwZmdvcGphaWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNTE3OTcsImV4cCI6MjAxNTcyNzc5N30.Jut5zRslmIf7rTfPTDIYI_rOn5Mfy_MBxCzWjJrVfsA",
  "baseUrl": "https://sxqgcrijuqpfgopjaiey.supabase.co",
  "secretKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4cWdjcmlqdXFwZmdvcGphaWV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDE1MTc5NywiZXhwIjoyMDE1NzI3Nzk3fQ.fTXkX3D89vu3ardvC0jjFenEndJIH9L-G-ayqXOemQk",
  "storageUrl": "https://sxqgcrijuqpfgopjaiey.supabase.co/storage/v1",
  "baseStorageUrl": "https://sxqgcrijuqpfgopjaiey.supabase.co/storage/v1/object/public/",
  "nuxt": {
    "buildId": "dev"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
