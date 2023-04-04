AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "ASCE-Concrete Canoe",
    cardImage: "assets/images/project-page/asce.png",
    description: "The team bagged All India 2nd Rank at the national round of World Wide renowned Concrete Canoe Competition of ASCE in March 2022",
    // tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    tagimg: "",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Land cover change monitoring by the aid of satellite imagery for analysis of urbanization impact on water quality",
    cardImage: "assets/images/project-page/lulc.png",
    description: "This study aims to monitor land cover change using satellite imagery to analyze the impact of urbanization on water quality. The study utilizes remote sensing techniques to monitor changes in land use over time and assess how urbanization affects the quality of water bodies. The results of this study can be used to inform policy decisions related to urban development and water management.",
    tagimg: "",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "DASK-Heat of Hydration",
    cardImage: "assets/images/project-page/dask.png",
    description: "DASK is an instrument used to measure the heat of hydration of cementitious materials. The instrument works by mixing a sample of cement with water, and then measuring the heat released as the mixture sets and hardens. The data obtained from the DASK can be used to study the chemical reactions taking place during the setting and hardening process of cement, and to optimize the composition of cement mixtures for various applications.",
    tagimg: "",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Computer vision and sensor based concrete crack detection system",
    cardImage: "assets/images/project-page/crack.png",
    description: "A computer vision and sensor-based concrete crack detection system is an automated solution for identifying cracks in concrete structures using visual and sensor data. The system typically involves a combination of cameras and sensors that capture images and data on the surface of concrete structures, which are then analyzed using computer vision algorithms. The system can detect cracks of various sizes and shapes and provide real-time monitoring of the structure's condition, allowing for timely maintenance and repair. This technology is particularly useful in ensuring the safety and integrity of critical infrastructure such as bridges, tunnels, and buildings.",
    tagimg: "",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Self Healing Concrete",
    cardImage: "assets/images/project-page/self.png",
    description: "Self-healing concrete is a type of concrete that has the ability to repair its own cracks and damage without any external intervention. This is achieved by incorporating microcapsules or fibers containing healing agents such as calcium carbonate, bacteria, or polymers into the concrete mixture. When a crack occurs, the capsules or fibers break open and release the healing agent, which then reacts with the surrounding environment to fill the crack and restore the material's structural integrity. Self-healing concrete has the potential to greatly extend the lifespan of concrete structures and reduce maintenance costs over time.",
    tagimg: "",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Working model of cable suspension bridge",
    cardImage: "assets/images/project-page/cable.png",
    description: "A working model of a cable suspension bridge that can support a load of 1000kg is a scaled-down version of an actual suspension bridge. The model typically includes a deck, cables, towers, and anchorages that are all designed to replicate the geometry and load distribution of a real suspension bridge. The materials used in the model can vary, but often include wood, steel, or other sturdy materials. The model is tested by gradually applying weight to the deck until it reaches the maximum load of 1000kg, simulating the load capacity of an actual suspension bridge. This type of model can be used to teach students about the mechanics and engineering principles behind cable suspension bridges.",
    tagimg: "",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Automatic separation and disposal of waste.",
    cardImage: "assets/images/project-page/wsam.png",
    description: "A model of automatic separation and disposal of waste is an innovative solution that uses advanced technology to sort and process waste more efficiently. The model typically includes sensors, conveyors, and robotic arms that work together to identify and separate different types of waste, such as plastic, paper, and metal. Once separated, the waste is compacted and transported to the appropriate disposal or recycling facility. This model is designed to reduce the amount of waste that ends up in landfills and promote more sustainable waste management practices. It is particularly useful in large urban areas where waste disposal is a significant challenge.",
    tagimg: "",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Energy production using rice husk.",
    cardImage: "assets/images/project-page/rice.png",
    description: "A small model of energy production using rice husk can be a simple system that converts waste rice husks into usable energy. The model may include a combustion chamber, a heat exchanger, and a turbine that generate electricity from the energy produced by burning the rice husks. The process involves loading the rice husks into the combustion chamber, which then heats up water in the heat exchanger to produce steam. The steam then drives the turbine to generate electricity. This model is particularly useful for rural communities that have a large amount of rice husks but limited access to electricity. It promotes the use of renewable energy and reduces waste by converting it into a useful resource.",
    tagimg: "",
    Previewlink: "",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
