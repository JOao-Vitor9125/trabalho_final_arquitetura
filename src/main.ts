import express, { Request, Response } from 'express';
import {CreateRental} from './application/userCases/createRental/CreateRental';
import {container} from './infra/containers';

const alugador = container.get<CreateRental>(CreateRental);

const app = express();
const PORT= 3000;
app.use(express.json());


app.post('/alugar', async(req:Request, res:Response) =>{
    const {id_user, id_carro, dataDevolucao}=req.body;

    if(!id_user || !id_carro || !dataDevolucao){
        return res.status(400).json({erro: "Dados incompletos"});
    }
    const devolucao = new Date(dataDevolucao);

    try {
        await alugador.execute({id_user, id_carro, devolucao})
        return res.status(201).json({mensagem: "Aluguel registrado com sucesso"});

    } catch (erro) {
        if (erro instanceof Error) {

            res.status(400).json({erro: erro.message});
        }
    }
});

app.listen(PORT, () =>{
    console.log(`Servidor escutando em http://localhost:${PORT}`);
})