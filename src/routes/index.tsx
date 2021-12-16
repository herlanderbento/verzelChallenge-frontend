import { Switch } from "react-router-dom";
import { Courses } from "../pages/Courses";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { ModulePages } from "../pages/ModulePages";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Users } from "../pages/Users";
import { Lessons } from "../pages/Lessons";

import Route from "./Routes";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/users" component={Users} isPrivate />
      <Route exact path="/modules" component={ModulePages} isPrivate />
      <Route exact path="/lessons" component={Lessons} isPrivate />
    </Switch>
  );
}
