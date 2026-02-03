#Como rodar:



#Idealmente, o primeiro passo é rodar o comando npm install para baixar todas as dependências do projeto(espera-se que a versão baixada do prisma seja 6.19.2)

Depois, npx prisma generate, por garantia

#Após isso, npm run seed para semear o banco com 3 carros.

#Então, o projeto deveria estar pronto para funcionar

#Método bootstrap(espress): rodar npm run dev para iniciar o servidor, rodar um post no servidor. 

Exemplo de post: curl -X POST http://localhost:3000/alugar \
     -H "Content-Type: application/json" \
     -d '{
           "id_user": "1234",
           "id_carro": "carro-1",
           "dataDevolucao": "2026-05-20T10:00:00Z"
         }'

#Método CLI padrão: npm run cli

