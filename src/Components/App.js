import "../Styles/App.css";
import "../../public/styles.css";
import HeadNavBar from "./Main/HeadNavBar.jsx";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "../Styles/react-awesome-slider-styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

let curWindowHeight = window.innerHeight;
let curWindowWidth = window.innerWidth;
console.log(curWindowHeight);
console.log(curWindowWidth);

function App() {
  return (
    <div className="App">
      <HeadNavBar
        titlePage="Frank van Oosterhout"
        smallText="Metsel- en Lijmwerken"
      />
      <div className="autoplayslider-wrapper">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
          className="autoplayslider"
        >
          <div data-src="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/282122508_562574148829954_7986502209421624570_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=ua7Wy40qStsAX8Fc-e5&tn=QrdUUoOLQFuUekKI&_nc_ht=scontent-ams4-1.xx&oh=00_AT-BQKWGxb5B0v9FzWrI9v9K_zY3tB1Nc13WsyfqNkp_Tw&oe=62A393D3" />
          <div data-src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.6435-9/100055967_3462127553801991_2730714488532631552_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=AVSLRda4r0QAX-xrY9e&_nc_ht=scontent-ams4-1.xx&oh=00_AT8vdZpQTKtvRXp92yhMgADNvmtX6aWMmY5t2e7rMBcjDQ&oe=62C3A937" />
          <div data-src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.6435-9/100090061_3462201107127969_661221369249267712_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=SrmukBezcJAAX9BZMnK&_nc_ht=scontent-amt2-1.xx&oh=00_AT-Gruf9DnW5f440Et16Zs3RM0vAIKif0b_uUgqkoy21JQ&oe=62C413F3" />
        </AutoplaySlider>
      </div>
    </div>
  );
}

export default App;
