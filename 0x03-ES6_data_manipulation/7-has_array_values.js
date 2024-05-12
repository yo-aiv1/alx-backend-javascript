export default function hasValuesFromArray(Aset, AnArray) {
  for (const val of AnArray) {
    if (!Aset.has(val)) {
      return false;
    }
  }
  return true;
}
