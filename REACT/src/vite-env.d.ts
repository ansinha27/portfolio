/// <reference types="vite/client" />

// Type declarations for Vite environment variables
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly PROD: boolean
    readonly DEV: boolean
    readonly MODE: string
    readonly BASE_URL: string
    readonly SSR: boolean
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

// Type declaration for importing JSON files
declare module '@config' {
    interface ExperienceItem {
        title: string
        company: string
        location: string
        period: string
        description: string
        highlights: string[]
        technologies: string[]
    }

    interface EducationItem {
        degree: string
        institution: string
        location: string
        period: string
        description: string
        achievements: string[]
    }

    const config: {
        name: string
        email: string
        phone: string
        whatsapp: string
        github: string
        linkedin: string
        ports: {
            react: number
            chatbot: number
            rag: number
        }
        production?: {
            baseUrl: string
            chatbotUrl: string
            ragUrl: string
        }
        experience?: ExperienceItem[]
        education?: EducationItem[]
    }
    export default config
}
