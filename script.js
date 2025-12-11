const products = [
    { name: "Laptop", price: 5000000, image: "https://via.placeholder.com/200" },
    { name: "Smartphone", price: 3000000, image: "https://via.placeholder.com/200" },
    { name: "Buku", price: 50000, image: "https://via.placeholder.com/200" }
];

function displayProducts(list) {
    const container = document.getElementById('products');
    container.innerHTML = '';
    list.forEach(product => {
        container.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Rp ${product.price.toLocaleString()}</p>
                <button onclick="addToCart('${product.name}')">Tambah ke Keranjang</button>
            </div>
        `;
    });
}

function searchProducts() {
    const query = document.getElementById('search').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered);
}

function addToCart(name) {
    alert(`${name} ditambahkan ke keranjang!`);
    // Tambahkan logika keranjang di sini, misal simpan di localStorage
}

// Tampilkan semua produk saat load
displayProducts(products);
