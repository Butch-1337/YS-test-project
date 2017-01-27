export default url => {
  return new Promise((success, fail) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.addEventListener('load', () => {
      if(request.status >= 200 && request.status < 400) {
        try {
          success(JSON.parse(request.responseText));
        }
        catch(err){
          throw(err.name + ': ' + err.message);
        }
      }
      else {
        fail(new Error(`Ошибка при запросе: ${request.statusText}`));
      }
    });

    request.addEventListener('error', () => {
      fail(new Error('Ошибка связи'));
    });

    request.send();
  });
};