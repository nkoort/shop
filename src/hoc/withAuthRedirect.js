import React from "react";
import {Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuth } from "../Redux/Selectors/authSelector";


let mapStateToPropsForRedirect = (state) => ({
    isAuth: getIsAuth(state),
})

const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.isAuth) {
                return <Navigate to='/login' />
            } 
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;