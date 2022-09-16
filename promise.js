const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (respon) => {

  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  const allTheater = [...theaterIXX, ...theaterVGC]

  let responPenonton = 0;

  allTheater.forEach((film) => {
    if (film.hasil === respon) {
      responPenonton++;
    }
  })

  return responPenonton;

};

module.exports = {
  promiseOutput,
};
