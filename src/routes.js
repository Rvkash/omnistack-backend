const { Router } = require('express');
const DevController = require ('./controllers/DevController');
const SearchController = require ('./controllers/SearchController');

const routes = Router();

// TIPOS DE PARAMÊTROS

//QUERY PARAMS: REQUEST.QUERY (FILTROS,ORDENAÇÃO,PAGINAÇÃO..)
//ROUTE PARAMS: REQUEST.PARAMS (IDENTIFICAR UM RECURSO NA ALTERAÇÃO OU REMOÇÃO )
//BODY: request.body (dados para alteração ou criação de um registro)


    routes.get('/devs', DevController.index);
    routes.post('/devs', DevController.store);
    routes.get('/search', SearchController.index );

module.exports = routes;
