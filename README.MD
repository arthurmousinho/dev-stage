# DevStage - NLW Connect
![nlw-connect-thumbnail](.github/thumbnail.png)

## Sobre 
- O projeto é um site responsivo de inscrição e indicação para eventos.
- Esse é um projeto do evento NLW Connect, um dos conteúdos disponíveis para alunos da Rocketseat.

## Tecnologias
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle-black?style=for-the-badge&logo=drizzle&logoColor=#c5f74e)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-2f68b7?style=for-the-badge&logo=zod&logoColor=white)

## Rodando o projeto

#### Clone e acesse o repositório
```bash
git clone https://github.com/arthurmousinho/dev-stage.git
```
```bash
cd dev-stage
```

#### Adicione o arquivo .env na raiz da pasta API e adicione as variáveis de ambiente:
```bash
cd api
```
```python
PORT=3333
DATABASE_URL="postgresql://docker:docker@localhost:5432/connect"
REDIS_URL="redis://localhost:6379"
API_URL="http://localhost:3333"
WEB_URL="http://localhost:3000"
```

#### Rode a API
```bash
npm run dev
```

#### Rode o projeto WEB
```bash
cd ../web
```
```bash
npm run dev
```