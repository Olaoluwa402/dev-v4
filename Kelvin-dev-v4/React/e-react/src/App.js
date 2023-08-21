import "./App.css";
import Nav from "./components/navigation/nav";
import Footer from "./components/footer/footer";
import Wishlist from "./components/wishlist/wishlist";
import Fyp from "./components/fypList/fyp";

function App() {
  return (
    <div className="App">
      <Nav />
      <Wishlist />
      <Fyp />
      <Footer />
    </div>
  );
}

export default App;
