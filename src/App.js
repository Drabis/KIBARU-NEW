import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import Weather from "./components/weather/Weather";
import Sports from "./components/Sports/Sports";
import Politics from "./components/Politics/Politics";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/politics" element={<Politics />}>
            <Route path="entertainment" element={<Weather />} />
            <Route path="sports" element={<Sports />} />
          </Route>
        </Routes>
      </Router>
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
