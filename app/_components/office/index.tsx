/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/scene.gltf -t -k 
*/

import * as THREE from "three";
import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane001_Plane002_BlackWood001: THREE.Mesh;
    Plane001_Plane002_BlackWood001_1: THREE.Mesh;
    Plane001_Plane002_BlackWood001_2: THREE.Mesh;
    Plane001_Plane002_BlackWood001_3: THREE.Mesh;
    Plane001_Plane002_BlackWood001_4: THREE.Mesh;
    SM_ShelfSM_Shelf1_1: THREE.Mesh;
    SM_ShelfSM_Shelf1_1_1: THREE.Mesh;
    ["Node-Mesh001"]: THREE.Mesh;
    ["Node-Mesh001_1"]: THREE.Mesh;
    ["Node-Mesh001_2"]: THREE.Mesh;
    WawaRug: THREE.Mesh;
    mesh434900071: THREE.Mesh;
    mesh434900071_1: THREE.Mesh;
    mesh434900071_2: THREE.Mesh;
    mesh434900071_3: THREE.Mesh;
    mesh434900071_4: THREE.Mesh;
    mesh434900071_5: THREE.Mesh;
    mesh425587018: THREE.Mesh;
    mesh425587018_1: THREE.Mesh;
    mesh425587018_2: THREE.Mesh;
    mesh425587018_3: THREE.Mesh;
    iMac_1: THREE.Mesh;
    iMac_1_1: THREE.Mesh;
    iMac_1_2: THREE.Mesh;
    Comp_Mouse: THREE.Mesh;
    mesh24448074: THREE.Mesh;
    mesh24448074_1: THREE.Mesh;
    mesh24448074_2: THREE.Mesh;
    Houseplant_7_1: THREE.Mesh;
    Houseplant_7_2: THREE.Mesh;
    Houseplant_7_3: THREE.Mesh;
    ["palm_tree_01-Mesh"]: THREE.Mesh;
    ["palm_tree_01-Mesh_1"]: THREE.Mesh;
    ["palm_tree_01-Mesh_2"]: THREE.Mesh;
    ["Node-Mesh"]: THREE.Mesh;
    ["Node-Mesh_1"]: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane001_1: THREE.Mesh;
    Plane001_2: THREE.Mesh;
    Plane001_3: THREE.Mesh;
  };
  materials: {
    ["BlackWood.001"]: THREE.MeshStandardMaterial;
    ["BlackCoatSteel.001"]: THREE.MeshStandardMaterial;
    ["GrayPlastic.001"]: THREE.MeshStandardMaterial;
    ["WhiteSteelScrew.001"]: THREE.MeshStandardMaterial;
    ["BlackPlastic.001"]: THREE.MeshStandardMaterial;
    lambert2SG: THREE.MeshStandardMaterial;
    ["795548.001"]: THREE.MeshStandardMaterial;
    lambert4SG: THREE.MeshStandardMaterial;
    ["lambert2SG.001"]: THREE.MeshStandardMaterial;
    ["lambert3SG.002"]: THREE.MeshBasicMaterial;
    Rug: THREE.MeshStandardMaterial;
    mat14: THREE.MeshStandardMaterial;
    mat13: THREE.MeshStandardMaterial;
    ["mat12.001"]: THREE.MeshStandardMaterial;
    ["mat21.003"]: THREE.MeshStandardMaterial;
    ["mat23.001"]: THREE.MeshStandardMaterial;
    mat11: THREE.MeshStandardMaterial;
    ["mat21.004"]: THREE.MeshStandardMaterial;
    ["mat22.001"]: THREE.MeshStandardMaterial;
    ["mat9.002"]: THREE.MeshStandardMaterial;
    ["mat16.001"]: THREE.MeshStandardMaterial;
    Screen: THREE.MeshStandardMaterial;
    ScreenBlack: THREE.MeshStandardMaterial;
    iMacBody: THREE.MeshStandardMaterial;
    ["lambert3SG.003"]: THREE.MeshStandardMaterial;
    ["mat9.003"]: THREE.MeshStandardMaterial;
    ["mat20.001"]: THREE.MeshStandardMaterial;
    ["mat21.005"]: THREE.MeshStandardMaterial;
    ["Black.001"]: THREE.MeshStandardMaterial;
    ["Brown.001"]: THREE.MeshStandardMaterial;
    ["Plant_Green.001"]: THREE.MeshStandardMaterial;
    ["8BC34A.001"]: THREE.MeshStandardMaterial;
    ["DD9944.001"]: THREE.MeshStandardMaterial;
    Office_Cha: THREE.MeshStandardMaterial;
    Office_Cha_1: THREE.MeshStandardMaterial;
    Floor: THREE.MeshStandardMaterial;
    White: THREE.MeshStandardMaterial;
    Wall: THREE.MeshStandardMaterial;
    Glass: THREE.MeshPhysicalMaterial;
  };
  animations: THREE.AnimationClip[];
};

