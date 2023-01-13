import logo from '../logo.svg';
import '../App.css';
import theNews from '../reactiveNewsLogos/Reactive News-logos.jpeg'

const Home = () => {
  return (
    <div className="main">
      <main>
      <img src={theNews}alt="logo" />
      </main>
    </div>
  );
}

export default Home;