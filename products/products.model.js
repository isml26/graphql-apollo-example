const products = [{
        id: 'item1',
        description: 'Nike Renew',
        price: 36.6,
        reviews: [],
    },
    {
        id: 'item2',
        description: 'Nike Quest 3',
        price: 46.6,
        reviews: [],
    },
    {
        id: 'sweat1',
        description: 'Chicago Bulls',
        price: 24.2,
        reviews: [],
    }
]

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max
    });
}

function getProductById(id) {
    return products.find((product) => {
        return product.id === id;
    })
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        price,
        description,
        reviews: [],
    }
    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, rating, comment) {
    const product = getProductById(id)
    if (product) {
        const newProductReview = {
            rating,
            comment
        };
        product.reviews.push(newProductReview);
        return newProductReview;
    }

}
module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview,
}