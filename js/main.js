const getRandomIntInclusive = function (min, max) {
  if(min >= max || min < 0) return 'Incorrect incoming data !';

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isStrLengthValid = function (str, maxStrLength) {
  if (str.length <= maxStrLength) return true
  return false
}