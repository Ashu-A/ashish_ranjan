AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
    {
    langImage: "assets/images/techstack-page/dyn.png",
    langName: "Dynamo BIM",
    langDesc: "<li>Dynamo BIM is a visual programming tool that allows users to create custom workflows and automate tasks in building information modeling (BIM) software.</li>",
  },
  {
    langImage: "assets/images/techstack-page/revit.png",
    langName: "Revit",
    langDesc: "<li>Revit is a popular BIM software developed by Autodesk that enables architects, engineers, and construction professionals to design, model, and collaborate on building projects in a 3D environment.</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "Hypertext Markup Language",
    langDesc: "<li>HTML (Hypertext Markup Language) is a markup language used for creating web pages and other types of online content, allowing developers to structure content, add multimedia elements, and define the layout and appearance of a webpage.</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is a distributed version control system used for software development, allowing developers to track changes in code, collaborate on projects, and manage code repositories. It was created by Linus Torvalds in 2005 and is now widely used by developers around the world.</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python can be used for automation in AutoCAD and Revit by utilizing the API, allowing developers to automate tasks and perform operations on AutoCAD drawings programmatically.</li><li>Python can also do AI and ML algorithm development, with libraries like TensorFlow, Keras, and PyTorch providing powerful tools for developing and training machine learning models.</li>",
  },
  {
    langImage: "assets/images/techstack-page/sketchup.png",
    langName: "SketchUp",
    langDesc: "<li>SketchUp is a popular 3D modeling software used by architects, designers, and engineers for creating, modifying, and sharing 3D models of buildings and objects. Its intuitive interface and powerful tools make it an ideal tool for conceptualizing designs and communicating ideas to clients.</li>",
  },
  {
    langImage: "assets/images/techstack-page/autocad.png",
    langName: "AutoCAD",
    langDesc: "<li>AutoCAD is a widely-used computer-aided design (CAD) software developed by Autodesk for creating 2D and 3D models and drawings of buildings, products, and other objects. It is commonly used in architecture, engineering, and construction for creating blueprints and producing construction documentation, and it supports a variety of file formats and third-party plugins.</li>",
  },
  {
    langImage: "assets/images/techstack-page/vray.png",
    langName: "V-Ray",
    langDesc: "<li>V-Ray is a rendering software developed by Chaos Group that allows users to create high-quality, photorealistic 3D images and animations. It is widely used in architecture, interior design, and product visualization for tasks such as creating virtual walkthroughs, product presentations, and marketing materials. V-Ray supports a range of 3D software platforms, including SketchUp, 3ds Max, and Revit.</li>",
  },
  {
    langImage: "assets/images/techstack-page/candy.png",
    langName: "Candy Construction Software",
    langDesc: "<li>Candy Construction Software is a popular tool for cost management, estimating, and project monitoring in the construction industry. It is widely used by contractors and project managers in various types of construction projects due to its user-friendly interface and powerful features.</li>",
  },
  {
    langImage:"assets/images/techstack-page/etabs.png",
    langName:"ETABS | BUILDING ANALYSIS AND DESIGN",
    langDesc:"<li>ETABS is a structural analysis and design software developed by Computers and Structures, Inc. (CSI) that is widely used by engineers and designers for modeling and analyzing complex building structures, such as high-rise buildings and bridges. It provides advanced features for dynamic analysis, seismic design, and finite element analysis, making it a popular tool in the construction industry.</li>"
  },
  {
    langImage:"assets/images/techstack-page/safe.png",
    langName:"CSI-SAFE",
    langDesc:"<li>CSI-SAFE is a popular software used by structural engineers and designers for modeling, analyzing, and designing reinforced concrete and steel structures. It offers a user-friendly interface and powerful features for designing foundations, slabs, and producing construction documentation.</li>"
  },
  {
    langImage:"assets/images/techstack-page/ardu.png",
    langName:"Arduino",
    langDesc:"<li>Arduino is an open-source platform for building electronic projects, including robots, sensors, and art installations. Its user-friendly hardware and software components make it accessible to users of all programming levels. Arduino's versatility, affordability, and ease-of-use have made it popular among hobbyists, educators, and professionals.</li>"
  },
  {
    langImage:"assets/images/techstack-page/tabu.png",
    langName:"Tableau",
    langDesc:"<li>Tableau is a data visualization and business intelligence software with drag-and-drop analytics, mapping, and dashboard creation features. It can connect to various data sources and is widely used for its ability to help organizations make better decisions and communicate insights effectively.</li>"
  },
  {
    langImage:"assets/images/techstack-page/arcgis.png",
    langName:"ArcGIS",
    langDesc:"<li>ArcGIS is a popular geographic information system (GIS) software suite developed by Esri. It provides tools for mapping, data analysis, and visualization, and is widely used in various industries, including urban planning and natural resource management. ArcGIS helps organizations better understand and manage geospatial data.</li>"
  },
  {
    langImage:"assets/images/techstack-page/qgis.png",
    langName:"QGIS",
    langDesc:"<li>QGIS is a free and open-source geographic information system (GIS) software that provides tools for working with maps and geospatial data. It features various data viewing, editing, and analysis capabilities and supports multiple data formats and projections. QGIS is popular among GIS professionals, educators, and enthusiasts for its user-friendly interface, flexibility, and community-driven development.</li>"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
