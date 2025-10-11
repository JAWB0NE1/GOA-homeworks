const records = JSON.parse(jsonString);
const count = records.filter(r => r.score > 80 && r.passed === true).length;