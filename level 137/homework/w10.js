const items = JSON.parse(jsonString);
items.forEach(obj => {
  if (obj.status === "pending") obj.status = "complete";
});