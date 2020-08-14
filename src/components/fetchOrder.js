export default function fetchOrder() {
    const url = 'http://localhost:8080/order';
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            return error;
        });
}
