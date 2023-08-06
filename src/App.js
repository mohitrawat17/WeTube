import "../src/App.css"
import Body from "./Body";
import Header from "./Header"
import {Provider} from "react-redux"
import store from "./utils/store.js";

function App() {
  return (
    <Provider store={store}>
    <div className="w-full h-full text-slate-50">
    <Header/>
    <Body/>
    
    </div>
    </Provider>
  );
}

export default App;
