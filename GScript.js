
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});



window.addEventListener('scroll', function() {
    var headerText = document.getElementById('headerText');
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');
    var section4 = document.getElementById('section4');
    var section5 = document.getElementById('section5');
    var section6 = document.getElementById('section6');
    var section7 = document.getElementById('section7');

    if (window.scrollY >= section1.offsetTop && window.scrollY < section2.offsetTop) {
        headerText.innerText = 'Paradise';
    } else if (window.scrollY >= section2.offsetTop && window.scrollY < section3.offsetTop) {
        headerText.innerText = 'Aaru';
    } else if (window.scrollY >= section3.offsetTop && window.scrollY < section4.offsetTop) {
        headerText.innerText = '極樂';
    } else if (window.scrollY >= section4.offsetTop && window.scrollY < section5.offsetTop) {
        headerText.innerText = 'Valhalla';
    } else if (window.scrollY >= section5.offsetTop && window.scrollY < section6.offsetTop) {
        headerText.innerText = 'Magmell';
    } else if (window.scrollY >= section6.offsetTop && window.scrollY < section7.offsetTop) {
        headerText.innerText = 'Heaven';
    } else if (window.scrollY >= section7.offsetTop) {
        headerText.innerText = 'Elysion';
    } else {
        headerText.innerText = 'Paradise';
    }
});

window.addEventListener('scroll', function() {
    var headerText = document.getElementById('headerText2');
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');
    var section4 = document.getElementById('section4');
    var section5 = document.getElementById('section5');
    var section6 = document.getElementById('section6');
    var section7 = document.getElementById('section7');

    if (window.scrollY >= section1.offsetTop && window.scrollY < section2.offsetTop) {
        headerText2.innerText = 'Paradise';
    } else if (window.scrollY >= section2.offsetTop && window.scrollY < section3.offsetTop) {
        headerText2.innerText = 'Aaru';
    } else if (window.scrollY >= section3.offsetTop && window.scrollY < section4.offsetTop) {
        headerText2.innerText = '極樂';
    } else if (window.scrollY >= section4.offsetTop && window.scrollY < section5.offsetTop) {
        headerText2.innerText = 'Valhalla';
    } else if (window.scrollY >= section5.offsetTop && window.scrollY < section6.offsetTop) {
        headerText2.innerText = 'Magmell';
    } else if (window.scrollY >= section6.offsetTop && window.scrollY < section7.offsetTop) {
        headerText2.innerText = 'Heaven';
    } else if (window.scrollY >= section7.offsetTop) {
        headerText2.innerText = 'Elysion';
    } else {
        headerText2.innerText = 'Paradise';
    }

   
});


