import { Switch, Route } from "react-router-dom";
import { Courses } from "../pages/course";
import { Home } from "../pages/home";
import { Login } from "../pages/SignIn";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/sign-in" component={Login} />
    </Switch>
  );
}
