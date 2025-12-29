/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_API_KEY: string;
    readonly VITE_APP_NAME: string;
    readonly VITE_APP_VERSION: string;
    readonly VITE_NAME_DEVICE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}