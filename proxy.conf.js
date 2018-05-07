const proxyAppRoutes = [
    "/api",
    "/downrightnow",
    "/robots.txt"
];
const PROXY_CONFIG = [
    {
        context: proxyAppRoutes,
        target: "http://localhost:5000",
        secure: false,
        changeOrigin: true,
        logLevel: "debug"
    }
];
module.exports = PROXY_CONFIG;
