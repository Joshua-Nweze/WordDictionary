// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            link: [
                {rel: 'stylesheet', href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"},
                {rel: 'preconnect', href: "https://fonts.googleapis.com"},
                {rel: 'preconnect', href: "https://fonts.gstatic.com"},
                {rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap"}
            ]
        }
    }
})