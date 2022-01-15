const array = [2, 3, 7, 5, 4, 3, 8]
const newarray = array.filter(function (num, i, arr)
{
  return arr.indexOf(num) === i;
})
console.log(newarray);