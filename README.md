# EstacionamentoServidor
Servidor de estacionamento para projeto da disciplina de Programação Concorrente em 2018.2

Este servidor oferece a seguinte API REST:

## Painel do estacionamento
#### /vaga/ - GET
> Retorna JSON contendo todas as vagas registradas no sistema.

#### /vaga/desocupada/numero/ - GET
> Retorna JSON contendo a quantidade de vagas desocupadas.

#### /vaga/desocupada/ - GET
> Retorna JSON contendo todas as vagas desocupadas.

#### /vaga/ocupada/ - GET
> Retorna JSON contendo todas as vagas ocupadas.

#### /vaga/tempo/{id} - GET
> Retorna JSON contendo o tempo, em minutos, que a vaga está ocupada.
> Retornando tempo 0 caso a vaga esteja desocupada.


## Sensor de vaga
#### /vaga/ - POST - nova vaga
> Cadastra uma nova vaga (a ser usado quando uma vaga for criada).

#### /vaga/{id}/ DELETE = Apaga
> Remove uma vaga existente (a ser usado quando uma vaga for desativada).

#### /vaga/ocupar/{id}
> Ocupa uma vaga.

#### /vaga/desocupar/{id}
> Desocupa uma vaga.

