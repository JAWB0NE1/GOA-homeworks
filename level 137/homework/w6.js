const tasks = JSON.parse(jsonString);
tasks.sort((a, b) => a.priority - b.priority);