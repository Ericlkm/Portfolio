import ShelfLife from "../images/ShelfLife.png";
import themeimg from "../images/themeimg.png";
import quiz from "../images/quiz.png";
import PlanPro from "../images/PlanPro.png";
import ToDo from "../images/ToDo.png";
import nt from "../images/nt.png";
import reactQuiz from "../images/reactQuiz.png";
import weather from "../images/weather.png";
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
    title: "PlanPro 📈",
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
    title: "React Quiz®️",
    description:
      "This is a simple quiz app built with React. It displays a question, four answer options, and keeps track of the user's score. When the user selects an answer, you see your final score at the end whne quiz is complete.",
    image: reactQuiz,
    technology: [
      "React",
      "JavaScript",
      "CSS",
      "SASS",
      "ReactRouter",
      "Bootstrap",
    ],
    url: "http://ericreactquiz.netlify.app",
    codeSource: "https://github.com/Ericlkm/react-QuizApp",
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    title: "Quiz",
    description:
      "This application is a basic quiz app displaying coding questions.You will have aboiut a minute to complete the quiz. When you begin the quiz a count down will start and for every question you get wrong 2 seconds will be deducted from timer. Also when clicking on an answer you can click on submit to confirm your answer or change it. once you click submit it will display red for the wrong answer and green for the correct answer are up for a challenge!",
    image: quiz,
    technology: ["HTML", "JavaScript", "CSS", "SASS"],
    url: "https://ericlkm.github.io/homework4/",
    codeSource: "https://github.com/Ericlkm/homework4",
  },
  {
    id: 8,
    title: "Weather App",
    description:
      "This is my weather application. Using openweather API i can fetch current and future weather forecast. This app i build main purpose is when you search a city name you will get up to a five day forecast!",
    image: weather,
    technology: ["HTML", "CSS", "JavaScript", "Openweather API", "JQuery"],
    url: "https://ericlkm.github.io/homework6/",
    codeSource: "https://github.com/Ericlkm/homework6",
  },
];

export default Projects;
