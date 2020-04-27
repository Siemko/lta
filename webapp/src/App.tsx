import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Rest } from "./modules/rest/Rest";
import { ApolloProvider } from "@apollo/react-hooks";
import { gqlClient } from "./modules/gql/client";
import { GQL } from "./modules/gql/Gql";

function App() {
  return (
    <ApolloProvider client={gqlClient}>
      <div>
        To jes apka
        <Router>
          <div>
            <nav>
              <ul style={{fontSize: "1.5em"}}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/rest">REST</Link>
                </li>
                <li>
                  <Link to="/gql">GQL</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/rest">
                <Rest />
              </Route>
              <Route path="/gql">
                <GQL />
              </Route>
              <Route path="/">
                <div>
                  To jest strona główna, na której nic się nie dzieje...
                </div>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
