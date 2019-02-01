/**
 * La función getLocalList permite obtener una lista en formato
 * JavaScript del localStorage. Si la lista no existe devuelve un
 * array vacío.
 * @param { string } key
 * @returns { array }
 */
function getLocalList (key) {
  if (typeof key === 'string') {
    const localList = localStorage.getItem(key);
    if (localList) {
      const parsedList = JSON.parse(localList);
      return parsedList
    } else {
      return []
    }
  }
}

/**
 * La función setLocalList permite guardar una lista
 * en el localStorage en formato JSON
 * @param { string } key
 * @param { array } list
 */
function setLocalList (key, list) {
  if (typeof key === 'string' && Array.isArray(list)) {
    const strList = JSON.stringify(list);
    localStorage.setItem(key, strList)
  }
}

function addElement(key) {
  return function (elem) {
    const currentList = getLocalList(key) || [];
    const newList = currentList.concat([elem]);
    setLocalList(key, newList)
  }

}

function removeElem(key) {
  return function (id) {
    const currentList = getLocalList(key) || [];
    const newList = [];

    for (let i = 0; i < currentList.length; i++) {
      const item = currentList[i];
      if (id !== item.url) {
        newList.push(item)
      }
    }

    setLocalList(key, newList)
  }

}

export { getLocalList, setLocalList, addElement, removeElem }