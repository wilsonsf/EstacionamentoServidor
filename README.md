# EstacionamentoServidor
Servidor de estacionamento para projeto da disciplina de Programação Concorrente em 2018.2

# Como executar o servidor

Para rodar este servidor é preciso primeiro configurar duas coisas:
1. Node.JS
2. MongoDB

## Configurando o Node.JS
1. Faça o download do Node.JS em https://nodejs.org/en/download/ e instale.

2. Adicione o Node.JS no PATH para poder acessar o comando "npm" de qualquer diretório.

3. Use o comando ```nmp -v``` para checar se o Node.JS está instalado e inserido no PATH.

## Configurando o MongoDB
1. Faça o download do MongoDB em https://www.mongodb.com/download-center?initial=true#community e instale.

2. Crie a pasta ```C:/data/db``` (aparentemente essencial para o MongoDB funcionar).

3. Navegue até a pasta de instalação do MongoDB pela linha de comando, entre na pasta ```\Server\4.0\bin``` e digite o comando ```mongod```.

4. Seu servidor do MongoDB deve estar rodando agora, escutando na porta 27017.

## Iniciando o servidor
1. Navegue até a pasta deste projeto.

2. Execute o comando ```npm run start``` ou ```node server.js``` (o primero comando não funcionou num Mac).

3. O servidor REST deve ter sido iniciado escutando na porta 3000. Acesse ele pelo link http://localhost:3000 e boa sorte.

# Este servidor oferece a seguinte API REST:

## Painel do estacionamento
#### /vaga - GET
> Retorna JSON contendo todas as vagas registradas no sistema.

#### /vaga/{id} - GET
> Retorna JSON contendo a vaga com o id consultado. Lembrando que id das vagas é feito pela concatenação do andar e do número da vaga.
> Retorna a string "ERRO: Vaga inexistente" caso a vaga não exista.

#### /vaga/desocupada/quantidade/ - GET
> Retorna o número de vagas desocupadas.

#### /vaga/desocupada/ - GET
> Retorna JSON contendo todas as vagas desocupadas.

#### /vaga/ocupada/ - GET
> Retorna JSON contendo todas as vagas ocupadas.

#### /vaga/tempo/{id} - GET
> Retorna número de minutos desde que a vaga foi ocupada ou desocupada pela última vez.
> Retorna a string "ERRO: Vaga desocupada" caso a vaga esteja desocupada.

## Sensor de vaga
#### /vaga/ - POST
> Cadastra uma nova vaga (a ser usado quando uma vaga for criada). É necessário informar o andar e número da vaga para criar uma vaga.
> Retorna a string "ERRO: Vaga repetida" caso uma vaga com mesmo número e andar já exista.

#### /vaga/{id} - DELETE
> Remove uma vaga existente (a ser usado quando uma vaga for desativada).

#### /vaga/ocupar/{id} - POST
> Ocupa uma vaga. Não há verificação no servidor se a vaga já está ocupada.
> Retorna a string "ERRO: Vaga já ocupada" caso a vaga já esteja ocupada.

#### /vaga/desocupar/{id} - POST
> Desocupa uma vaga. Não há verificação no servidor se a vaga já está desocupada.
> Retorna a string "ERRO: Vaga já desocupada" caso a vaga já esteja desocupada.

