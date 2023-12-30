var listProduct = `http://localhost:3000/shoppingdb`
function start() {
  getList(renderList)
  handleCreatePro()
}
start()
function getList(callBack) {
    fetch(listProduct) 
        .then(function(response) {
            return response.json()
        })
        .then(callBack)
      }
      var currentPage = 1;
var startPic = 0, perpage = 8, endPic = 8;

function renderList(shoppings) {

  function renderPagePro(startPicture, endPicture) {
    var htmls = shoppings.slice(startPicture, endPicture).map(function(shopping) {
      if(shopping.image!=undefined) {
        return `
        <div class="pro product-item-${shopping.id}" >
          <img src="${shopping.image}" alt="" class="pro-img">
          <div class="des">
              <span class="pro-brands">${shopping.brands}</span>
              <h5 class="pro-name">${shopping.name}</h5>
              <div class="start">
                 <p class="number-star" style="display:none;">${shopping.star}</p>
                 ${displayStar(Number(shopping.star))}
              </div>
              <h4 class="pro-price">${shopping.price}</h4>
              <p class="pro-des" style="display:none;">${shopping.description}</p>
          </div>
          <a href="#"><i class='bx bx-cart-alt cart'></i></a>
          <div class="setting-pro">
          <i class='bx bx-dots-horizontal-rounded more-option'></i>
          <div class="setting-option">
              <ul class="options">
                  <li onclick="deleteProduct(${shopping.id})"><span><i class='bx bx-x-circle'></i>Delete</span></li>
                  <li onclick="editProduct(${shopping.id})"><span><i class='bx bxs-edit'></i>Edit</span></li>
              </ul>
          </div>
      </div>
      </div>
        `
      }
    })
    let productContainer = document.querySelector('.pro-container')
    productContainer.innerHTML = htmls.join('')
  }
  var numberPage = Math.ceil((shoppings.length)/perpage)
  pageButton(numberPage)
  function chageCurrentPage(currentPage) {
    startPic = (currentPage-1)*perpage
    endPic = currentPage*perpage;
    renderPagePro(startPic, endPic)
  }
  function pageButton(numberPage) {
   let pagination = document.getElementById('pagination')
   let htmls=`<button class="button-page pre-page preventClick" href="#"><i class='bx bx-left-arrow-alt'></i></button>`
   for(let i=0; i<numberPage; i++) {
      if(i==0) {
         htmls+=`<button class="button-outline button-page buttonActive" href="#">${i+1}</button>`
       }else{
         htmls+=`<button class="button-outline button-page" href="#">${i+1}</button>`
       }
     }
     htmls+=`<button class="button-page next-page" href="#"><i class='bx bx-right-arrow-alt'></i></button>`
     pagination.innerHTML = htmls
   }
   function changeActive(buttonItem) {
     document.querySelector('.buttonActive').classList.remove('buttonActive')
     buttonItem.classList.add('buttonActive')
  }
  function preventBtnClick(currentPage, maxPage, preButton ,nextButton) {
    // console.log(preButton);
    if(currentPage==maxPage) {
      nextButton.classList.add("preventClick")
      preButton.classList.remove("preventClick")
    }else if(currentPage==1) {
      preButton.classList.add("preventClick")
      nextButton.classList.remove("preventClick")
    }else{
      nextButton.classList.remove("preventClick")
      preButton.classList.remove("preventClick")
    }
  }
  function buttonAction() {
    let buttonOutline = document.querySelectorAll('#pagination .button-outline')
    let preButton = document.querySelector('.pre-page')
    let nextButton = document.querySelector('.next-page')
    let maxPage = buttonOutline.length;
      buttonOutline.forEach((buttonItem)=> {
        buttonItem.addEventListener('click', ()=> {
          currentPage=Number(buttonItem.innerHTML)
          preventBtnClick(currentPage, maxPage, preButton, nextButton)
          changeActive(buttonOutline[currentPage-1])
          chageCurrentPage(currentPage)
        })
      })
      nextButton.addEventListener('click', ()=> {
        currentPage++
        preventBtnClick(currentPage, maxPage, preButton, nextButton)
        changeActive(buttonOutline[currentPage-1])
        chageCurrentPage(currentPage)
      })
      preButton.addEventListener('click', ()=> {
        currentPage--
        preventBtnClick(currentPage, maxPage, preButton, nextButton)
        changeActive(buttonOutline[currentPage-1])
        chageCurrentPage(currentPage)
      })
  }
  buttonAction()
  renderPagePro(startPic, endPic)
}


