// Page turn

const pageTurnBtn = document.querySelectorAll('.nxtprev-btn ');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

// contact me

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        
        }, (index + 1) * 200 + 100)
    })
}

// Reverse func

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

// Profile

const backprofBtn = document.querySelector('.back-prof');

backprofBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        
        }, (index + 1) * 200 + 100)
    })
}


// opening Animation

const coverRight = document.querySelector('.cover.cover-right')
const pageLeft = document.querySelector('.book-page.page-left')

setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200)

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    
    }, (index + 1) * 200 + 2100)
})

// slider

var slide_img = document.querySelector('.slide-img');
var infoTitle = document.querySelector('.info-title h3');
var infoDescription = document.querySelector('.info-box p');

var img = ['viscoz.png', 'res.png', 'bcs.jpg', 'bcnhs.png', 'UC.jpg'];
var projectInfo = [
    { name: 'COE of Vizcos Corp.', previewLink: '#', description: "In July 2022, I landed my first job at the Vizocs, serving as a barista and waiter for a year. This experience provided valuable insights into the company's workings. Through laughter, heartbreak, and stress, the journey was challenging yet fulfilling. I've grown significantly, cherishing the lessons learned during this impactful year." },
    { name: 'Diploma of my kindergarten days', previewLink: '#', description: 'I completed my kindergarten at Roxas Elementary School from 2009 to 2010, located in Campo Sioco, where we used to live' },
    { name: 'Dilpoma of my elementary days', previewLink: '#', description: 'I completed my elementary education at Baguio Central School from 2010 to 2016. It is situated on Yandoc Street. During that time, my family moved to a different apartment, and I completed my elementary studies there.' },
    { name: 'Dilpoma of my highschool days', previewLink: '#', description: "I completed my high school education at Baguio City National High School from 2016 to 2022, located on Governor Pack Road. Unfortunately, I didn't fully enjoy my senior high days due to the pandemic. My academic track focused on Automotive studies." },
    { name: 'Units of my university', previewLink: '#', description: "After working at Vizcos for a year, I pursued a Bachelor's degree in Computer Science at the University of the Cordillera. However, after completing the first semester, I decided to switch to another course due to personal reasons." },
];

var i = 0;

function prev() {
    if (i <= 0) i = img.length;
    i--;
    setImgAndInfo();
}

function next() {
    if (i >= img.length - 1) i = -1;
    i++;
    setImgAndInfo();
}

// Add these functions at the end of your JavaScript code
function openModal() {
    document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

// Modify the setImgAndInfo function to use image compression
function setImgAndInfo() {
    // Create a new instance of the image compressor
    var imageCompressor = new ImageCompressor();

    // Load the original image
    var originalImage = new Image();
    originalImage.src = 'img/' + img[i];

    // Compress the image and set it as the source of the slide_img element
    imageCompressor.compress(originalImage, { quality: 0.6 }).then(function (result) {
        slide_img.src = result;
    });

    infoTitle.textContent = projectInfo[i].name;
    infoDescription.textContent = projectInfo[i].description;

    var previewLink = document.querySelector('.info-title a');
    previewLink.onclick = function (event) {
        event.preventDefault(); // Prevent the default behavior of the link
        openModal();
        document.getElementById('modalImage').src = 'img/' + img[i];
    };
}

// Initial setup
setImgAndInfo();
