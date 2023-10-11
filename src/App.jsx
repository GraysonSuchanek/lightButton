import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [appColor, setAppColor] = useState(false);
  // const [lightOn, setLightOn] = useState();
  // const [lightHue, setLightHue] = useState(0);
  // const [lightSat, setLightSat] = useState(0);
  // const [lightBri, setLightBri] = useState(0);

  // const lightInfo = (data) => {
  //   setLightOn(true);
  //   setLightHue(data.state.hue);
  //   setLightSat(data.state.sat);
  //   setLightBri(data.state.bri);
  // };

  // async function getLightInfo() {
  //   const response = await fetch(
  //     "http://192.168.1.100/api/jkLQKaDDNAFPNWfW1PsFfUbrX3RAcMdxv18ftrHe/lights/2"
  //   );
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   } else {
  //     const data = await response.json();
  //     data.state.on ? lightInfo(data) : setLightOn(false);
  //     console.log(data);
  //   }
  // }

  async function redLight() {
    const response = await fetch('http://192.168.1.100/api/jkLQKaDDNAFPNWfW1PsFfUbrX3RAcMdxv18ftrHe/lights/2/state', {
      method: "PUT",
      body: JSON.stringify(
        {on: true, sat: 254, bri: 150, hue: 1400, alert: "select"}
      )
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
  }

  // const bodyInfo = () => {
  //   lightOn ? {on: true, sat: {lightSat}, bri: {lightBri}, hue: {lightHue}} :
  //   {on: false}
  // }

  // async function resetLight() {
  //   const response = await fetch('http://192.168.1.100/api/jkLQKaDDNAFPNWfW1PsFfUbrX3RAcMdxv18ftrHe/lights/2/state', {
  //       method: "PUT",
  //       body: JSON.stringify(
  //         {bodyInfo}
  //       )
  //     });
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  // }

  let handleClick = () => {
    // fetch('http://192.168.1.100/api/jkLQKaDDNAFPNWfW1PsFfUbrX3RAcMdxv18ftrHe/lights/2')
    // .then((response)=> response.json())
    // .then((data)=> {
    //   console.log(data);
    //   data.state.on ?
    //   lightInfo(data) :
    //   setLightHue(false)
    // })
    // .catch((err)=> {
    //   console.log(err.message);
    // });

    // getLightInfo();

    // fetch('http://192.168.1.100/api/jkLQKaDDNAFPNWfW1PsFfUbrX3RAcMdxv18ftrHe/lights/2/state', {
    //   method: "PUT",
    //   body: JSON.stringify(
    //     {on: true, sat: 254, bri: 254, hue: 1400}
    //   )
    // })
    // .then((response)=> console.log(response))
    // .catch((err)=> {
    //   console.log(err.message);
    // });

    redLight()

    // setTimeout(() => {
    //   lightHue ?
    //   fetch('http://192.168.1.100/api/jkLQKaDDNAFPNWfW1PsFfUbrX3RAcMdxv18ftrHe/lights/2/state', {
    //   method: "PUT",
    //   body: JSON.stringify(
    //     {on: true, sat: {lightSat}, bri: {lightBri}, hue: {lightHue}}
    //   )
    // })
    // .then((response)=> console.log(response))
    // .catch((err)=> {
    //   console.log(err.message);
    // }) :
    // fetch('http://192.168.1.100/api/jkLQKaDDNAFPNWfW1PsFfUbrX3RAcMdxv18ftrHe/lights/2/state', {
    //   method: "PUT",
    //   body: JSON.stringify(
    //     {on: false}
    //   )
    // })
    // .then((response)=> console.log(response))
    // .catch((err)=> {
    //   console.log(err.message);
    // })
    // }, 1000)

    // setTimeout(() => {
    //   resetLight()
    // }, 3000)

    document.body.style.transition = ".5s";
    setTimeout(() => {
      setAppColor("#D70040");
    }, 50);
    setTimeout(() => {
      setAppColor("#242424");
    }, 500);
  };

  useEffect(() => {
    document.body.style.backgroundColor = appColor;
  }, [appColor]);

  return (
    <>
      <button onClick={() => handleClick()}>{"<3"}</button>
    </>
  );
}

export default App;
