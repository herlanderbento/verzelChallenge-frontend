import { Switch, Route } from "react-router-dom";
import { Courses } from "../pages/Courses";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { ModulePages } from "../pages/ModulePages";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Users } from "../pages/Users";
import { Lessons } from "../pages/Lessons";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/modules" component={ModulePages} />
      <Route exact path="/lessons" component={Lessons} />
    </Switch>
  );
}
