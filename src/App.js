import "../src/App.css";
import Body from "./Body";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Container from "./Container";
import CardDetails from "./CardDetails";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Container />,
        },
        {
          path: "/watch",
          element: <CardDetails />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div className=" text-slate-50">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
