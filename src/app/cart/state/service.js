export function fetchProducts() {
    return window.fetch("http://localhost:7070/delayed/api/products")
           .then ( function (response) {
               return response.json(); 
           }) 
}