import React, { useEffect } from "react";
import "./App.scss";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Signup from "../components/Pages/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../components/Pages/Landing";
import { ThemeContext, themes } from "../api/Theme";
import musicDB from "../db/music";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "../actions/actions";

const App = () => {
  const {language} = useSelector(state => state.musicReducer);

  const dispatch = useDispatch();
  useEffect(()=>{
      if (language === null || language.includes("any")){
          dispatch(setPlaylist(musicDB))
      }
      else if (language.includes('hindi')){
          let x = musicDB.filter((item)=>(
              item.lang && language.includes(item.lang.toLowerCase())
          ))
          dispatch(setPlaylist(x))
      } else if(language.includes('english')){
          let x = musicDB.filter((item)=>(
              item.lang && language.includes(item.lang.toLowerCase())
          ))
          dispatch(setPlaylist(x))
      }
  },[dispatch, language]);

  return (
    <ThemeContext.Provider value={themes.light}>
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>

          </Switch>
        </Router>
      </>
    </ThemeContext.Provider>
  );
};

export default App;
