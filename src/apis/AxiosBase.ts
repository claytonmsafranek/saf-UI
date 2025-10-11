import axios from "axios";

const http = axios.create({
    baseURL: 'https://localhost:7069/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
})

// TODO: Add interceptors for request and response?

export default http;

