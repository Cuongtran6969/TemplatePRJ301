let mobileCart = document.querySelector("#header #mobile .menu-icon")
let navBar = document.getElementById("navbar")
let closeBar = document.getElementById("close")
let modal = document.getElementById("modal")
mobileCart.addEventListener('click', ()=> {
    navBar.style.right = 0;
    modal.classList.add("open")
})
modal.addEventListener('click', ()=> {
    modal.classList.toggle("open")
    navBar.style.right = "-300px";
})
closeBar.addEventListener('click', ()=> {
    navBar.style.right = "-300px";
    modal.classList.toggle("open")
})
const products = [
    {id: 1, image: "../img/products/f1.jpg", brands: "addidas", name: "Hoodie black friday sale",des: "good product ade in VietNam has been recive product best choice 2020",price: "$9.6"},
    {id: 2, image: "../img/products/f1.jpg", brands: "addidas", name: "Hoodie black friday sale",des: "good product ade in VietNam has been recive product best choice 2020",price: "$9.6"},
    {id: 3, image: "../img/products/f1.jpg", brands: "addidas", name: "Hoodie black friday sale",des: "good product ade in VietNam has been recive product best choice 2020",price: "$9.6"},
    {id: 4, image: "../img/products/f1.jpg", brands: "addidas", name: "Hoodie black friday sale",des: "good product ade in VietNam has been recive product best choice 2020",price: "$9.6"},
    {id: 5, image: "../img/products/f1.jpg", brands: "addidas", name: "Hoodie black friday sale",des: "good product ade in VietNam has been recive product best choice 2020",price: "$9.6"},
    {id: 6, image: "../img/products/f1.jpg", brands: "addidas", name: "Hoodie black friday sale",des: "good product ade in VietNam has been recive product best choice 2020",price: "$9.6"},
    {id: 7, image: "../img/products/f1.jpg", brands: "addidas", name: "Hoodie black friday sale",des: "good product ade in VietNam has been recive product best choice 2020",price: "$9.6"},
    {id: 8, image: "../img/products/f1.jpg", brands: "addidas", name: "Hoodie black friday sale",des: "good product ade in VietNam has been recive product best choice 2020",price: "$9.6"},
    {id: 9, image: "../img/products/f2.jpg", brands: "nike", name: "Cartoon A stronous T-ShirtS",des: "good product ade in VietNam has been recive product best choice 2020",price: "$7.8"},
    {id: 10, image: "../img/products/f2.jpg", brands: "nike", name: "Cartoon A stronous T-ShirtS",des: "good product ade in VietNam has been recive product best choice 2020",price: "$7.8"},
    {id: 11, image: "../img/products/f2.jpg", brands: "nike", name: "Cartoon A stronous T-ShirtS",des: "good product ade in VietNam has been recive product best choice 2020",price: "$7.8"},
    {id: 12, image: "../img/products/f2.jpg", brands: "nike", name: "Cartoon A stronous T-ShirtS",des: "good product ade in VietNam has been recive product best choice 2020",price: "$7.8"},
    {id: 13, image: "../img/products/f2.jpg", brands: "nike", name: "Cartoon A stronous T-ShirtS",des: "good product ade in VietNam has been recive product best choice 2020",price: "$7.8"},
    {id: 14, image: "../img/products/f2.jpg", brands: "nike", name: "Cartoon A stronous T-ShirtS",des: "good product ade in VietNam has been recive product best choice 2020",price: "$7.8"},
    {id: 15, image: "../img/products/f2.jpg", brands: "nike", name: "Cartoon A stronous T-ShirtS",des: "good product ade in VietNam has been recive product best choice 2020",price: "$7.8"},
    {id: 16, image: "../img/products/f2.jpg", brands: "nike", name: "Cartoon A stronous T-ShirtS",des: "good product ade in VietNam has been recive product best choice 2020",price: "$7.8"},
    {id: 17, image: "../img/products/f3.jpg", brands: "nike", name: "Jean blue long young man",des: "good product ade in VietNam has been recive product best choice 2020",price: "$9.9"},
    {id: 18, image: "../img/products/f3.jpg", brands: "nike", name: "Jean blue long young man",des: "good product ade in VietNam has been recive product best choice 2020",price: "$9.9"},
    {id: 19, image: "../img/products/f3.jpg", brands: "nike", name: "Jean blue long young man",des: "good product ade in VietNam has been recive product best choice 2020",price: "$9.9"},
    {id: 20, image: "../img/products/f2.jpg", brands: "nike", name: "Cartoon A stronous T-ShirtS",des: "good product ade in VietNam has been recive product best choice 2020",price: "$7.8"},
    {id: 21, image: "../img/products/f2.jpg", brands: "nike", name: "Cartoon A stronous T-ShirtS",des: "good product ade in VietNam has been recive product best choice 2020",price: "$7.8"},
    {id: 22, image: "../img/products/f2.jpg", brands: "nike", name: "Cartoon A stronous T-ShirtS",des: "good product ade in VietNam has been recive product best choice 2020",price: "$7.8"},
    {id: 23, image: "../img/products/f2.jpg", brands: "nike", name: "Cartoon A stronous T-ShirtS",des: "good product ade in VietNam has been recive product best choice 2020",price: "$7.8"},
    {id: 24, image: "../img/products/f3.jpg", brands: "nike", name: "Jean blue long young man",des: "good product ade in VietNam has been recive product best choice 2020",price: "$9.9"},
    {id: 25, image: "../img/products/f3.jpg", brands: "nike", name: "Jean blue long young man",des: "good product ade in VietNam has been recive product best choice 2020",price: "$9.9"},
    {id: 26, image: "../img/products/f3.jpg", brands: "nike", name: "Jean blue long young man",des: "good product ade in VietNam has been recive product best choice 2020",price: "$9.9"}
]

