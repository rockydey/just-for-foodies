import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RecipeContainer from "./components/RecipeContainer/RecipeContainer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <RecipeContainer></RecipeContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
