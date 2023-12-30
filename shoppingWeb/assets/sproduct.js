// const smartPhones = ['iphone', 'samsung', 'huawei', 'oppo'];
// smartPhones.shift()
// console.log(smartPhones);
//(3) ['samsung', 'huawei', 'oppo']






















//change main img by list small mg
let mainImg = document.getElementById('mainImg')
console.log(mainImg);
let smallImgs = document.querySelectorAll(".small-img-col")
smallImgs.forEach((smallImg)=> {
    smallImg.addEventListener('click', ()=> {
    let imgItem = smallImg.querySelector('.small-img')
      mainImg.src = imgItem.src
   })
})

