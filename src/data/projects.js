import ShelfLife from "../images/ShelfLife.png";
import themeimg from "../images/themeimg.png";
import quiz from "../images/quiz.png";
import PlanPro from "../images/PlanPro.png";
import ToDo from "../images/ToDo.png";
import nt from "../images/nt.png";

const Projects = [
  {
    id: 1,
    title: "ShelfLife 📚",
    description:
      "ShelLife is an application where a user can post a book the love and write a message about it like there opinion on the book. Users are able to signup or login if they done so already. Once they have logged in they can only then create a post and share it, User can also delete their post, any post they wish to. This application is still under Construction soon we will mak users update post and profile!",
    image: ShelfLife,
    technology: [
      "MySQL Database",
      "Node.js",
      "Express",
      "Sequelize",
      "Express,js",
      "bcrypt",
      "Authentication",
      "dotenv",
      "MVC handlebars",
      "Bootstrap",
      "MVC Handlebars",
      "Authentication",
      "Google Fonts",
    ],
    url: "https://shelflife-91f231d5543b.herokuapp.com/",
    codeSource: "http://github.com/ericlkm/ShelfLife",
  },

  {
    id: 2,
    title: "PlanPro",
    description: "A conference planner!",
    image: PlanPro,
    technology: [
      "React",
      "JavaScript",
      "CSS",
      "MongoDB",
      "Bootstrap",
      "Graphql",
      "Apollo Client",
      "JWT Authentication",
      "React Router",
      "Express.js",
      "dotenv",
      "Bcrypt",
      "twilio",
      "jwr-decoded",
      "date-fns",
    ],

    url: "https://planpro-9kzu.onrender.com/",
    codeSource: "https://github.com/Ericlkm/PlanPro",
  },

  {
    id: 3,
    title: "FunCast 🎢",
    description:
      "    FunCast! is a web application that allows users to search for theme parks around the world and check the average wait times for attractions and shows weather forecast for that day utilizing openweather API. Overall FunCast is a basic application connecting teo API's.",
    image: themeimg,
    technology: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind",
      "JQuery",
      "Theme Park API",
      "Openweather API",
      "Google Fonts",
    ],
    url: "https://mbarrie1979.github.io/Theme-Parks-Waiting-Times-and-Weather-NEW/",
    codeSource:
      "http://github.com/Ericlkm/Theme-Parks-Waiting-Times-and-Weather-NEW",
  },

  {
    id: 4,
    title: "ToDo-App",
    description: "A simple ToDo app built with Javascript",
    image: ShelfLife,
    technology: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery"],
    url: "https://todo-app-91f231d5543b.herokuapp.com/",
    codeSource: "http://github.com/ericlkm/todo-app",
    image: ToDo,
    url: "https://ericlkm.github.io/ToDo-List/",
    codeSource: "https://github.com/Ericlkm/ToDo-List",
  },
  {
    id: 4,
    title: "Note-Taker 📝",
    description: "A simple note taking app built with Javascript",
    image: nt,
    technology: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Express.js",
      "Node.js",
    ],
    url: "https://note-taker-91f231d5543b.herokuapp.com/",
    codeSource: "http://github.com/ericlkm/note-taker",
  },
  {
    id: 6,
    title: "Quiz",
    description:
      "This application is a basic quiz app displaying coding questions.You will have aboiut a minute to complete the quiz. When you begin the quiz a count down will start and for every question you get wrong 2 seconds will be deducted from timer. Also when clicking on an answer you can click on submit to confirm your answer or change it. once you click submit it will display red for the wrong answer and green for the correct answer are up for a challenge!",
    image: quiz,
    technology: ["HTML", "JavaScript", "CSS", "SASS"],
    url: "https://ericlkm.github.io/homework4/",
    codeSource: "https://github.com/Ericlkm/homework4",
  },
];

export default Projects;