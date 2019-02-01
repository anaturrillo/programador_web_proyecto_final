import { getLocalList, setLocalList, addElement, removeElem } from './localStorage';
import {ajaxRequest} from './apiRequests';
import {KEY} from './listConfig';

const events = {
  people: {
    fn: function (e) {
      const url = $(e.target).attr('data');
      ajaxRequest(url, addElement(KEY));
      $(e.target).parent().parent().remove()
    },
    name: 'Guardar'
  },
  saved: {
    fn: function (e) {
      const url = $(e.target).attr('data');
      removeElem(KEY)(url);
      $(e.target).parent().parent().remove()
    },
    name: 'Borrar'
  }
};

const translate = {
  sp:{
    blue: 'azul',
    yellow: 'amarillo',
    red: 'rojo',
    brown: 'marron',
    "blue-gray": 'gris azulado',
    male: 'masculino',
    "n/a": "N/A",
    female: 'femenino'
  }
};

const displayData = module => function (data) {
  const list = data.results || data;
  const table = $('table');

  for (let i = 0; i < list.length; i++) {
    const character = list[i];
    const row = document.createElement('tr');
    $(row).append('<td>' + i + '</td>' +
      '<td>' + character.name + '</td>' +
      '<td>' + translate.sp[character.gender] + '</td>' +
      '<td>' + character.height + '</td>' +
      '<td>' + character.mass + '</td>' +
      '<td>' + translate.sp[character.eye_color] + '</td>' +
      '<td><input type="button" value="' + events[module].name + '" class="button" data="' + character.url + '"></td>' +
      '');

    $(row).find('.button').click(events[module].fn);

    table.append(row)
  }

};



export {displayData}