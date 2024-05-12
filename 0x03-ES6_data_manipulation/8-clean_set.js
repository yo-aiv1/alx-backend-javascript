export default function cleanSet(Aset, SubString) {
  if (
    typeof Aset !== 'object'
    || typeof SubString !== 'string'
    || SubString.length === 0
  ) {
    return '';
  }

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
