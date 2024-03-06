import NavBar from "./components/NavBarComponent.jsx";
import './index.css'
import FooterComponent from "./components/FooterComponent.jsx";
import MainComponent from "./components/MainComponent.jsx";

function App() {

    return (
        <div className="h-screen flex flex-col justify-between container mx-auto">
            <NavBar></NavBar>
            <MainComponent/>
            <FooterComponent/>
        </div>
    )
}

export default App
