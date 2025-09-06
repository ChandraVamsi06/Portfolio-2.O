// Open and close menu
function Close() {
    document.getElementsByClassName('mobile-option')[0].style = "right: -250px;"
}
function Open() {
    document.getElementsByClassName('mobile-option')[0].style = "right: 0px;"
}

// Project cards
const projects = [
    {
        "image": "./assets/images/oryx.jpeg",
        "name": "Oryx",
        "description": "A conceptual design for a next-generation operating system interface with a focus on productivity and aesthetics.",
        "technologies": ["HTML", "CSS", "JavaScript", "BootStrap"],
        "button": { "text": "Open", "onclick": "openOryx()" }
    },
];

const container = document.querySelector('.project-cards');
container.innerHTML = "";

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = "animate-on-scroll";
    card.innerHTML = `
        <div><img src="${project.image}" alt="${project.name}"></div>
        <div>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div>
                <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
            <button type="button" onclick="${project.button.onclick}">${project.button.text}</button>
        </div>
    `;
    container.appendChild(card);
});

function openOryx() {
    window.open("https://chandravamsi06.github.io/Oryx-OS/", "_blank");
}

// skill cards
const skill_card = [
    {
        "icon": "./assets/icons/C.png",
        "name": "C"
    },
    {
        "icon": "./assets/icons/c++.png",
        "name": "C++"
    },
    {
        "icon": "./assets/icons/java.png",
        "name": "Java"
    },
    {
        "icon": "./assets/icons/python.png",
        "name": "Python"
    },
    {
        "icon": "./assets/icons/JS.png",
        "name": "JavaScript"
    },
    {
        "icon": "./assets/icons/html.png",
        "name": "HTML"
    },
    {
        "icon": "./assets/icons/css.png",
        "name": "CSS"
    },
    {
        "icon": "./assets/icons/sql.png",
        "name": "SQL"
    },
    {
        "icon": "./assets/icons/git.png",
        "name": "Git"
    },
    {
        "icon": "./assets/icons/github.png",
        "name": "GitHub"
    },
    {
        "icon": "./assets/icons/windows.png",
        "name": "Windows"
    },
    {
        "icon": "./assets/icons/linux.png",
        "name": "Linux"
    }
]

// dynamically add skill cards
const skillContainer = document.querySelector('.skill-cards');
skill_card.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'card animate-on-scroll';
    card.innerHTML = `
        <img src="${skill.icon}" alt="${skill.name}">
        <p>${skill.name}</p>
    `;
    skillContainer.appendChild(card);
});

// education cards
const edu_card = [
    {
        "education": "B. Tech in Computer Science and Engineering",
        "institute": "Aditya Engineering College, Surampalem",
        "year": "2023 - Present",
    },
    {
        "education": "Intermediate",
        "institute": "Aditya Junior College, Kakinada",
        "year": "2021 - 2023",
    },
    {
        "education": "Class X",
        "institute": "Aditya Public School, Kakinada",
        "year": "2020 - 2021",
    }
]

// dynamically add education cards
const eduContainer = document.querySelector('.edudetails');
edu_card.forEach(edu => {
    const card = document.createElement('div');
    card.className = 'edu-card animate-on-scroll';
    card.innerHTML = `
        <b>${edu.education}</b><br>
        <span>${edu.institute}</span><br>
        <span>${edu.year}</span>
    `;
    eduContainer.appendChild(card);
});

// certificate cards
const cert_card = [
    {
        "name": "C Essentials",
        "issued": "Cisco Networking Academy",
        "function": "viewCEss()"
    },
    {
        "name": "C++ Essentials",
        "issued": "Cisco Networking Academy",
        "function": "viewCPlusEss()"
    },
    {
        "name": "Java Certified Foundations Associate",
        "issued": "Oracle",
        "function": "viewJavaCert()"
    },
    {
        "name": "Python Essentials",
        "issued": "Cisco Networking Academy",
        "function": "viewPythonEss()"
    },
    {
        "name": "HTML and CSS",
        "issued": "IT Specialist",
        "function": "viewHtmlCss()"
    },
    {
        "name": "Red Hat Certified System Administrator",
        "issued": "RedHat",
        "function": "viewRedHatCert()"
    }
]

// dynamically add certificate cards
const certContainer = document.querySelector('.certificates');
cert_card.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card animate-on-scroll';
    card.innerHTML = `
        <b>${cert.name}</b><br>
        <p>${cert.issued}</p>
        <button onclick="${cert.function}">View Certificate</button>
    `;
    certContainer.appendChild(card);
});

// open certificates
function viewCEss() {
    window.location.href = "https://drive.google.com/file/d/1u2Uw49UENxkOof6U8A97u-oo6LjggMGS/view?usp=sharing";
}

function viewCPlusEss() {
    window.location.href = "https://drive.google.com/file/d/1xROxVT5OZta1zV49CHP8SMlq2XS2zJIy/view?usp=sharing";
}

function viewJavaCert() {
    window.location.href = "https://drive.google.com/file/d/1soPECCfGiHMdzpOERsrBWHm5rjOHfVZK/view?usp=sharing";
}

function viewPythonEss() {
    window.location.href = "https://drive.google.com/file/d/1PjgUZUnlTZngAN0cif1RVWTvLQvR-crw/view?usp=sharing";
}

function viewHtmlCss() {
    window.location.href = "https://drive.google.com/file/d/1S_c0jAts2JZ8LJHA9Mf04bViPFAMqRJw/view?usp=sharing";
}

function viewRedHatCert() {
    window.location.href = "https://drive.google.com/file/d/1wWE1DAZFi5VcIYtVHx2_lV5bdft-fUsK/view?usp=sharing";
}


// Coding profiles data
const coding_profiles = [
    {
        "platform": "LeetCode",
        "function": "openLeetCode()"
    },
    {
        "platform": "CodeChef",
        "function": "openCodeChef()"
    },
    {
        "platform": "GeeksForGeeks",
        "function": "openGeeksForGeeks()"
    },
    {
        "platform": "HackerRank",
        "function": "openHackerRank()"
    },
    {
        "platform": "CodeForces",
        "function": "openCodeForces()"
    }
]

// dynamically add coding profile cards
const profileContainer = document.querySelector('.profiles');
coding_profiles.forEach(profile => {
    const card = document.createElement('div');
    card.className = 'profile-card animate-on-scroll';
    card.innerHTML = `
        <b>${profile.platform}</b><br>
        <button onclick="${profile.function}">View Profile</button>
    `;
    profileContainer.appendChild(card);
});

// open coding profiles
function openLeetCode() {
    window.open("https://leetcode.com/u/chandravamsi__sana", "_blank");
}

function openCodeChef() {
    window.open("https://www.codechef.com/users/chandravamsi06", "_blank");
}

function openGeeksForGeeks() {
    window.open("https://www.geeksforgeeks.org/user/chandravamsi__sana/", "_blank");
}

function openHackerRank() {
    window.open("https://www.hackerrank.com/profile/chandravamsisan1", "_blank");
}

function openCodeForces() {
    window.open("https://codeforces.com/profile/SANA_CHANDRA_VAMSI", "_blank");
}

const animatedElements = document.querySelectorAll('.animate-on-scroll');

function handleScroll() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);