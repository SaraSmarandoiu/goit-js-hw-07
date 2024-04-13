import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
  
    function createGalleryItem(item) {
      const li = document.createElement('li');
      li.classList.add('gallery__item');
  
      const link = document.createElement('a');
      link.classList.add('gallery__link');
      link.href = item.original;
  
      const image = document.createElement('img');
      image.classList.add('gallery__image');
      image.src = item.preview;
      image.alt = item.description;
  
      link.appendChild(image);
      li.appendChild(link);
  
      return li;
    }
  
    function initializeLightbox() {
      new SimpleLightbox('.gallery a', {
        captionsData: 'alt', 
        captionDelay: 250 
      });
    }
  
    galleryItems.forEach(item => {
      const galleryItem = createGalleryItem(item);
      gallery.appendChild(galleryItem);
    });
  
    initializeLightbox();
  });

console.log(galleryItems);
