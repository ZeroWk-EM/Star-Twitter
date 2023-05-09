import { INews } from "../interface/news.interface";
import { v4 as uuidv4 } from "uuid";

const baseURL = "https://localhost:3000";

const news: INews[] = [
  {
    id: uuidv4(),
    author: {
      name: "Ahsoka Tano",
      image:
        "https://i.etsystatic.com/7745761/r/il/2369e6/3663232312/il_1588xN.3663232312_dxif.jpg",
      nickname: "@Fulcrom",
      checked: true,
    },
    content: {
      description: "This is my new lighsaber, thx to my master @Vader19",
      image:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/09/Ahsoka-Blue-Lightsabers-in-Clone-Wars-Season-7.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    },
    reply: 10,
    liked: 150,
    share: `${baseURL}/${uuidv4()}`,
  },
  {
    id: uuidv4(),
    author: {
      name: "Anakin Skywalker",
      image:
        "https://i.pinimg.com/originals/83/ad/34/83ad34b9aa85b0bf3586ac9df771acdc.jpg",
      nickname: "@Vader19",
      checked: false,
    },
    content: {
      description: "I think I need a new mask...what do you say?",
      image:
        "https://howardwilliamsblog.files.wordpress.com/2015/12/darth-vader-mask.jpg?w=815&h=543&zoom=2",
    },
    reply: 130,
    liked: 15000,
    share: `${baseURL}/${uuidv4()}`,
  },
  {
    id: uuidv4(),
    author: {
      name: "Obi-Wan Kenobi",
      image:
        "https://bespinbulletin.com/wp-content/uploads/2022/05/img_1775-1.jpg",
      nickname: "@Ben1138",
      checked: true,
    },
    content: {
      description: "Do you like my new outfit??",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTAxOTlmOTAtMjA0Yy00YjVjLWE3OTQtYjAzMWMxOTAwZTY1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg",
    },

    reply: 2,
    liked: 80,
    share: `${baseURL}/${uuidv4()}`,
  },
];

export default news