function openNav() {
  document.getElementById('sideNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('sideNav').style.display = 'none';
}

openNav();
closeNav();

const speaker = [
  {
    id: 1,
    img: 'assests/speakers/danai.webp',
    name: 'Danai Gurira',
    job: 'American actress',
    descripition: 'FEBRUARY 26, 2023 IN LOS ANGELES, CALIFORNIA',
  },

  {
    id: 2,
    img: 'assests/speakers/halle.webp',
    name: 'Halle Bailey',
    job: 'American actress',
    descripition: 'FEBRUARY 04, 2023 IN LOS ANGELES, CALIFORNIA.',
  },

  {
    id: 3,
    img: 'assests/speakers/Johnson.webp',
    name: 'Dwayne Johnson',
    job: 'American actor',
    descripition: 'FEBRUARY 05, 2023 IN LOS ANGELES, CALIFORNIA.',
  },

  {
    id: 4,
    img: 'assests/speakers/jordan.webp',
    name: 'Michael B. Jordan',
    job: 'American actor',
    descripition: 'FEBRUARY 15, 2023 IN PARIS LONDON, ENGLAND.',
  },

  {
    id: 5,
    img: 'assests/speakers/majors.webp',
    name: 'Jonathan Majors',
    job: 'American actor',
    descripition: 'MARCH 05, 2023 IN WEST HOLLYWOOD, CALIFORNIA.',
  },

  {
    id: 6,
    img: 'assests/speakers/jannelle.webp',
    name: 'Janelle Monáe',
    job: 'American singer',
    descripition: 'OCTOBER 26, 2022 IN HOLLYWOOD, CALIFORNIA.',
  },
];

const wrapSpeak = (id, img, name, job, descripition) => `
<div class="feature">
          <img src="${img}" alt="jannella-img">
          <div class="feat flex-center">
            <h3>${name}</h3>
            <h4>${job}</h4>
            <p>${descripition}</p>
          </div>
        </div>`;

speaker.forEach((a) => {
  const speakCont = document.getElementById('contspeak');
  const htmlToInsert = wrapSpeak(a.id, a.img, a.name, a.job, a.descripition);
  const theDiv = document.createElement('div');
  theDiv.innerHTML = htmlToInsert;
  speakCont.appendChild(theDiv);
});
