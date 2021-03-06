import { connect } from "react-redux";
import { withRouter } from "react-router";

import PrivateRoute from "../../components/PrivateRoute";
import { IStoreState } from "../../shared/types";

function mapStateToProps({ auth: { authenticated, oidcAuthenticated } }: IStoreState) {
  return {
    authenticated,
    oidcAuthenticated,
  };
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));
