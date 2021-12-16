import { Switch, Route } from "react-router-dom";
import { Courses } from "../pages/course";
import { Home } from "../pages/home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
    </Switch>
  );
}
