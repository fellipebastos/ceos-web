# Cèos Controle de Migrations

# Definição

Este README.md documenta os comando necessários para iniciar o Céos Web, aplicação criada para o [Megahack](https://www.megahack.com.br).

É recomendado, primeiramente, seguir as instruções dos repositórios com a estrutura do backend:

- [Repositório do Servidor/Base de Dados](https://github.com/ErickGledson/ceos-platform)
- [Repositório dos Seeders e Migrations](https://github.com/vlamirsanto/ceos-migrations)

# Tecnologias

- Node.js
- React JS

# Ambiente

Essa aplicação pode rodar tanto no docker como diretamente na máquina local.

## Com a Máquina Local

Instalar os pacotes necessários

```sh
$ yarn
```

Iniciar o servidor

```sh
$ yarn start
```

## Com o Docker

Fazer o build

```sh
$ docker-compose build
```

Iniciar o container

```sh
$ docker-compose up [-d]
```
Caso deseje fazer o build no modo produção

```sh
$ docker-compose build --build-arg app_env=production
```
