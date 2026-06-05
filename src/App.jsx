import React from 'react'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <a-scene mindar-image="imageTargetSrc:src\assets\targets.mind" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <a-asset-item id="avatarModel" crossOrigin="anonymous" src="src\assets\model.gltf"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
      <a-entity mindar-image-target="targetIndex: 0">
        <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
        <a-gltf-model rotation="90 0 0 " position="0 0 0" scale="1 1 1"></a-gltf-model>
      </a-entity>
    </a-scene>
    </div>
  )
}

export default App