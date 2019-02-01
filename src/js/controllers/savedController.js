import {displayData} from './../utils/displayData';
import {getLocalList} from './../utils/localStorage';
import {KEY} from './../utils/listConfig';

const savedController = function () {
  const list = getLocalList(KEY);
  displayData('saved')(list)
};

export default savedController