import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import RecipeContainer from "./components/RecipeContainer/RecipeContainer";

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <RecipeContainer></RecipeContainer>
    </div>
  );
}

export default App;
