export default function fetchData() {
    const url = 'http://localhost:8080/product';
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            return error;
        });
}
