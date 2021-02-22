import react from "react";
import { store } from "./actions/store";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store ={store}>
      <ContactUser />
    </Provider>
    
  );
}

export default App;
