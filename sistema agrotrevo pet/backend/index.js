const express = require('express');

const server = express();
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.listen(3001, () => {console.log('servidor rodando')});

server.post('/registrar-execucao-do-servico-do-pacote', (req/res) => {
    const codPacote = parseInt(req.body.codPacote);
    res.send(`Codigo do Pacote: ${codPacote}`);

    const tipoBanho = req.body.tipoBanho;
    res.send(`Tipo do Banho: ${tipoBanho}`);

    const servicoExtra = req.body.servicoExtra;
    res.send(`Serviço Extra: ${servicoExtra}`);

    const dataExecucao = req.body.dataExecucao;
    res.send(`Data de Execução: ${dataExecucao}`);

    const servicoTaxi = req.body.servicoTaxi;
    res.send(`Serviço de Taxi: ${servicoTaxi}`);
});

server.post('/contratar-pacotes', (req/res) => {
    const codTutor = parseInt(req.body.codTutor);
    res.send(`Codigo do Tutor: ${codTutor}`);

    const codAnimal = parseInt(req.body.codAnimal);
    res.send(`Tipo do Animal: ${codAnimal}`);

    const tipoPacote = req.body.tipoPacote;
    res.send(`Tipo do Pacote: ${tipoPacote}`);

    const numSessoesExecutadas = parseInt(req.body.numSessoesExecutadas);
    res.send(`Número de Sessões Executadas: ${numSessoesExecutadas}`);

    const numDiasParaExecucao = parseInt(req.body.numDiasParaExecucao);
    res.send(`Número de Dias para Execução: ${numDiasParaExecucao}`);

    const dataInicio = parseInt(req.body.dataInicio);
    res.send(`Data de Inicio: ${dataInicio}`);

    const dataFim = parseInt(req.body.dataFim);
    res.send(`Data de Fim: ${dataFim}`);

    const valor = parseInt(req.body.valor);
    res.send(`Valor: ${valor}`);

});

