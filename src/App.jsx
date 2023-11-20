import { Provider } from "react-redux";
import "./App.css";
import Cake from "./components/Cake";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Cake/>
    </Provider>
  );
};

export default App;

// store : cake ,=> 1.store , 2. action 3.reducer
