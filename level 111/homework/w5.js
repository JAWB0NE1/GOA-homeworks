const executeFunction = (fn = () => 10) => fn();

console.log(executeFunction(() => 5)); 
console.log(executeFunction());   