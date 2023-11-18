
import type { CustomAppConfig } from 'nuxt/schema'
import type { Defu } from 'defu'


declare const inlineConfig = {
  "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4cWdjcmlqdXFwZmdvcGphaWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNTE3OTcsImV4cCI6MjAxNTcyNzc5N30.Jut5zRslmIf7rTfPTDIYI_rOn5Mfy_MBxCzWjJrVfsA",
  "baseUrl": "https://sxqgcrijuqpfgopjaiey.supabase.co",
  "secretKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4cWdjcmlqdXFwZmdvcGphaWV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDE1MTc5NywiZXhwIjoyMDE1NzI3Nzk3fQ.fTXkX3D89vu3ardvC0jjFenEndJIH9L-G-ayqXOemQk",
  "storageUrl": "https://sxqgcrijuqpfgopjaiey.supabase.co/storage/v1",
  "baseStorageUrl": "https://sxqgcrijuqpfgopjaiey.supabase.co/storage/v1/object/public/",
  "nuxt": {
    "buildId": "dev"
  }
}
type ResolvedAppConfig = Defu<typeof inlineConfig, []>
type IsAny<T> = 0 extends 1 & T ? true : false

type MergedAppConfig<Resolved extends Record<string, unknown>, Custom extends Record<string, unknown>> = {
  [K in keyof (Resolved & Custom)]: K extends keyof Custom
    ? unknown extends Custom[K]
      ? Resolved[K]
      : IsAny<Custom[K]> extends true
        ? Resolved[K]
        : Custom[K] extends Record<string, any>
            ? Resolved[K] extends Record<string, any>
              ? MergedAppConfig<Resolved[K], Custom[K]>
              : Exclude<Custom[K], undefined>
            : Exclude<Custom[K], undefined>
    : Resolved[K]
}

declare module 'nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
declare module '@nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
