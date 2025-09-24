import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useState } from "react"
import MesaMetalica from "./modelos/MesaMetalica"
import Repiza from "./modelos/Repiza"
import Silla from "./modelos/Silla"
import SillaSeg from "./modelos/SillaSeg"
import SillaP from "./modelos/SillaP"
import SillaB from "./modelos/SillaB"
import Pared from "./modelos/Pared"
import ParedV from "./modelos/ParedV"
import Ventana from "./modelos/Ventana"
import Puerta from "./modelos/Puerta"
import VentanaAriva from "./modelos/VentanaAriva"
import PuertaDeposito from "./modelos/puertaDeposito"
import MesaScritorio from "./modelos/Escritorio"
import Monitor from "./modelos/Monitor"
import Keis from "./modelos/Keis"
import Pizarra from "./modelos/Pizarra"
import ControlMovil from "./ControlMovil"
import Escalera from "./modelos/Escalera"

import { GridHelper } from "three"

function App() {
  const [intensidadLuz, setIntensidadLuz] = useState(1)

  const [movimientoActivo, setMovimientoActivo] = useState(false);
  {/*funcion para definir permisos en iOS, opcional en Android*/ }
  const activarMovimiento = () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      DeviceOrientationEvent.requestPermission()
        .then((state) => {
          if (state === "granted") setMovimientoActivo(true);
          else alert("Permiso de sensor no otorgado");
        })
        .catch(console.error); S
    } else {
      setMovimientoActivo(true);
    }
  };
  return (

    <>
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 1,
          background: 10,
          borderRadius: 8,

        }}
      >
        <label style={{ marginTop: 10, display: "block" }}>
          Intensidad de luz: {intensidadLuz.toFixed(2)}</label>
        <input
          type0="range"
          min="0"
          max="2"
          step="0.01"
          value={intensidadLuz}
          onChange={(e) => setIntensidadLuz(parseFloat(e.target.value))}
          style={{ width: '10%' }}
        />
      </div>

      <button
        onClick={() => (movimientoActivo ? setMovimientoActivo(false) : activarMovimiento())}
        style={{
          position: "absolute",
          top: 100,
          left: 20,
          zIndex: 1,
          padding: "8px 12px",
          borderRadius: 6,
          background: movimientoActivo ? "red" : "green",
          color: "white",
          border: "none",
        }}
      >
        {movimientoActivo ? "Desactivar movimiento" : "Actibar movimiento"}
      </button>



      <Canvas
        shadows
        camera={{ position: [3, 3, 3], fov: 50 }}
        style={{ width: '100vw', height: '200vh', background: '#222' }}
      >
        {/*intencidad de la luz */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.5}
          color="white"
          castShadow
        />
        <directionalLight position={[-5, 4, -5]} intensity={0.4} color="white" />
        <hemisphereLight intensity={0.3} />

        {/* Objetos agregados con primitive para componentes independien ters */}
        <primitive object={new GridHelper(12, 15)} />


        {/*REPIZA*/}
        <Repiza position={[5, 1.1, -6.7]} scale={[1.8, 2.2, 2]} />
        <SillaSeg position={[5, 0.5, -5]} scale={[1, 1, 1]} />
        <MesaScritorio position={[3.5, 0.5, -5]} scale={[1.8, 1, 1]} />
        {/*PRIMERA FILA*/}
        <MesaMetalica position={[-4.9, 0.5, -2]} scale={[1.2, 1, 1.2]} />
        <SillaP position={[-3, 0.5, -3.5]} scale={[1.2, 1, 1.2]} />
        <Monitor position={[-5.27, 1.13, -2]} scale={[1, 1.3, 1.2]} />
        <Keis position={[-5.4, 1, -2]} scale={[0.80, 0.7, 0.80]} />
        <Silla position={[-4.9, 0.5, -1.3]} scale={[1, 1, 1]} />
        <MesaMetalica position={[-3.67, 0.5, -2]} scale={[1.2, 1, 1.2]} />
        <Silla position={[-3.67, 0.5, -1.3]} scale={[1, 1, 1]} />

        <MesaMetalica position={[4.4, 0.5, 0.5]} scale={[1.2, 1, 1.2]} />
        <Monitor position={[-5.27, 1.13, 0.8]} scale={[1, 1.3, 1.2]} />
        <Keis position={[-5.4, 1, 0.8]} scale={[0.80, 0.7, 0.80]} />
        <Silla position={[4.4, 0.5, 1.24]} scale={[1, 1, 1]} />
        <MesaMetalica position={[3.16, 0.5, 0.5]} scale={[1.2, 1, 1.2]} />
        <Silla position={[3.16, 0.5, 1.24]} scale={[1, 1, 1]} />
        <Silla position={[5, 0.5, 1.24]} scale={[1, 1, 1]} />
        <MesaMetalica position={[-1, 0.5, 0.5]} scale={[1.2, 1, 1.2]} />
        <Silla position={[-1, 0.5, 1.24]} scale={[1, 1, 1]} />
        <SillaB position={[3, 0.5, 2.5]} scale={[1, 1, 1]} />
        {/*SEGUNDA FILA*/}

        <MesaMetalica position={[-4.9, 0.5, 0.9]} scale={[1.2, 1, 1.2]} />
        <Silla position={[-4.9, 0.5, 2.3]} scale={[1, 1, 1]} />
        <Silla position={[-4, 0.5, 2.3]} scale={[1, 1, 1]} />
        <Silla position={[-3, 0.5, 1.6]} scale={[1, 1, 1]} />

        <MesaMetalica position={[-4.9, 0.5, 3.3]} scale={[1.2, 1, 1.2]} />
        <Monitor position={[-5.27, 1.13, 3.3]} scale={[1, 1.3, 1.2]} />
        <Keis position={[-5.4, 1, 3.3]} scale={[0.80, 0.7, 0.80]} />
        <Silla position={[-4.9, 0.5, 4.3]} scale={[1, 1, 1]} />
        <MesaMetalica position={[-3.67, 0.5, 3.3]} scale={[1.2, 1, 1.2]} />
        <Silla position={[-3.67, 0.5, 4.3]} scale={[1, 1, 1]} />
        {/*PAREDES*/}
        {/*DERECHA*/}

        <Pared position={[6, 0, -7.2]} scale={[1, 2.5, 0.3]} />
        <Ventana position={[6, 0, -5.56]} scale={[1, 1.76, 1.5]} />
        <Pared position={[6, 0, -3.9]} scale={[2, 2.5, 0.3]} />
        <Ventana position={[6, 0, -1.06]} scale={[1, 1.76, 2.81]} />
        <Pared position={[6, 0, 4.5]} scale={[1, 2.5, 3]} />
        <Pizarra position={[-1, 0.8, -7.4]} scale={[2.4, 1.2, 3]} />
        {/*NORTE*/}

        <ParedV position={[0, 0, -7.45]} scale={[6, 2.5, 1.3]} />

        {/*ISQUERDA*/}

        <Pared position={[-6, 0, -7.4]} scale={[1, 2.5, 0.1]} />
        <Puerta position={[-6, 0, -7.4]} scale={[1, 2, 2.5]} />
        <VentanaAriva position={[-6, 2, -6.8]} scale={[1, 0.8, 1.3]} />
        <Pared position={[-6, 0, -0.76]} scale={[1, 2.5, 5.40]} />
        <PuertaDeposito position={[-6, 0, 4.7]} scale={[1, 2, 2.5]} />
        <VentanaAriva position={[-6, 2, 5.28]} scale={[1, 0.8, 1.4]} />
        <Pared position={[-6, 0, 6.7]} scale={[1, 2.5, 0.8]} />
        <Escalera position={[0, 0, 0]} scale={[2, 2.5, 2]} />
        {/*SUR*/}

        <ParedV position={[0, 0, 7.45]} scale={[6, 2.5, 1.3]} />
        {/*FIN*/}
        {/*<OrbitControls />*/}
        {movimientoActivo ? (
          <ControlMovil activo={movimientoActivo} />
        ) : (
          <OrbitControls enableDamping={true} enablePan={true} />
        )}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={intensidadLuz}
          color="white"
        />
     


        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[12, 15]} />
          <meshToonMaterial color="yelow" />
        </mesh>
      </Canvas>

    </>

  )
}


export default App
