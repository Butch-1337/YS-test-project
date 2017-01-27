export default (idArr, genres) => {
  let genreArr = [];
  if (idArr && idArr.length){
    idArr.forEach( id => {
      genres.forEach(genreObj => {
        if (id === genreObj.id) genreArr.push(genreObj.name);
      });
    });
  }
  return genreArr;
};