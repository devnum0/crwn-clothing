import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom'
import Showpage from './pages/shop/showpage.component';
import Header from './component/header/header.component';
import SignInRegistryPage from './pages/sign-in-and-sign-up-page/signin-and-registry-page.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'
import Checkout from './pages/checkout/checkout.component';


class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snap => {
            setCurrentUser({
              currentUser: {
                id: snap.id,
                ...snap.data()
              }
            })
          });
      }
      setCurrentUser(userAuth)
    });
  }

  componentWillUnmount(){

    this.unsubscribeFromAuth();
  }

  render(){

          const {currentUser} = this.props;
    return (
      <div >
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Showpage} />
          <Route path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (<SignInRegistryPage/>)}/>
        </Switch>
      </div>
    );   
  }

}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps )(App)
