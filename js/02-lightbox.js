import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = createGalleryMurkup(galleryItems);
galleryRef.innerHTML = galleryMarkup;

const gallery = new SimpleLightbox(".gallery  a", {
  scrollZoom: false,
  captionsData: "alt",
  captionDelay: 250,
});

galleryRef.addEventListener("click", onGalleryImageClick);

function createGalleryMurkup(gallery) {
  return gallery
    .map((image) => {
      return `
        <a class="gallery__item" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
        </a>
        `;
    })
    .join("");
}

function onGalleryImageClick(e) {
  e.preventDefault();

  const imageEl = e.target.nodeName;

  if (!imageEl) {
    return;
  } else {
    gallery;
  }
}