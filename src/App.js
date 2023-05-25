import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import SignupForm from "./components/SignupForm/SignupForm";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Counter from "./components/Counter/Counter";
import Clock from "./components/Clock/Clock";
import SkipEffectOnFirstRender from "components/SkipEffectOnFirstRender/SkipEffectOnFirstRender";
import PokemonView from "./views/PokemonView";
import CounterReducer from "components/CounterReducer/CounterReducer";
import Friends from "components/Friends/Friends";
import News from "components/News/News";
import { ModalV1APP } from "components/Modal/Modal";
import MaterialAPP from "components/Material/MaterialAPP";

const containerStyles = {
  maxWidth: 900,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 15,
  paddingRight: 15,
};

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

function App() {
  return (
    <div style={containerStyles}>
      <AppBar />

      <Routes>
        <Route path="useref" element={<SkipEffectOnFirstRender />} />

        <Route path="/useReducer" element={<CounterReducer />} />

        <Route path="/notes" element={<Friends />} />

        <Route path="/signup" element={<SignupForm />} />

        <Route
          path="/colorpicker"
          element={<ColorPicker options={colorPickerOptions} />}
        />

        <Route path="/counter" element={<Counter />} />

        <Route path="/clock" element={<Clock />} />

        <Route path="/pokemon" element={<PokemonView />} />

        <Route path="/news" element={<News />} />

        <Route path="/material" element={<MaterialAPP />} />

        <Route path="/modal1" element={<ModalV1APP />} />
        <Route path="/modal2" element={<ModalV1APP />} />
      </Routes>
    </div>
  );
}

export default App;
