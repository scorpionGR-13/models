import React from "react";
import { useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

function PuertaDeposito({ position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] }) {
    const { scene } = useGLTF('/modelos/puertaDeposito.glb')
    const clonedScene = clone(scene);

    clonedScene.traverse((obj) => {
        if (obj.isMesh) {
            obj.castShadow = true;
            obj.receiveShadow = true;
        }
    });

    return (
        <primitive
            object={clonedScene}
            position={position}
            rotation={rotation}
            scale={scale}
        />);
}


useGLTF.preload('/modelos/puertaDeposito.glb');

useGLTF.preload('/modelos/puertaDeposito.glb')

export default PuertaDeposito

