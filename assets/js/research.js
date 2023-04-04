/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Permeability of A Composite Seawall: Effect of the Orientation of Gaps in the Structure",
    authors:
      "Vaishnavi Dabir,Ashish Ranjan, Sonam Deki ,Kunal Agarwal ,Kanchan Khare",
    conferences:
      "IOP Conference Series: Earth and Environmental Science",
    researchYr: 2020,
    citebox: "popup1",
    image: "assets/images/research-page/rec1.png",
    citation: {
      vancouver:
        "Vaishnavi Dabir,Ashish Ranjan, Sonam Deki ,Kunal Agarwal ,Kanchan Khare",
    },
    abstract:
      "A Seawall requires reflecting and dissipating entire wave energy with zero transmission. The permeability would significantly affect its hydraulic stability under wave loads. Thus, the permeability of a structure changes with the material and consequently a variation in the composite structure may give a different perspective on the hydraulic performance of a seawall altogether. As a first step towards establishing the composite seawall, a comprehensive permeability test is performed as a preliminary assessment of hydraulic conductivity. In the current research, a bag made of non-woven geotextile polymer filled with sand and a roll of non-woven needle punched coir geotextile is investigated. A total number of 20 model tests were performed by varying the orientation and positions of the material composites and thereby the gaps in the structure. The results are noted and future research possibilities into the design and development of a composite seawall as an alternative to traditional seawall are thus presented.",
    absbox: "absPopup1",
  },

  {
    title: "AI-driven safety checks for ladders used on construction sites",
    authors: "Shalaka K. Hire ,Ashish Ranjan ,Kirti Ruikar ,Sayali Sandbhor",
    conferences:
      "IOP Conference Series: Earth and Environmental Science",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/rec2.png",
    citation: {
      vancouver:
        "Shalaka K. Hire ,Ashish Ranjan ,Kirti Ruikar ,Sayali Sandbhor",
    },
    abstract:
      "Construction plays an integral part in the social and economic development of countries worldwide. Construction site safety is a crucial concern in both developed and developing countries. Because the preponderance of safety practices is mitigation-oriented rather than prevention-oriented, the construction industry has poor safety and health conditions. Falls are the primary cause of accidents involving roof and ladder falls on site. With the ability of Artificial Intelligence (AI) based techniques, the safety of ladders can be effectively managed, and the rate of accidents can be reduced. This study presents the AI-driven safety checking for a ladder in the pre-use stage. The checks are performed in Python programming language and various libraries such as math, Numpy, and Opencv. The AI-driven safety checking can decide for ‘fitness for the use of the ladder in terms of its structural rigidity before use. Compared to conventional safety practice, this process is less time-consuming, an inspection can be done throughout the project lifecycle, data can be stored and shared virtually, and needless to say, the ladder-related hazards can be reduced.",
    absbox: "absPopup2",
  },
  {
    title:
      "Computer Vision and Sensor based Concrete Crack Detection System",
    authors: "Sayali Sandbhor, Ashish Ranjan, Diksha Sharma, Sara Baig, Kunal Agarwal, Rajiv S. Wadhwa",
    conferences:
      "Intelligent Materials and Machine Learning (IM2L’21)",
    researchYr: 2021,
    citebox: "popup3",
    image: "assets/images/research-page/img.png",
    citation: {
      vancouver:
        "Sayali Sandbhor, Ashish Ranjan, Diksha Sharma, Sara Baig, Kunal Agarwal, Rajiv S. Wadhwa",
    },
    abstract:
      "In any civil construction, cracks are the earliest indications of deterioration specifying the need for restoration before significant damage occurs. The cost can be minimized for maintenance if the crack is detected as soon as possible. Many techniques are used in non- destructive crack testing such as Visual Inspection (VT), dye Penetrant Testing (PT), Eddy Current Testing (ET), Thermographic Tests (TT), Magnetic Particle Testing (MT), Ultrasonic Testing (UT), etc. Modern techniques including the use of Image binarization or image-based are constantly researched in the community and frequently updated since it’s considered to be the best among all the other old techniques. Although there are many challenges in image-based crack detection because of various noises such as irregular lighting conditions, shade, defection, and concrete space in the images. In this paper, the methodology of an image processing technique that automatically detects and analyzes cracks is proposed. The research aims to achieve a device past these problems encountered along with the economy. By using a computer vision library i.e OpenCV cracks are detected in the structure and later with the help of a device which comprises Arduino Uno and Ultrasonic sensor, the depth, and breadth of the crack are measured.",
    absbox: "absPopup3",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
