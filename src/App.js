import { useEffect } from 'react';
//import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import LoginScreen from './Components/Screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './Firebase';
import { login, logout, selectUser } from './Redux/userSlice';
//import ProfileScreen from './Components/Screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>
  {
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email:userAuth.email
        })
        );
      }
      else{
        dispatch(logout)

      }
    })
    return unsubscribe;
  },[dispatch])
  return (

    <div className="app">
    
     {
      !user?<LoginScreen/>:
      <HomeScreen/>
     }
  
    </div>
  );
}

export default App;
