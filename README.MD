

# [WIP] Forja Heróis API

O projeto Forja Heróis é uma API para criação de personagens para o sistema D&D 5e.

## Pré-requisitos

- Node.js
- Docker
- Docker-Compose
- Yarn

## Instalação

Para começar a usar a API Forja Heróis, siga as instruções abaixo:

1. **Clone o repositório**
```
https://github.com/forjaherois/api-main.git
```

2. **Navegue até o diretório**
```
cd api-main
```

3. **Instale as dependências**
```
yarn install
```

## Docker e Docker-Compose

Esta API utiliza Docker e Docker-Compose para a gestão do banco de dados. Se você ainda não tem o Docker instalado, siga as instruções na documentação oficial:

- [Instalar Docker](https://docs.docker.com/get-docker/)
- [Instalar Docker-Compose](https://docs.docker.com/compose/install/)


---
Uma vez instalado o Docker e Docker-Compose, você pode subir o banco de dados com o comando:
```
yarn db
```

Isso vai criar um container Docker com PostgreSQL, conforme configurado no arquivo docker-compose.yml do projeto.

## Migrações Prisma

Para executar as migrações do Prisma e manter seu banco de dados em dia, utilize o comando:
```
yarn dev:migrate
```

## Prisma Studio

O Prisma Studio é uma interface de usuário intuitiva para visualizar e editar os dados do seu banco. Para acessar o Prisma Studio, utilize o comando:
```
yarn studio
```

## Iniciar a API

Para iniciar a API em modo de desenvolvimento, utilize o comando:
```
yarn dev
```

## Testes

Para rodar os testes do projeto, utilize o comando:
```
yarn test
```





