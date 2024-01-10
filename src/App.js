import "./App.css";
import AppLayout from "./components/AppLayout";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col  ">
      <Header />
      <AppLayout />
    </div>
  );
}

export default App;
