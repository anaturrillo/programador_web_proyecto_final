import crossroads from 'crossroads';
import homeController from './controllers/homeController'
import contactController from './controllers/contactController'
import savedController from './controllers/savedController'
import peopleController from './controllers/peopleController'


crossroads.addRoute('/', function () {
  $('#root').load('./partials/home.html', homeController);
});

crossroads.addRoute('#/contact', function () {
  $('#root').load('./partials/contact.html', contactController);
});

crossroads.addRoute('#/saved', function () {
  $('#root').load('./partials/saved.html', savedController);
});

crossroads.addRoute('#/people', function () {
  $('#root').load('./partials/people.html', peopleController('https://swapi.co/api/people/'));
});


// En cada cambio del # va a verificar las rutas
$(window).on('hashchange', function () {
  crossroads.parse(window.location.hash)
});

crossroads.parse(window.location.hash);