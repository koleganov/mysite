const lightbox = document.querySelector('.lightbox');
const lighboxClose = document.querySelector('.lightbox-close');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxText = document.querySelector('.caption-text');
const lightboxCounter = document.querySelector('.caption-counter');

const portfolioItems = document.querySelectorAll('.portfolio-item'),
      totalPortfolioItem = portfolioItems.length;

let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener('click', function() {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}

function nextItem () {
    if (itemIndex === totalPortfolioItem-1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}

function prevItem () {
    if (itemIndex === 0) {
        itemIndex = totalPortfolioItem-1;
    } else {
        itemIndex--;
    }
    changeItem();
}

function toggleLightbox() {
    lightbox.classList.toggle('open');
}

function changeItem() {
    imgSrc = portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector('h4').innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
}

lightbox.addEventListener('click', function(event) {
    if (event.target === lighboxClose || event.target === lightbox) {
        toggleLightbox();
    }
})

// Aside Responsive

const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavlist = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;

for (i = 0; i < totalNavlist; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function () {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove('back-section');
        }
        
        for (j = 0; j < totalNavlist; j++) {
            if ( navList[j].querySelector('a').classList.contains('active')) {
                allSection[j].classList.add('back-section');
            }
            navList[j].querySelector('a').classList.remove('active');
        }

        this.classList.add('active');
        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerbtn();
        }
    })
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    
    document.querySelector('#'+target).classList.add('active')
}


const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', asideSectionTogglerbtn)
    // asideSectionTogglerbtn();


function asideSectionTogglerbtn () {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open');
    }
}
