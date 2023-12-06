import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createGalleryMakeup(items) {
  return items
    .map(
      (items) =>
        `<li class="gallery__item">
    <a class"gallery__link" href="${item.original}">
    <img class="gallery__image"
    src="${item.preview}"
    alt=${item.description}"/>
    <a/>
    </li> `
    )
    .join("");
}

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.innerHTML = createGalleryMakeup(galleryItems);

new simpleLightbox(".gallery__link", {
  captionsdata: "alt",
  captionDelay: 250,
});
