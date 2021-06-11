import "./App.css";
import Updateclass from "./components/updateclass";
import Populatelist from "./components/populatelist";
import Counter from "./components/counter";
import TestStore from "./components/teststore";
import Teststoreclass from "./components/teststoreclass";
import UseState from "./hooks/usestate";

import store from "./simplestore/configureStore";
import { bugAdded, bugResolved } from "./simplestore/bugs";
import { beerAdded, beerRemoved, beerUpdatated } from "./simplestore/beer";
import { useEffect } from "react";
import { Provider } from "react-redux";

function App() {
  // useEffect(() => {
  //   store.dispatch(bugAdded("Bug1"));
  //   store.dispatch(bugResolved(1));

  //   store.dispatch(
  //     beerAdded({
  //       id: 1,
  //       beerName: "Asahi",
  //       beerOk: false,
  //     })
  //   );
  //   store.dispatch(
  //     beerAdded({
  //       id: 2,
  //       beerName: "San Mig",
  //       beerOk: false,
  //     })
  //   );

  //   store.dispatch(
  //     beerUpdatated({
  //       id: 1,
  //       beerName: "Asahi",
  //       beerOk: true,
  //     })
  //   );
  //   store.dispatch(beerRemoved(2));
  // }, []);

  return (
    <div className="App">
      <Provider store={store}>
        {/* <Updateclass></Updateclass>
        <Populatelist></Populatelist>
        <Counter></Counter> */}
        <TestStore></TestStore>
        <Teststoreclass propsko="ricky pogi"></Teststoreclass>

        {/* <br></br>
        <UseState></UseState> */}
      </Provider>
    </div>
  );
}

export default App;
