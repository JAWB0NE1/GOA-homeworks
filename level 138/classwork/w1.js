const apiFetch = async () => {
    const API_ENDPINT = fetch('https://jsonplaceholder.typicode.com/todos/1');
    const API_Data = API_ENDPINT.then(response => response.json());
    const response = API_data.then(json => json);
    console.log(await response);
}
apiFetch();