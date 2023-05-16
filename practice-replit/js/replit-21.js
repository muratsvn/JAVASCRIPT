// syntax - Etiket adına göre elementleri almak
document.getElementsByTagName('tagname');

const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections (4)
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}


//syntax - Sınıf adına göre elementleri almak
document.getElementsByClassName('classname');

const allTitles2 = document.getElementsByClassName('title')

console.log(allTitles2) //HTMLCollections (3) 
console.log(allTitles2.length) // 3 (burada yanlış yazılmıştı, doğrusu 3 olmalı çünkü 3 class var)

for (let i = 0; i < allTitles2.length; i++) {
  console.log(allTitles2[i]) // prints each elements in the HTMLCollection
}


//syntax - Id'ye göre bir elementi almak
document.getElementById('id')

let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>


// querySelector yöntemi kullanarak elementleri almak
let firstTitle2 = document.querySelector('h1') // select the first available h1 element
console.log(firstTitle2)
let firstTitle3 = document.querySelector('#first-title') // select id with first-title
let firstTitle4 = document.querySelector('.title') // select the first available element with class title

