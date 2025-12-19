import type {Request, Response} from 'express';

import { UserService } from '../service/UserService.js';

// Controlador de Usuário
export class UserController{
    //cria um novo usuario
    async create(req:Request, res:Response){

        //pega as informações do body
        const {nome, email, password} = req.body;

        //instancia UserService
        const user = new UserService();

        //utiliza o create da instancia 
        const newUser = await user.create(nome,email,password);
        
        //retorna o novo usuario
        return res.status(201).json(newUser);
    }


    //pega todos os usuarios
    async getAll(req: Request, res: Response){
        const user = new UserService();

        const users = await user.getAll();

        return res.status(200).json(users);

    }

    //pega um usuario pelo id
    async get(req: Request, res: Response){
        const {id} = req.body;

        const user = new UserService();

        const findUser = await user.get(id);

        if (!findUser) {
            // Se você não enviar isso, a requisição trava!
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Se você não enviar isso, a requisição também trava!
        return res.status(200).json(findUser);
        }

    //atualiza um usuario
    async put(req: Request, res: Response){
        const {id,nome, email, password} = req.body;
        
        const user = new UserService();
        const updatedUser = await user.update(id,nome, email, password);
        
        if(!updatedUser){
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        
        return res.status(200).json(updatedUser);


    }


//deleta um usuario
    async delete(req: Request, res: Response){
        const {id} = req.body;

        const user = new UserService();

        const deletedUser = await user.delete(id);
        
        if(!deletedUser){
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        return res.status(200).json(deletedUser);
    }


}


