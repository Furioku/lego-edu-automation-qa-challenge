export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER: "chrome" | "firefox" | "webkit",
            ENV: "live" | "prod" | "staging",
            LANGUAGE: "en" | "da" | "pl",
            BASEURL: string,
            HEAD: "true" | "false"
        }
    }
}