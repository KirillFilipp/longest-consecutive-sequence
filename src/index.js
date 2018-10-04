module.exports = function longestConsecutiveLength(array) {
  let ar = array;
  let arsort;
  let z = [];
  let z1 = [];
  let c = 0;
  function compare(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  arsort = ar.sort(compare);
  let i1 = arsort.length;
  for (let i = 0; i <= i1; i++) {
    if (i1 === 0) {
      return (0);
    } else if (arsort[i + 1] === arsort[i] + 1) {
      c++;
    } else {
      z.push((c++) + 1);
      c = 0;
    }
  }

  z1 = [Math.max.apply(null, z)];
  return z1[0];

}
