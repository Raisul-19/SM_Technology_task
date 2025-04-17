// slider page move on

const slider = document.getElementById('slider');

function slideLeft(sliderId) {
  const slider = document.getElementById(sliderId);
  slider.scrollLeft -= 270;
}

function slideRight(sliderId) {
  const slider = document.getElementById(sliderId);
  slider.scrollLeft += 270;
}



// query page details view

const items = document.querySelectorAll('.query-item');

    items.forEach(item => {
      const header = item.querySelector('.query-header');

      header.addEventListener('click', () => {
        const openItem = document.querySelector('.query-item.active');
        if (openItem && openItem !== item) {
          openItem.classList.remove('active');
          toggleIcon(openItem, false);
        }

        item.classList.toggle('active');
        toggleIcon(item, item.classList.contains('active'));
      });
    });

    function toggleIcon(item, isOpen) {
      const icon = item.querySelector('.query-icon');
      icon.className = isOpen 
        ? 'fa-solid fa-circle-minus query-icon' 
        : 'fa-solid fa-circle-plus query-icon';
    }

