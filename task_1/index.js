import { encoded, translations } from "./data.js";

function decodeFields(encoded, translations) {
  let decoded = [];
  let uniqueIds = new Set();

  encoded.forEach((obj) => {
    let decodedObj = {};

    for (let key in obj) {
      let value = obj[key];

      if (key.endsWith("Id")) {
        if (!["groupId", "service", "formatSize", "ca"].includes(key)) {
          let decodedValue = translations[value] || value;
          decodedObj[key] = decodedValue;
          uniqueIds.add(decodedValue);
        } else {
          decodedObj[key] = value;
        }
      } else {
        decodedObj[key] = value;
      }
    }

    decoded.push(decodedObj);
  });

  return { decoded, uniqueIds: Array.from(uniqueIds) };
}

let { decoded, uniqueIds } = decodeFields(encoded, translations);

console.log(decoded);
console.log(uniqueIds);

console.log("Let's rock");
console.log(encoded, translations);
