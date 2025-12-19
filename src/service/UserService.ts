import fs from 'fs/promises';
import path from 'path';

const filePath = path.resolve('src', 'data', 'users.json');

//função para ler o arquivo
async function arquivoFunc(){
  const arquivo = await fs.readFile(filePath, 'utf-8');

  const usuarios = JSON.parse(arquivo);
  return usuarios
}


export class UserService {
  async create(nome: string, email:string, password:string) {
    // 1. Ler o que já existe no arquivo
    const usuarios = await arquivoFunc()

    // 2. Criar o novo objeto de usuário
    const novoUsuario = { 
        id: Date.now(), // Gera um ID baseado no tempo atual
        nome, 
        email,
        password,
    };
    // Verificar se o email já existe
    if(usuarios.find((u: { email: string; }) => u.email === email)){
        throw new Error('Usuário com esse email já existe');
    }

    // 3. Adicionar no array e salvar
    usuarios.push(novoUsuario);
    await fs.writeFile(filePath, JSON.stringify(usuarios, null, 2));

    // 4. Retornar o novo usuário criado
    return novoUsuario;
  }


  //listar todos os usuários
  async getAll(){
    const usuarios = await arquivoFunc()
    return usuarios;
  }

  //buscar usuário por id
  async get(idProcurar: number){

    const usuarios = await arquivoFunc()

    if(!usuarios.find((u: { id: number; }) => u.id === idProcurar)){
        return null;
    }
    
    const usuarioEncontrado = usuarios.find((u: { id: number; }) => u.id === idProcurar);  
    return usuarioEncontrado;
  }

  //atualizar usuário
  async update(id: number,nome: string, email:string, password:string){
    let usuarios = await arquivoFunc()


    if(usuarios.find((u: { id: number; }) => u.id === id)){
      //remover o usuário antigo
      usuarios = usuarios.filter((u: { id: number; }) => u.id !== id)

        const User = {
        id: Date.now(),
        nome, 
        email,
        password
      }

      usuarios.push(User)

      return usuarios;
      
    }

    return null;
  }
  //deletar usuário
  async delete(id: number){
    let usuarios = await arquivoFunc()

    if(usuarios.find((u: { id: number; }) => u.id === id)){
      
      usuarios = usuarios.filter((u: { id: number; }) => u.id !== id)
      return usuarios;
    }
    
    return null;
  }


}