export function Office(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/scene.gltf") as GLTFResult;
  const texture = useTexture("/textures/baked.jpg");
  texture.flipY = false;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });
  return (
    <group {...props} dispose={null}>
      <group
        name="Desk"
        position={[-0.074, 0, -1.521]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Plane001_Plane002_BlackWood001"
          geometry={nodes.Plane001_Plane002_BlackWood001.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_1"
          geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_2"
          geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_3"
          geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_4"
          geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry}
          material={textureMaterial}
        />
      </group>
      <group name="SM_ShelfSM_Shelf1" position={[-0.868, 1.694, -2.038]}>
        <mesh
          name="SM_ShelfSM_Shelf1_1"
          geometry={nodes.SM_ShelfSM_Shelf1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="SM_ShelfSM_Shelf1_1_1"
          geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry}
          material={textureMaterial}
        />
      </group>
      <group name="LavaLamp" position={[-1.302, 2.071, -1.986]}>
        <mesh
          name="Node-Mesh001"
          geometry={nodes["Node-Mesh001"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh001_1"
          geometry={nodes["Node-Mesh001_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh001_2"
          geometry={nodes["Node-Mesh001_2"].geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="WawaRug"
        geometry={nodes.WawaRug.geometry}
        material={textureMaterial}
        position={[-0.281, 0.009, 0.765]}
      />
      <group
        name="salameche"
        position={[-0.61, 2.044, -1.958]}
        rotation={[-Math.PI, 0.728, -Math.PI]}
      >
        <mesh
          name="mesh434900071"
          geometry={nodes.mesh434900071.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_1"
          geometry={nodes.mesh434900071_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_2"
          geometry={nodes.mesh434900071_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_3"
          geometry={nodes.mesh434900071_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_4"
          geometry={nodes.mesh434900071_4.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_5"
          geometry={nodes.mesh434900071_5.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="keyboard"
        position={[-0.044, 0.981, -1.346]}
        rotation={[0, -0.165, 0]}
      >
        <mesh
          name="mesh425587018"
          geometry={nodes.mesh425587018.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_1"
          geometry={nodes.mesh425587018_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_2"
          geometry={nodes.mesh425587018_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_3"
          geometry={nodes.mesh425587018_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="iMac"
        position={[0.454, 0.939, -1.723]}
        rotation={[Math.PI, -1.099, Math.PI]}
      >
        <mesh
          name="iMac_1"
          geometry={nodes.iMac_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="iMac_1_1"
          geometry={nodes.iMac_1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="iMac_1_2"
          geometry={nodes.iMac_1_2.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="Comp_Mouse"
        geometry={nodes.Comp_Mouse.geometry}
        material={textureMaterial}
      />
      <group name="plant" position={[-0.78, 1.071, -1.61]}>
        <mesh
          name="mesh24448074"
          geometry={nodes.mesh24448074.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh24448074_1"
          geometry={nodes.mesh24448074_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh24448074_2"
          geometry={nodes.mesh24448074_2.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="Houseplant_7"
        position={[-2.019, -0.042, -1.526]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="Houseplant_7_1"
          geometry={nodes.Houseplant_7_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Houseplant_7_2"
          geometry={nodes.Houseplant_7_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Houseplant_7_3"
          geometry={nodes.Houseplant_7_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="palm_tree_01"
        position={[2.13, -0.081, -1.055]}
        rotation={[-Math.PI, 0.672, -Math.PI]}
      >
        <mesh
          name="palm_tree_01-Mesh"
          geometry={nodes["palm_tree_01-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="palm_tree_01-Mesh_1"
          geometry={nodes["palm_tree_01-Mesh_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="palm_tree_01-Mesh_2"
          geometry={nodes["palm_tree_01-Mesh_2"].geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="Chair"
        position={[-0.278, 0, -0.708]}
        rotation={[0, -0.376, 0]}
      >
        <mesh
          name="Node-Mesh"
          geometry={nodes["Node-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_1"
          geometry={nodes["Node-Mesh_1"].geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="Plane001"
        geometry={nodes.Plane001.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_1"
        geometry={nodes.Plane001_1.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_2"
        geometry={nodes.Plane001_2.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_3"
        geometry={nodes.Plane001_3.geometry}
        material={textureMaterial}
      />
    </group>
  );
}

useGLTF.preload("/models/scene.gltf");
