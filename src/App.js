import React from "react";
import Contact from "./components/Contact";
import "./app.css";
// import liff from '@line/liff';
// import { useEffect, useState } from 'react';



function App() {

  // const [pictureUrl, setPictureUrl] = useState();
  // const [idToken, setIdToken] = useState("");
  // const [displayName, setDisplayName] = useState("");
  // const [statusMessage, setStatusMessage] = useState("");
  // const [userId, setUserId] = useState("");

  // const initLine = () => {
  //   liff.init({ liffId: '1656554390-dJV0qrQR' }, () => {
  //     if (liff.isLoggedIn()) {
  //       runApp();
  //     } else {
  //       liff.login();
  //     }
  //   }, err => console.error(err));
  // }


  // const runApp = () => {
  //   const idToken = liff.getIDToken();
  //   setIdToken(idToken);
  //   liff.getProfile().then(profile => {
  //     console.log(profile);
  //     setDisplayName(profile.displayName);
  //     setPictureUrl(profile.pictureUrl);
  //     setStatusMessage(profile.statusMessage);
  //     setUserId(profile.userId);
  //   }).catch(err => console.error(err));
  // }

  // useEffect(() => {
  //   initLine();
  // }, []);


  return (
    <div className="app">
      <Contact />
    </div>
  );
}

export default App;
