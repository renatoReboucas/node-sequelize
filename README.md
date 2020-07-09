# Sequileze

```
Instalar o sequileze:
```

npm install sequelize sequelize-cli path

```
Depois disso rodar o comando:
```

npx sequelize-cli init 

se desejar mudar as pastas padroes de lugar criar um arquivo na rais com o nome de: .sequelizerc

e colar o codigo a baixo nele:


~~~javascript
const path = require('path');

module.exports = {
  'config': path.resolve('./caminho_nova_pasta/config', 'config.json'),
  'models-path': path.resolve('./caminho_nova_pasta/models'),
  'seeders-path': path.resolve('./caminho_nova_pasta/seeders'),
  'migrations-path': path.resolve('./caminho_nova_pasta/migrations')
}
~~~

```
Criando tabelas
````

* não precisa passar id pois ele cria sozinho

npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string


```
Rodando migrations:
```

npx sequelize-cli db:migrate

```
Gerando seeds:
```

npx sequelize-cli seed:generate --name demo-pessoa

```
Rodando arquivos seeds:
```

npx sequelize-cli db:seed:all