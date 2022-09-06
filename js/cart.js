const getInputValueId = id => {
    //parameter id passing 
    const inputField = document.getElementById(id);
    //apply in value for inputfirld 
    const inputValue = inputField.value;
    //those value retutrn show
    inputField.value = '';
    return inputValue;

}

const addProduct = () => {
    //add product html field
    const product = getInputValueId('product-name-field');
    //add quantity html field
    const quantity = getInputValueId('product-quuantity-field')
    //see console product and quantity
    console.log(product, quantity);


    //display product on UI and call
    addProductToDisplay(product, quantity);
    //set to local storage
    //key and value passing parameter
    //localStorage.setItem(product, quantity);
    saveItemToLocalStorage(product, quantity);
}

//cart item add if it stay
const getShoppingCartFromLocalStorage = () => {
    //if cart item are stay
    let saveCart = localStorage.getItem('cart');
    //intailly cart value add
    let cart = {}
    //if cart stay it convert from string obj
    if (saveCart) {
        //convert parse from string to obj
        cart = JSON.parse(saveCart);
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity) => {
    //if cart are show empty object then save 
    const cart = getShoppingCartFromLocalStorage();
    //add product to the object as property
    cart[product] = quantity;
    const cartStringfied = JSON.stringify(cart);

    //save to local Storage
    localStorage.setItem('cart', cartStringfied);

}

//product and quantity show display webpage
const addProductToDisplay = (product, quantity) => {

    //add ul item html 
    const productContainer = document.getElementById('product-container');

    //create li element
    const li = document.createElement('li');

    //access and show product and quantity
    li.innerText = `${product} : ${quantity}`;

    //all element show
    productContainer.appendChild(li);
}

const displayStorageProduct = () => {
    //call getShoppingCartFromLocalStorage file and show object method
    const cart = getShoppingCartFromLocalStorage();

    //object for in loop appply console
    for (const product in cart) {
        //show value and cart stay obj and it show value in third braacket console
        const quantity = cart[product];

        //it show and call product and quantity console
        console.log(product), quantity;

        addProductToDisplay(product, quantity);
    }
}

displayStorageProduct();