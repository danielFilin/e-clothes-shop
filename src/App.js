import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SIgnInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
       if (userAuth) {
         const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapShot => {
           console.log(snapShot.data)
           this.setState({
             currentUser: {
               id: snapShot.id,
               ...snapShot.data()
             }
            })
         });
       } else {
         this.setState({ currentUser: null });
       }
    })
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
       <div className="App">
         <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path='/signin' component={SIgnInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
