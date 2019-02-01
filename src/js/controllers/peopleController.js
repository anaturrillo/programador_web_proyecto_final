import {displayData} from './../utils/displayData';
import {ajaxRequest} from './../utils/apiRequests';

const peopleController = function (url) {
  return function () {
    ajaxRequest(url, displayData('people'))
  }

};

export default peopleController
