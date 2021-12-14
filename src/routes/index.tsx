import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
