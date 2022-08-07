/* eslint-disable no-undef */
const li = document.querySelectorAll('.li');
document.getElementById('inNav').innerHTML = li[0].innerText;
let [privElement] = li[0].querySelectorAll('i');
privElement.style.color = '#a43664';
let categorie = true;
let product = true;
li.forEach(element =>  {
    element.addEventListener('click', function () {
        privElement.style.color = '#000';
        [privElement] = this.querySelectorAll('i');
        document.getElementById('inNav').innerHTML = this.innerText;
        this.querySelectorAll('i')[0].style.color = '#a43664';
        const form = document.querySelector('form');
        if (form) {
            document.getElementById('cont').removeChild(form);
            categorie = true;
            product = true;
        }
        if (this.innerText === 'Categories') {
            if (categorie) {
                creatCategories();
            }
        } else if (this.innerText === 'Add product') {
            if (product) {
                addProduct();
            }
        } else {
            console.log('else');
        }
    });
});
// create Categories
function creatCategories() {
    const form = document.createElement('form');
    const div = document.createElement('div');
    div.id = 'row';
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'categoriesName';
    input.placeholder = 'Categories name';
    div.append(input);
    form.append(div);
    const button = document.createElement('input');
    button.value = 'Creat Categories';
    button.id = 'btn';
    button.type = 'button';
    form.append(button);
    document.getElementById('cont').append(form);

    categorie = false;
    // const creatbtn = document.getElementById('btn');
    // creatbtn.addEventListener('click', getCategores);
}

// function getCategores() {
// //////////////////////////
// }
// addProduct
function addProduct() {
    const form = document.createElement('form');
    for (let i = 0; i < 6; i += 1) {
        const div = document.createElement('div');
        div.id = `row${i}`;
        if (i === 0) {
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Product name';
            input.id = 'productName';
            div.append(input);
            form.append(div);
        } else if (i === 1) {
            const textarea = document.createElement('textarea');
            textarea.placeholder = 'Description';
            textarea.id = 'description';
            div.append(textarea);
            form.append(div);
        } else if (i === 2) {
            const price = document.createElement('input');
            price.placeholder = 'price';
            price.type = 'number';
            price.id = 'price';
            div.append(price);
            form.append(div);
        } else if (i === 3) {
            const file = document.createElement('input');
            file.type = 'file';
            file.id = 'imgUrl';
            div.append(file);
            form.append(div);
        } else if (i === 4) {
            const select = document.createElement('select');
            const option = document.createElement('option');
            // option.innerHtml='categories from db'
            select.id = 'selectCategories';
            select.append(option);
            div.append(select);
            form.append(div);
        } else if (i === 5) {
            const button = document.createElement('input');
            button.value = 'Add Product';
            button.id = 'add';
            button.type = 'submit';
            div.append(button);
            form.append(div);
        }
    }
    document.getElementById('cont').append(form);
    product = false;
}

async () => {
    const response = await fetch('http://localhost:3003/v1/products', {
        method: 'GET',
    });
    const requestBody = await response.json();
    console.log(requestBody);
    console.log(response);
};

addProduct();
const submitNewProduct = document.getElementById('add');
submitNewProduct.addEventListener('click', async () => {
    const productName = document.getElementById('productName');
    const description = document.getElementById('description');
    const price = document.getElementById('price');
    const imgUrl = document.getElementById('imgUrl');
    // const selectCategories = document.getElementById('selectCategories');
    const reqBody = {
        name: productName.value,
        description: description.value,
        price: price.value,
        imgUrl: imgUrl.value,
        // categories: selectCategories.value,
    };
    console.log('reqBody', reqBody);
    try {
        const response = await fetch('http://localhost:3003/v1/products', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const body = await response.json();
        console.log('resBody', body);
    } catch (error) {
        console.log('Create user error', error);
    }
});

creatCategories();
const submitNewCategories = document.getElementById('btn');
submitNewCategories.addEventListener('click', async () => {
    const categoriesName = document.getElementById('categoriesName');
    const reqBody = {
        name: categoriesName.value,
    };
    console.log('reqBody', reqBody);
    try {
        const response = await fetch('http://localhost:3003/v1/categories', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const body = await response.json();
        console.log('resBody', body);
    } catch (error) {
        console.log('Create categories error', error);
    }
});
