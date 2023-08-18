import cors from 'cors';

const corsOptions = {
    origin: 'https://frontend-tokpedplay-defxzpf2xq-et.a.run.app',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;