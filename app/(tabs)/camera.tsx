import { TailwindProvider } from 'tailwindcss-react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function () {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = React.useRef<CameraView>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <TailwindProvider platform="android"><View /></TailwindProvider>;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <TailwindProvider platform="android">
        <View style={styles.container}>
          <Text style={styles.message}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      </TailwindProvider>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const recordVideo = async () => {
    if (isRecording) {
      setIsRecording(false);
      cameraRef.current?.stopRecording();
    } else {
      setIsRecording(true);
      const video = await cameraRef.current?.recordAsync();
      console.log(video?.uri);
    }
  }

  return (
    <TailwindProvider platform="android">
      <CameraView mode="video" ref={cameraRef} style={{ flex: 1 }} facing={facing}>
        <View className="flex-1 justify-end">
          <View className="flex-row items-center justify-around mb-10">
            <TouchableOpacity className="items-end justify-end" onPress={toggleCameraFacing}>
              <Ionicons name="camera-reverse" size={50} colour="transparent" />
            </TouchableOpacity>
            <TouchableOpacity className="items-end justify-end" onPress={recordVideo}>
                { !isRecording ? <Ionicons name="radio-button-on" size={100} colour="white" /> : <Ionicons name="pause-circle" size={100} colour="red" />}
            </TouchableOpacity>
            <TouchableOpacity className="items-end justify-end" onPress={toggleCameraFacing}>
                <Ionicons name="camera-reverse" size={50} colour="white" />
              </TouchableOpacity>
          </View>        
        </View>
      </CameraView>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});