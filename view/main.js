let store = new Store('quan', 'ao', 'dep');
// function main() {
//     let product1 = new Products(1, 'ao', 'bad', 2000);
//     store.add(product1);
//     console.log(store);
//    
// }
// main()

function showAll() {
    let productInStore = store.findAll();
    let str = ``
    for (let i = 0; i < productInStore.length; i++) {
        str += `
        <tr>
      <th>${productInStore[i].id}</th>
      <th>${productInStore[i].name}</th>
      <th>${productInStore[i].quantity}</th>
      <th>${productInStore[i].price}</th>
      <th ><button onclick="remove(${i})">Remove</button></th>
      <th ><button onclick="showFormEdit()">Edit</button></th>
      </tr>
`
    }
    document.getElementById('product').innerHTML = str;
}

function add() {
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let quantity = document.getElementById('quantity').value
    let price = document.getElementById('price').value
    let newProduct = new Products(id, name, quantity, price)
    store.add(newProduct)
    console.log(store)
    // alert('Add Success')
    showAll()
    document.getElementById('form-add').innerHTML = ''

}





function showFormAdd() {

    document.getElementById('form-add').innerHTML =
        `
            <center>
        <h1>Add Product</h1>
        <table>
            <tr>
                <td>Id</td>
                <td><input type="number" id="id"></td>
            </tr>
            <tr>
                <td>Name</td>
                <td><input type="text" id="name"></td>
            </tr>
            <tr>
                <td>Quantity</td>
                <td><input type="number" id="quantity"></td>
            </tr>
            <tr>
                <td>Price</td>
                <td><input type="number" id="price"></td>
            </tr>
            <tr>
                <th colspan="2">
                    <button onclick="add()">Add</button>
                </th>
            </tr>
        </table>
    </center>
    `
}


function remove(index) {
    let isConfirm = confirm("bạn muốn xóa không?")
    if (isConfirm) {
        store.remove(index);
    }
    showAll()
}


function showFormEdit() {
    let productEdit = Products[index]
    document.getElementById('form-edit').innerHTML = `

<h1>Edit Product </h1>
<table>
    <tr>
        <td>Id</td>
        <td><input type="number" value="${productEdit.id}" id="idEdit"></td>
    </tr>
    <tr>
        <td>Name</td>
        <td><input type="text" id="nameEdit"></td>
    </tr>
    <tr>
        <td>Quantity</td>
        <td><input type="number" id="quantityEdit"></td>
    </tr>
    <tr>
        <td>Price</td>
        <td><input type="number" id="priceEdit"></td>
    </tr>
    <tr>
        <th colspan="2">
            <button>Edit</button>
        </th>
    </tr>
</table>
`

}
