// JavaScript function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll behavior
    });
}

// Show the button when user scrolls down
window.onscroll = function () {
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
//         'service1': ['images/m1.jpg', 'images/m2.jpg', 'images/m3.jpg'],
//         'service2': ['images/m4.jpg', 'images/m5.jpg', 'images/m6.jpg'],
//         'service3': ['images/m7.jpg', 'images/m8.jpg', 'images/m9.jpg'],
//         'service4': ['images/m2.jpg', 'images/m4.jpg', 'images/m8.jpg']
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



function showPopup(serviceName) {
    const serviceImages = {
        'service1': ['images/m1.jpg', 'images/m2.jpg', 'images/m3.jpg'],
        'service2': ['images/m4.jpg', 'images/m5.jpg', 'images/m6.jpg'],
        'service3': ['images/m7.jpg', 'images/m8.jpg', 'images/m9.jpg'],
        'service4': ['images/m2.jpg', 'images/m4.jpg', 'images/m8.jpg']
    };

    const images = serviceImages[serviceName];

    if (images && images.length > 0) {
        const popup = document.getElementById('popup');
        popup.innerHTML = '';

        // Create close button
        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.classList.add('popup-close');
        closeButton.addEventListener('click', closePopup);
        popup.appendChild(closeButton);

        images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = serviceName;
            img.style.width = '300px'; // Set image width to 300px
            img.style.marginBottom = '10px';
            popup.appendChild(img);
        });

        popup.style.display = 'block';
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}




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




// let glide;

// function showPopup(serviceName) {
//     const serviceImages = {
//                 'service1': ['images/m1.jpg', 'images/m2.jpg', 'images/m3.jpg'],
//                 'service2': ['images/m4.jpg', 'images/m5.jpg', 'images/m6.jpg'],
//                 'service3': ['images/m7.jpg', 'images/m8.jpg', 'images/m9.jpg'],
//                 'service4': ['images/m2.jpg', 'images/m4.jpg', 'images/m8.jpg']
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
//         if (!glide) {
//             glide = new Glide('.glide', {
//                 type: 'carousel',
//                 startAt: 0,
//                 perView: 1
//             });

//             glide.mount();

//             const nextButton = document.createElement('button');
//             nextButton.textContent = '>';
//             nextButton.classList.add('glide__next');
//             nextButton.addEventListener('click', () => {
//                 glide.go('>');
//             });

//             const prevButton = document.createElement('button');
//             prevButton.textContent = '<';
//             prevButton.classList.add('glide__prev');
//             prevButton.addEventListener('click', () => {
//                 glide.go('<');
//             });

//             const closeButton = document.createElement('button');
//             closeButton.textContent = 'X';
//             closeButton.classList.add('popup-close');
//             closeButton.addEventListener('click', closePopup);

//             const popup = document.getElementById('popup');
//             popup.appendChild(nextButton);
//             popup.appendChild(prevButton);
//             popup.appendChild(closeButton);
//         }

//         const popup = document.getElementById('popup');
//         popup.style.display = 'block';
//     }
// }

// function closePopup() {
//     const popup = document.getElementById('popup');
//     popup.style.display = 'none';

//     if (glide) {
//         glide.destroy();
//         glide = null;
//     }
// }








const photos = Array.from(document.getElementsByClassName("photo"));
const photoWrapper = document.getElementById("photoWrapper");

let count = 0;
photos.forEach((photo) => {
    count++;
    if (count % 2) {
        photo.classList.add("even");
    }
});

photoWrapper.addEventListener("scroll", () => {
    photos.forEach(checkPosition);
});

function checkPosition(photo) {
    if (photo.getBoundingClientRect().right - 4 <= 0) {
        photo.remove();
        photoWrapper.append(photo);
        photoWrapper.scrollLeft = 0;
        return;
    }
}

function infiniteScroll() {
    photoWrapper.scrollLeft++;
    requestAnimationFrame(infiniteScroll);
}

infiniteScroll();
