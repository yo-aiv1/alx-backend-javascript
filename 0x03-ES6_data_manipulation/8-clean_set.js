export default function cleanSet(Aset, SubString) {
  let result = '';
  for (const val of Aset) {
    if (val.slice(0, 3) === SubString) {
      if (result.length > 0) {
        result += '-';
      }
      result += val.slice(3, val.length);
    }
  }
  return result;
}
