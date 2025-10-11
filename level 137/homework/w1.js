const data = JSON.parse(jsonString);
const inactive = data.filter(obj => obj.active === false);