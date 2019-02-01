const ajaxRequest = function (url, cbk) {
  $.ajax(url)
    .done(cbk)
    .fail(console.error)
};

export {ajaxRequest}
