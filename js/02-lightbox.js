import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

const items = [];

galleryItems.forEach(({ preview, original, description }) => {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery__item");

const link = document.createElement("a");
link.classList.add("gallery__link");
link.href = original;

const image = document.createElement("img");
image.classList.add("gallery__image");
image.src = preview;
image.alt = description;

link.append(image);
galleryItem.append(link);
items.push(galleryItem);
});

galleryList.append(...items);

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData:"alt",
    captionDelay:250,
});



console.log(galleryItems);

