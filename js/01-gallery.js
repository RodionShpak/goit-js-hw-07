import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

galleryRef.innerHTML = addGalleryItemMurkup(galleryItems);
galleryRef.addEventListener("click", onGalleryImageClick);

function addGalleryItemMurkup(gallery) {
  return gallery
    .map((item) => {
      return `<div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
            />
          </a>
          </div>`;
    })
    .join("");
}

function onGalleryImageClick(e) {
  e.preventDefault();

  const IMG_NODE = e.target.nodeName === "IMG";

  if (!IMG_NODE) {
    return;
  } else {
    const originalImage = e.target.dataset.source;
    const popUpImage = createPopUpImageMurkup(originalImage);

    popUpImage.show();
  }
}

function createPopUpImageMurkup(src) {
  const popUp = basicLightbox.create(
    `<img src="${src}" width="1280" height="800">`,
    {
      onShow: (popUp) => {
        window.addEventListener("keydown", onEscClick);
      },
      onClose: (popUp) => {
        window.removeEventListener("keydown", onEscClick);
      },
    }
  );
  function onEscClick(e) {
    if (e.code === "Escape") {
      popUp.close();
    } else {
      return;
    }
  }

  return popUp;
}