const items = JSON.parse(jsonString);
const grouped = items.reduce((acc, { item, category }) => {
  acc[category] = acc[category] || [];
  acc[category].push(item);
  return acc;
}, {});