function displayStar(numberStar) {
   let html = ``
   for(let i=0; i<numberStar; i++) {
     html+=`<i class='bx bxs-star'></i>`
   }
   return html
}
function uploadProduct() {
    const file = document.querySelector("#image-upload")//Pic input
    const preview = document.querySelector(".image-box")
    let upload_image = ""
    //has change when upload file
    file.addEventListener("change", function() {
      const reader = new FileReader()
      reader.addEventListener("load", () => {
        upload_image = reader.result;
        preview.style.backgroundImage =  `url(${upload_image})`
      })
      reader.readAsDataURL(this.files[0]);
    })
}
uploadProduct()

var saveBtn = document.querySelector('#save-btn')
var updateBtn = document.querySelector('#update-btn')

function updateProduct(data, productId, callBack) {
  fetch(listProduct+"/"+productId, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(data),
  })
   .then((response)=> {
    response.json()
    })
   .then(callBack)
}
let proImg = document.querySelector('.image-box')
let brandPro = document.querySelector('#brand-input')
let namePro = document.querySelector('#name-input')
let starPro = document.querySelector('#number-star-input')
let pricePro = document.querySelector('#price-input')
let desPro = document.querySelector('#des-input')


//edit product
function editProduct(productId) {
  let productItem = document.querySelector('.product-item-'+productId)
  let productImage = productItem.querySelector('.pro-img')
  let productBrands = productItem.querySelector('.pro-brands')
  let productName = productItem.querySelector('.pro-name')
  let productStar = productItem.querySelector('.number-star')
  let productPrice = productItem.querySelector('.pro-price')
  let productDes = productItem.querySelector('.pro-des')

        saveBtn.style.display = "none"
        updateBtn.style.display = "block"

        proImg.style.backgroundImage = `url('${productImage.src}')`
        brandPro.value = productBrands.innerHTML,
        namePro.value =productName.innerHTML,
        starPro.value = productStar.innerHTML,
        pricePro.value = productPrice.innerHTML,
        desPro.value = productDes.innerHTML

   updateBtn.onclick =  function() {
       data = {
         image: proImg.style.backgroundImage.slice(5, -2),
         brands: brandPro.value,
         description: desPro.value,
         name: namePro.value,
         star: starPro.value,
         price: pricePro.value
       }
     updateProduct(data, productId, function() {
       getList(renderList)
     })
    }
}

function createPro(data, callBack) {
  fetch(listProduct, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(data),
  })
   .then((response)=> {
      response.json()
   })
   .then(callBack)
}

//create product
function handleCreatePro() {
var saveBtn = document.querySelector('#save-btn')
  saveBtn.onclick = function() {
    let data = {
      image: proImg.style.backgroundImage.slice(5, -2),
      brands: brandPro.value,
      description: desPro.value,
      name: namePro.value,
      star: starPro.value,
      price: pricePro.value
   }
   createPro(data, function() {
    getList(renderList)
   })
  }
}
//delete
function deleteProduct(productId) {
  fetch(listProduct+'/'+productId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((response)=> {
    response.json()
  })
  .then(()=> {
    let productItem = document.querySelector('.product-item-'+productId)
    if(productItem) {
         productItem.remove()
         getList(renderList)
    }
 })
}


updateBtn.addEventListener('click', ()=> {
  updateBtn.style.display = "none"
  saveBtn.style.display = "block"
})

