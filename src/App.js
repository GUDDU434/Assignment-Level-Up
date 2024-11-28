import "./App.css";
import Dailyquiz from "./components/Dailyquiz";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InterviewRecording from "./components/InterviewRecording";
import Joinforfree from "./components/Joinforfree";
import LevelUpsection from "./components/LevelUpsection";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="App">
      <div style={{ width: "100%", background: "#1F3343" }}>
        <Navbar />
        <Hero />
        <Skill />
        <InterviewRecording />
        <Dailyquiz />
        <LevelUpsection />
        <Joinforfree />
      </div>

      <Footer />
    </div>
  );
}

export default App;
