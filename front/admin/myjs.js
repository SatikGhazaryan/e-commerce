/* eslint-disable no-undef */
const li = document.querySelectorAll('.li');
document.getElementById('inNav').innerHTML = li[0].innerText;
let [privElement] = li[0].querySelectorAll('i');
privElement.style.color = '#4fa607';
let categorie = true;
let product = true;
li.forEach(element =>  {
    element.addEventListener('click', function () {
        privElement.style.color = '#000';
        [privElement] = this.querySelectorAll('i');
        document.getElementById('inNav').innerHTML = this.innerText;
        this.querySelectorAll('i')[0].style.color = '#4fa607';
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
    const creatbtn = document.getElementById('btn');
    creatbtn.addEventListener('click', getCategores);
}

function getCategores() {
    // //////////////////////////
}
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
            div.append(textarea);
            form.append(div);
        } else if (i === 2) {
            const price = document.createElement('input');
            price.placeholder = 'price';
            price.type = 'number';
            div.append(price);
            form.append(div);
        } else if (i === 3) {
            const file = document.createElement('input');
            file.type = 'file';
            div.append(file);
            form.append(div);
        } else if (i === 4) {
            const select = document.createElement('select');
            const option = document.createElement('option');
            // option.innerHtml='categories from db'
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
