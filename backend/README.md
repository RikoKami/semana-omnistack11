# Backend:

## Rota / Recurso 
Geralmente associado a uma tabela no banco/entidade

Rota: ```localhost:3333```

Recurso da rota: ```/users```

## Métodos HTTP

```
GET: Buscar/listar
POST: Criar
PUT: Alterar 
DELETE: Deletar
```

## Tipos de parâmetros
````
Query Params: Parâmetros nomeados enviados na rota após o simbolo de "?" (Filtros, paginação)
'/users?name="Larissa"'
````

````
Routes Params: Parâmetros utilizados para identificar recursos
'/users/:id'
````

````
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
````

## Utilizando o Insomnia*

Insomnia REST Client: https://github.com/Kong/insomnia

Base Environment:

````
{
  "base_url": "http://localhost:3333"
}
````

*caso seu pc seja 32bits, utilize o postman

## Banco de Dado utilizado: SQLite


Para criar uma table:
```
npx knex migrate:make name_table
```
