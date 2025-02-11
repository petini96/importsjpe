export const getApiUrl = () => {
    return process.env.BACKEND_URL || 'http://localhost:8080';
}