function renderPro(start, end) {
    let html=``;
    let proContainer = document.querySelector(".pro-container")
    products.slice(start, end).map(function(pro, index) {
          html += `
            <div class="pro" onclick="window.location.href='sproduct.html';">
                    <img src="${pro.image}" alt="">
                    <div class="des">
                        <span class="pro-brands">${pro.brands}</span>
                        <h5 class="pro-name">${pro.name}</h5>
                        <div class="start">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>
                        <h4 class="pro-price">${pro.price}</h4>
                    </div>
                    <a href="#"><i class='bx bx-cart-alt cart'></i></a>
                </div>
            `
            return html;
    })
    proContainer.innerHTML = html;
    console.log(typeof(html));
}

let currentPage=1, start=0, end=8;
let perpage = 8;
//change start and send => render pro
//next page=>change
//pre page=> change
//click btn=>change
function chageCurrentPage(currentPage) {
    start = (currentPage-1)*perpage
    end = currentPage*perpage;
    renderPro(start, end)
}
chageCurrentPage(currentPage)
let numberPage = Math.ceil(products.length / perpage)
//number of button = numberPage
function numberOfButton() {
    let paginations = document.getElementById('pagination')
    let html = `<button class="button-page pre-page preventClick" href="#"><i class='bx bx-left-arrow-alt'></i></button>`;
    for(let i=0; i<numberPage; i++) {
        if(i==0) {
            html+=`<button class="button-outline button-page buttonActive" href="#">${i+1}</button>`
        }else{
            html+=`<button class="button-outline button-page" href="#">${i+1}</button>`
        }
    }
    html+=`<button class="button-page next-page" href="#"><i class='bx bx-right-arrow-alt'></i></button>`
    paginations.innerHTML = html;
}
numberOfButton()

let buttonOutline = document.querySelectorAll('#pagination .button-outline')
let preButton = document.querySelector('.pre-page')
let nextButton = document.querySelector('.next-page')

//remove class active of button before and add active for button current
function buttonActive(buttonItem) {
    document.querySelector('.buttonActive').classList.remove('buttonActive')
    buttonItem.classList.add('buttonActive');
}
//prevent action click next or pre btn if them get limit
function buttonModal() {
    if(currentPage == numberPage) {
        nextButton.classList.add("preventClick")
        preButton.classList.remove("preventClick")
    }else if(currentPage == 1){
        preButton.classList.add("preventClick")
        nextButton.classList.remove("preventClick")
    }else{
        preButton.classList.remove("preventClick")
        nextButton.classList.remove("preventClick")
    }
}
//event next/pre btn click
//increase/descreas index button when click next/pre btn
//1:check to add modal prevent
//2:currentPage = button just click lead to change start and end and render pro after change page
//3:solve if active then add class buttonActive and remove active before
   nextButton.addEventListener('click', ()=> {
     currentPage++;
     buttonModal()
     chageCurrentPage(currentPage)
     buttonActive(buttonOutline[currentPage-1])
   })

   preButton.addEventListener('click', ()=> {
    currentPage--;
     buttonModal()
     chageCurrentPage(currentPage)
     buttonActive(buttonOutline[currentPage-1])
    console.log(currentPage);
  })
// alaway render pro in page 1 first;
//handle click button
function handleButtonOuline() {
    buttonOutline.forEach((buttonItem)=> {
        buttonItem.addEventListener('click', ()=> {
            currentPage = Number(buttonItem.innerHTML);
            buttonModal(currentPage)
            chageCurrentPage(currentPage)
            buttonActive(buttonItem)
        })
    })
}
handleButtonOuline()



   


