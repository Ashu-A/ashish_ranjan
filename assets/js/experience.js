AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Founder",
    cardImage: "assets/images/experience-page/trp.png",
    place: "TablePey",
    time: "",
    desp: "<p style='font-size: medium'>TablePey - The restaurant technology company. It provides efficient and effective software solutions to restaurants of all sizes. From ordering systems to inventory management tools, it helps streamline operations and enhance the overall customer experience. Our goal is to help restaurants thrive in the competitive and ever-evolving food industry.<p>",
  },
  {
    title: "Founder",
    cardImage: "assets/images/experience-page/elite.png",
    place: "Elite Cafe",
    time: "",
    desp: "<p style='font-size: medium'>Elite Cafe serve up delicious coffee and light bites in a relaxed and friendly atmosphere. Whether you're looking for a quick pick-me-up on your way to work, or a place to unwind with friends over a cup of tea, Elite Cafe got you covered. Elite Cafe offers a great taste of our warm hospitality and tasty treats!</p>",
  },
  {
    title: "Associate Consultant in Smart Integration (EDI)",
    cardImage: "assets/images/experience-page/Bcone.png",
    place: "Bristlecone",
    time: "",
    desp: "<li>Technical expertise in Smart Integration (EDI) technologies.</li><li>Strong communication skills with clients.</li><li>Effective problem-solving abilities as part of a team</li>",
  },
  {
    title: "Structural Engineer",
    cardImage: "assets/images/experience-page/dar.png",
    place: "Dar Al-Handasah",
    time: "",
    desp: "<li>Proficient in structural analysis software such as ETABS, SAFE, SAP2000, and STAAD.Pro.</li><li>Effective project management skills working with cross-functional teams to ensure timely and budget-friendly delivery.</li><li>Strong technical expertise in structural engineering and knowledge of design codes and standards.</li>",
  },
  {
    title: "Jr. Site Engineer",
    cardImage: "assets/images/experience-page/sara.png",
    place: "Sarswati Techinfra.pvt.ltd",
    time: "",
    desp: "<li>Strong technical knowledge in civil engineering and construction processes and materials.</li><li>Effective communication skills with contractors, subcontractors, and clients to ensure successful completion of construction projects.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Django Developer at Createbytes",
    cardImage: "assets/images/experience-page/cb.png",
    description:
      "Worked as a skilled Django Developer at CreateBytes, With a strong grasp of the framework, creative problem-solving abilities, and effective collaboration skills.",
  },
  {
    title: "Civil Engineering Consultant at Softusvista",
    cardImage: "assets/images/experience-page/sv.png",
    description:
      "My innovative civil engineering formulas improved accuracy and efficiency in complex calculations, contributing to successful project outcomes.",
  },
  {
    title: "Campus Ambassador at eArth Samvarta",
    cardImage: "assets/images/experience-page/esf.png",
    description:
      "I promoted environmental awareness, built relationships with stakeholders, and developed valuable leadership skills.",
  },
  {
    title: "Student Intern at Symbiosis Institute of Technology",
    cardImage: "assets/images/experience-page/symbi.png",
    description:
      "I improved my research, collaboration, presentation, and scientific writing skills by working on projects and presenting my findings.",
  },
  {
    title: "Student Intern at sarswati techinfra.pvt.ltd",
    cardImage: "assets/images/experience-page/sars.png",
    description:
      "I had hands-on experience with site inspections, quality control, and assisting senior engineers in construction plan design and review.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Capomaestro 2020",
    subtitle: "Technical Head",
    image: "assets/images/experience-page/capo.png",
    desp: "",
    href: "",
  },
  {
    title: "Capomaestro 2021",
    subtitle: "Capomaestro Head",
    image: "assets/images/experience-page/capo.png",
    desp: "",
    href: "",
  },
  {
    title: "Capomaestro 2022",
    subtitle: "Student Mentor",
    image: "assets/images/experience-page/capo.png",
    desp: "",
    href: "",
  },
  {
    title: "TTC-Anchorage",
    subtitle: "Founder and Admin head",
    image: "assets/images/experience-page/ttc.png",
    desp: "",
    href: "",
  },
  {
    title: "ASCE-Students Chapter",
    subtitle: "Founder and Chairperson",
    image: "assets/images/experience-page/asce.png",
    desp: "",
    href: "",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
