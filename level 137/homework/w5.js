const profiles = JSON.parse(jsonString);
const isValid = profiles.every(p => 'name' in p && 'age' in p && 'email' in p);