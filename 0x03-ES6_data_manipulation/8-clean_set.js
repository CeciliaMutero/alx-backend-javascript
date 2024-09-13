export default function cleanSet(set, startString) {
  return [...set]
    .filter((value) => value.startsWith(startString)) // Filter values starting with startString
    .map((value) => value.slice(startString.length)) // Remove startString from each value
    .join('-');
}
