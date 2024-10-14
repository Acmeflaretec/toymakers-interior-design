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
        'service1': ['images/restorents/abhishek 1.jpg', 'images/restorents/abhishek 2.jpg', 'images/restorents/abhishek 3.jpg', 'images/restorents/4.jpg'],
        'service2': ['images/restorents/brandclub 1.jpg', 'images/restorents/brandclub 2.jpg', 'images/restorents/brandclub 3.jpg', 'images/restorents/brandclub 4.jpg'],
        'service3': ['images/restorents/delfish1.jpg', 'images/restorents/delfish2.jpg', 'images/restorents/delfish3.jpg', 'images/restorents/delfish4.jpg'],
        'service4': ['images/restorents/deumotion 5.jpg', 'images/restorents/deumotion 1.jpg', 'images/restorents/deumotion 3.jpg', 'images/restorents/deumotion 4.jpg', 'images/restorents/deumotion 6.jpg'],
        'service5': ['images/restorents/horticorp1.jpg', 'images/restorents/horticorp2.jpg', 'images/restorents/horticorp3.jpg', 'images/restorents/horticorp4.jpg'],
        'service6': ['images/restorents/kunjikkante1.jpg', 'images/restorents/kunjikkante2.jpg', 'images/restorents/kunjikkante3.jpg', 'images/restorents/kunjikkante4.jpg'],
        'service7': ['images/restorents/old school3.jpg', 'images/restorents/old school1.jpg', 'images/restorents/old school2.jpg', 'images/restorents/old school4.jpg'],
        'service8': ['images/restorents/salwa 1.jpg', 'images/restorents/salwa 2.jpg', 'images/restorents/salwa 3.jpg', 'images/restorents/salwa 4.jpg'],
        'service9': ['images/restorents/cleareye.ai6.jpg', 'images/restorents/cleareye.ai1.jpg', 'images/restorents/cleareye.ai2.jpg', 'images/restorents/cleareye.ai3.jpg', 'images/restorents/cleareye.ai4.jpg', 'images/restorents/cleareye.ai5.jpg', 'images/restorents/cleareye.ai7.jpg'],
        'service10': ['images/restorents/talent orange1.jpg', 'images/restorents/talent orange2.jpg', 'images/restorents/talent orange3.jpg', 'images/restorents/talent orange4.jpg', 'images/restorents/talent orange5.jpg', 'images/restorents/talent orange6.jpg'],
        'service11': ['images/restorents/green1.jpg', 'images/restorents/green2.jpg', 'images/restorents/green3.jpg', 'images/restorents/green4.jpg', 'images/restorents/green5.jpg', 'images/restorents/green6.jpg'],
        'service20': ['images/restorents/DR FACE DENTAL1.jpg', 'images/restorents/DR FACE DENTAL2.jpg', 'images/restorents/DR FACE DENTAL3.jpg', 'images/restorents/DR FACE DENTAL4.jpg','images/restorents/DR FACE DENTAL5.jpg'],

        'service12': ['images/restorents/Cricket shack1.jpg', 'images/restorents/Cricket shack2.jpg', 'images/restorents/Cricket shack3.jpg', 'images/restorents/Cricket shack4.jpg', 'images/restorents/Cricket shack5.jpg', 'images/restorents/Cricket shack6.jpg'],
        
        
        
        
        'service13': ['images/restorents/MR HARI KAIMANAM1.jpg', 'images/restorents/MR HARI KAIMANAM2.jpg', 'images/restorents/MR HARI KAIMANAM3.jpg', 'images/restorents/MR HARI KAIMANAM4.jpg'],
        'service14': ['images/restorents/PRATHIBHA 1.jpg', 'images/restorents/PRATHIBHA 2.jpg', 'images/restorents/PRATHIBHA 3.jpg', 'images/restorents/PRATHIBHA 4.jpg', 'images/restorents/PRATHIBHA 5.jpg', 'images/restorents/PRATHIBHA 6.jpg'],
        'service15': ['images/restorents/RAJESH PEROORKADA1.jpg', 'images/restorents/RAJESH PEROORKADA2.jpg', 'images/restorents/RAJESH PEROORKADA3.jpg'],
        'service16': ['images/restorents/MRS REIBY1.jpg', 'images/restorents/MRS REIBY2.jpg', 'images/restorents/MRS REIBY3.jpg', 'images/restorents/MRS REIBY4.jpg', 'images/restorents/MRS REIBY5.jpg'],
        'service17': ['images/restorents/MRS SANJANA1.jpg', 'images/restorents/MRS SANJANA2.jpg', 'images/restorents/MRS SANJANA3.jpg', 'images/restorents/MRS SANJANA4.jpg','images/restorents/MRS SANJANA5.jpg'],
        'service18': ['images/restorents/MR SHAHUL1.jpg', 'images/restorents/MR SHAHUL2.jpg', 'images/restorents/MR SHAHUL3.jpg', 'images/restorents/MR SHAHUL4.jpg','images/restorents/MR SHAHUL5.jpg','images/restorents/MR SHAHUL6.jpg'],
        'service19': ['images/restorents/SUMESH KOVALAM1.jpg', 'images/restorents/SUMESH KOVALAM2.jpg', 'images/restorents/SUMESH KOVALAM3.jpg', 'images/restorents/SUMESH KOVALAM4.jpg','images/restorents/SUMESH KOVALAM5.jpg'],
        'service21': ['images/New/IMG_7668.jpg', 'images/New/IMG_7667.jpg', 'images/New/IMG_7669.jpg', 'images/New/IMG_7651.jpg','images/New/IMG_7649.jpg','images/New/IMG_7643.jpg','images/New/IMG_7625.jpg','images/New/IMG_7621.jpg'],
        
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
            img.style.width = '250px'; // Set image width to 300px
            img.style.margin = '5px';
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
