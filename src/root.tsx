// Root entry point

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from "react";
import { Helmet } from "react-helmet";
import { hot } from "react-hot-loader/root";
import { Route, Switch } from "react-router-dom";
import { Global } from "@emotion/core";
// Components
import ScrollTop from "@/helpers/scrollTop";
// Global styles
import globalStyles from "@/global/styles";
import UserListing from "./components/UserListing/UserListing";
import UserEdit from "@/components/UsesEdit/UserEdit";
import NavBar from "@/components/Navbar/Navbar";

/* Local */

// By default, pull in the ReactQL example. In your own project, just nix
// the `src/components/example` folder and replace the following line with
// your own React components

// ----------------------------------------------------------------------------

const Root: React.FunctionComponent = () => (
  <div>
    <Global styles={globalStyles} />
    <Helmet>
      <title>ReactQL starter kit - edit me!</title>
    </Helmet>
    <ScrollTop>
      <NavBar />
      <Switch>
        <Route path="/" exact render={() => <UserListing />} />
        <Route path="/user/:id" exact render={() => <UserEdit />} />
      </Switch>
    </ScrollTop>
  </div>
);

export default hot(Root);
