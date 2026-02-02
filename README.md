#Como rodar:



Idealmente, o primeiro passo é rodar o comando npm install para baixar todas as dependências do projeto(espera-se que a versão baixada do prisma seja 6.19.2)

Após isso, npx prisma db seed para semear o banco com 3 carros.

Então, o projeto deveria estar pronto para funcionar

Método bootstrap(espress): rodar npm run dev para iniciar o servidor, rodar um post no servidor. 

#Exemplo: curl -X POST http://localhost:3000/alugar \
     -H "Content-Type: application/json" \
     -d '{
           "id_user": "1234",
           "id_carro": "[ver no prisma studio após o seed (npx prisma studio)]",
           "dataDevolucao": "2026-05-20T10:00:00Z"
         }'

Método CLI padrão:

