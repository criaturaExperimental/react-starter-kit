export default function getList(data) {
  let arrData = [];
  const list = data.message;
  for (var key in list) {
    if (list.hasOwnProperty(key)) {
      arrData.push(key);
    }
  }
  return arrData
}