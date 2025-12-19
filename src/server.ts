import express from 'express';
import { userRoutes } from './router.js';

// Configuração do servidor Express
const app = express();
const PORT = 3000;
// Middleware para parsear JSON
app.use(express.json());


// Usando as rotas de usuário
app.use('/users', userRoutes);


// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

