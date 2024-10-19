let cart = [];

function updateCartTable() {
    const cartTableBody = $(".thanhToan tbody");
    cartTableBody.empty();

    let totalPrice = 0; //*
    cart.forEach((item, index) => {
        const row = $("<tr></tr>");

        const nameCell = $("<td></td>").text(item.product);
        row.append(nameCell);

        const quantityCell = $("<td></td>").text(item.quantity);
        row.append(quantityCell);

        const priceCell = $("<td></td>").text(item.price * item.quantity + "₫");
        row.append(priceCell);

        const deleteCell = $("<td></td>");
        const deleteButton = $("<button></button>").text("Xóa").addClass("delete-button");
        deleteButton.on("click", () => {
            removeFromCart(index);
        });
        deleteCell.append(deleteButton);
        row.append(deleteCell);

        cart.forEach(item => { //*
            totalPrice += item.price * item.quantity; //*
        });
        cartTableBody.append(row);
    });
    $('#total-price').text(totalPrice); //*
}

function addToCart(product, price) {
    const existingProduct = cart.find(item => item.product === product);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ product: product, price: price, quantity: 1 });
    }
    updateCartTable();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartTable();
}

// $('.buy-button').on('click', function() {
//     const product = $(this).data('product');
//     const price = parseInt($(this).data('price'));

//     addToCart(product, price);
// });

$(document).ready(function() {
    $(".buy-button").click(function() {
        const product = $(this).data('product');
        const price = parseInt($(this).data('price'));

        addToCart(product, price);
    });
});
// $('#checkout').on('click', function() {
//     let totalPrice = 0;

//     cart.forEach(item => {
//         totalPrice += item.price * item.quantity;
//     });

//     $('#total-price').text(totalPrice);
// });
