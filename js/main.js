function toggleMenu() {
    const navContent = document.querySelector('.nav_content');
    const hamburger = document.getElementById('hamburger');
    const isActive = navContent.classList.toggle('active');
    
    hamburger.classList.toggle('active', isActive); // Rotate hamburger if active
    navContent.style.display = isActive ? 'flex' : 'none'; // Toggle display

    if (!isActive) {
        setTimeout(() => navContent.style.display = 'none', 300); // Smooth hide
    }
    hamburger.innerHTML = isActive ? '&#10005;' : '&#9776;';
}

document.addEventListener('DOMContentLoaded', () => {
    const aboutBoxes = document.querySelectorAll('.about-box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, { threshold: 0.1 });

    aboutBoxes.forEach(box => {
        observer.observe(box);
    });
});


// document.querySelector('.bg_color_change').addEventListener('click', function () {
//     const colors = ['#1E1E1E', '#2E2E2E', '#3E3E3E', '#4E4E4E', '#121212'];
//     document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
// });

document.addEventListener('DOMContentLoaded', function (){
    var typeData = new Typed(".role", {
        strings: [
            "Student",
            "Programmer",
            "Artist",
            "Adventurer",
            "Learner",
            "Explorer",
            
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 100,
    });
});

const skills = [
    { title: "Python", imageSrc: "images/icons8-python-94.png" },
    { title: "Java", imageSrc: "images/3d-fluency-java.png" },
    { title: "HTML", imageSrc: "images/icons8-html-128.png" },
    { title: "CSS", imageSrc: "images/icons8-css-96.png" },
    { title: "JavaScript", imageSrc: "images/icons8-js-64.png" },
    { title: "ReactJS", imageSrc: "images/react.png"},
    { title: "Flask", imageSrc: "images/icons8-flask-96.png" },
    { title: "Django", imageSrc: "images/django3.png" },
    { title: "Pandas", imageSrc: "images/icons8-pandas-96.png" },
    { title: "Numpy", imageSrc: "images/icons8-numpy-96.png" },
    { title: "Matplotlib", imageSrc: "images/icons8-graph-64.png" },
   
];

document.addEventListener('DOMContentLoaded', () => {
    const skillsContainer = document.querySelector('.skill_box');
    
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill';
        skillItem.innerHTML = 
            `<div class="skill-image">
                <img src="${skill.imageSrc}" alt="${skill.title}">
            </div>
            <span class="skill-title">${skill.title}</span>`
        ;
        skillsContainer.appendChild(skillItem);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const cube = document.querySelector('.cube');
    let xAngle = 0;
    let yAngle = 0;

    // Function to rotate the cube
    function rotateCube() {
        // xAngle += 90; // Increment the X rotation
        yAngle += 90; // Increment the Y rotation
        cube.style.transform = `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`; // Apply the rotation
    }

    // Set an interval to rotate the cube continuously
    setInterval(rotateCube, 2000); // Rotate every 20 milliseconds
});




// script.js

function navigateToSection(sectionId) {
    // Check if the section exists on the current page
    const section = document.getElementById(sectionId);
console.log(section)
    if (section) {
        // If section exists, scroll to it smoothly
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        // If not on the correct page, navigate to index.html with hash
        window.location.href = `index.html#${sectionId}`;
    }
}







window.addEventListener('DOMContentLoaded', () => {
    const artworks = document.querySelectorAll('.art');

    // Determine the direction each artwork should enter from
    artworks.forEach((art, index) => {
        art.classList.add(index % 2 === 0 ? 'enter-left' : 'enter-right');
    });

    // Intersection Observer options
    const observerOptions = {
        threshold: 0.3 // Trigger when a portion of the element is in view
    };

    // Intersection Observer callback
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('enter-center');
            } else {
                // Reset classes when out of view for re-triggering animation on re-entry
                entry.target.classList.remove('enter-center');
                entry.target.classList.remove('enter-left', 'enter-right');
                
                // Re-apply initial direction class
                const index = Array.from(artworks).indexOf(entry.target);
                entry.target.classList.add(index % 2 === 0 ? 'enter-left' : 'enter-right');
            }
        });
    }, observerOptions);

    artworks.forEach(art => observer.observe(art));
});
