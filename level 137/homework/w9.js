const arr1 = JSON.parse(jsonString1);
const arr2 = JSON.parse(jsonString2);
const merged = [...arr1, ...arr2];
const deduped = Object.values(
  merged.reduce((acc, obj) => {
    acc[obj.id] = obj;
    return acc;
  }, {})
);