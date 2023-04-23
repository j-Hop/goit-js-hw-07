import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

// Create and render gallery items
const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}" data-original-img=${original}>
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
`;

galleryList.innerHTML = galleryItems.map(createGalleryItem).join("");

// Store instances in an array
const array = [];

// Show corresponding instance when image is clicked
galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  const original = event.target
    .closest(".gallery__link")
    .getAttribute("data-original-img");
  const item = basicLightbox.create(`
    <img src="${original}" width="800" height="600">
  `);
  array.push(item); // Add instance to array
  item.show();
  document.addEventListener("keydown", (event) => onEscPress(event, item));
});

// Close instance on Esc key press
const onEscPress = (event, item) => {
  const ESC_KEYCODE = "Escape";
  if (event.code === ESC_KEYCODE) {
    item.close();
   array.splice(array.indexOf(item), 1); // Remove instance from array
    document.removeEventListener("keydown", (event) =>
      onEscPress(event, item)
    );
  }
};