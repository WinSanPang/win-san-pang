import React from "react";

import classes from "./Sidebar.module.scss";
/* import Logo from '../../Logo/Logo'; */
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../../UI/Backdrop/Backdrop";

const sidebar = (props) => {
  let attachedClasses = [classes.Sidebar, classes.Close];
  if (props.open) {
    attachedClasses = [classes.Sidebar, classes.Open];
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>{/* <Logo/> */}</div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sidebar;
