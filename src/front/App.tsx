import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { RoutesComponent } from "./component/Routes/RoutesComponent";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <RoutesComponent />
        </main>
      </div>
    </BrowserRouter>
  );
};
