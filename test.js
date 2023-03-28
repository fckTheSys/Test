//Ищем капчу описание в зеро блоке 
const capt_item = Array.from(document.querySelectorAll('.copy_my_capt'));
console.log(capt_item);

for ( let i = 0; i <capt_item.length; i++) {
const arr = capt_item[i];
const textNode = document.createTextNode(capt_item[i].textContent);
capt_item[i] = textNode.textContent;
};

let capt_to_paste = document.querySelectorAll('.capt_paste');
for (let i = 0; i < capt_to_paste.length; i++) {
capt_to_paste[i].textContent = capt_item[i];
};
//вставялем в нужную область

const images = Array.from(imageContainer.querySelectorAll('img'));
const slideshow = document.querySelector('.slideshow');

for (let i = 0; i < images.length; i++) {
  const img = document.createElement('img');
  img.src = images[i].src;
  slideshow.appendChild(img);
}