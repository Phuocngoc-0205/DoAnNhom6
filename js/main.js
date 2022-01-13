const url = "http://localhost:3000/product";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const listProduct = document.querySelector('#listProduct')
        let html = '';
        data.forEach(item => {
            html += `
          <div class="product-col">
              <img src="${item.productThumb}" />
              <h3>${item.productName}</h3>
              <p>${item.productPrice}</p>
          </div>
          `;
        });
        listProduct.innerHTML = html;
    })