  // JavaScript function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll behavior
    });
}

// Show the button when user scrolls down
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById("scroll-to-top");
    var wts = document.getElementById("whatsapp-icon");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
        wts.style.display = "block";
    } else {
        btn.style.display = "none";
        wts.style.display = "none";
    }
}










// function showPopup(serviceName) {
//     const serviceImages = {
//         'service1': ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'],
//         'service2': ['service2_1.jpg', 'service2_2.jpg', 'service2_3.jpg']
//     };

//     const images = serviceImages[serviceName];

//     if (images && images.length > 0) {
//         const popup = document.getElementById('popup');
//         popup.innerHTML = ''; 
//         images.forEach(imageUrl => {
//             const img = document.createElement('img');
//             img.src = imageUrl;
//             img.alt = serviceName;
//             img.style.width = '100%';
//             img.style.marginBottom = '10px';
//             popup.appendChild(img);
//         });
//         popup.style.display = 'block';
//     }
// }



// function showPopup(serviceName) {
//     const serviceImages = {
//         'service1': ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'],
//         'service2': ['images/1.jpg', 'images/2.jpg', 'images/3.jpg']
//     };

//     const images = serviceImages[serviceName];

//     if (images && images.length > 0) {
//         const popupCarousel = document.getElementById('popup-carousel');
//         popupCarousel.innerHTML = ''; 
//         images.forEach(imageUrl => {
//             const slide = document.createElement('li');
//             slide.classList.add('glide__slide');

//             const img = document.createElement('img');
//             img.src = imageUrl;
//             img.alt = serviceName;
//             img.classList.add('popup-image');

//             slide.appendChild(img);
//             popupCarousel.appendChild(slide);
//         });

//         const glide = new Glide('.glide', {
//             type: 'carousel',
//             startAt: 0,
//             perView: 1
//         });
//         glide.mount();
//         const popup = document.getElementById('popup');
//         popup.style.display = 'block';
//     }
// }




let glide; // Declare Glide.js instance variable

function showPopup(serviceName) {
    const serviceImages = {
                'service1': ['images/m1.jpg', 'images/m2.jpg', 'images/m3.jpg'],
                'service2': ['images/m4.jpg', 'images/m5.jpg', 'images/m6.jpg'],
                'service3': ['images/m7.jpg', 'images/m8.jpg', 'images/m9.jpg'],
                'service4': ['images/m2.jpg', 'images/m4.jpg', 'images/m8.jpg']
    };

    const images = serviceImages[serviceName];

    if (images && images.length > 0) {
        const popupCarousel = document.getElementById('popup-carousel');
        popupCarousel.innerHTML = ''; // Clear previous carousel content

        // Create carousel slides for each image
        images.forEach(imageUrl => {
            const slide = document.createElement('li');
            slide.classList.add('glide__slide');

            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = serviceName;
            img.classList.add('popup-image');

            slide.appendChild(img);
            popupCarousel.appendChild(slide);
        });

        // Initialize Glide.js carousel
        if (!glide) {
            glide = new Glide('.glide', {
                type: 'carousel',
                startAt: 0,
                perView: 1
            });

            glide.mount();

            // Add navigation buttons
            const nextButton = document.createElement('button');
            nextButton.textContent = '>';
            nextButton.classList.add('glide__next');
            nextButton.addEventListener('click', () => {
                glide.go('>');
            });

            const prevButton = document.createElement('button');
            prevButton.textContent = '<';
            prevButton.classList.add('glide__prev');
            prevButton.addEventListener('click', () => {
                glide.go('<');
            });

            const closeButton = document.createElement('button');
            closeButton.textContent = 'X';
            closeButton.classList.add('popup-close');
            closeButton.addEventListener('click', closePopup);

            const popup = document.getElementById('popup');
            popup.appendChild(nextButton);
            popup.appendChild(prevButton);
            popup.appendChild(closeButton);
        }

        // Display the popup
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';

    // Reset Glide.js instance when closing popup
    if (glide) {
        glide.destroy();
        glide = null;
    }
}