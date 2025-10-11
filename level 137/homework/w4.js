const entries = JSON.parse(jsonString);
const map = Object.fromEntries(entries.map(({ id, value }) => [id, value]));