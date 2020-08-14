export default function addToOrder(product) {
    const url = 'http://localhost:8080/order';

    fetch(url, {
    method: 'POST', 
    body: JSON.stringify(product),
    headers: new Headers({
        'Content-Type': 'application/json'
    })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}