const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Direct access
let cta = document.getElementById('cta-img');
cta.src = siteContent['cta']['img-src'];

//Chain with query Selector
document.querySelector("#middle-img").setAttribute('src', siteContent['main-content']['middle-img-src']);


// Array.from and forEach
let nav = document.querySelector('nav');
Array.from(nav.children).forEach((element, i) => {
  element.textContent = siteContent.nav[`nav-item-${i + 1}`];
  element.style.color = 'green';
});

let ctaText = document.querySelector('.cta-text');
ctaText.children[0].textContent = siteContent.cta.h1;
ctaText.children[1].textContent = siteContent.cta.button;

let features = document.querySelector('.top-content');
features.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
features.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
features.children[0].children[1].textContent = siteContent['main-content']['features-content'];
features.children[1].children[1].textContent = siteContent['main-content']['about-content'];

let bottom = document.querySelector(".bottom-content");
bottom.children[0].children[0].textContent = siteContent['main-content']['services-h4'];
bottom.children[1].children[0].textContent = siteContent['main-content']['product-h4'];
bottom.children[2].children[0].textContent = siteContent['main-content']['vision-h4'];
bottom.children[0].children[1].textContent = siteContent['main-content']['services-content'];
bottom.children[1].children[1].textContent = siteContent['main-content']['product-content'];
bottom.children[2].children[1].textContent = siteContent['main-content']['vision-content'];

let contact = document.querySelector('.contact');
contact.children[0].textContent = siteContent.contact['contact-h4'];
contact.children[1].textContent = siteContent.contact.address;
contact.children[2].textContent = siteContent.contact.phone;
contact.children[3].textContent = siteContent.contact.email;

let footer = document.querySelector('footer');
footer.querySelector('p').textContent = siteContent.footer.copyright;

let search = document.createElement('a');
let login = document.createElement('a');
search.href = "#";
search.textContent = "Search";
login.href = "#";
login.textContent = "Log In"
nav.appendChild(search);
nav.prepend(login);
