export const getApiUrl = () => {
    console.log(process.env.BACKEND_URL)
    return `${process.env.BACKEND_URL}` || 'http://localhost:8080';
}