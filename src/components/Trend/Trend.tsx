import { Footer } from "../Footer/Footer";
/* eslint-disable jsx-a11y/anchor-is-valid */
const Trend = () => {
  return (
    <div className="text-start">
      <h4>Trend on Galaxy Far Away</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="#">
            #CloneWars
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            #Resistance
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            #LoveAshoka
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            #SeparatistFactions
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            #HelloThere
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            #GenerlKenobi
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            #GroguLove
          </a>
        </li>
      </ul>
      {<Footer />}
    </div>
  );
};

export default Trend;
