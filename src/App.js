import React from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';

import Constants from 'expo-constants';// IGNORE


export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.video}>
                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay={false}
                    useNativeControls={true}
                    isLooping={false}
                    style={styles.av}
                    onFullscreenUpdate={({ fullscreenUpdate }) => {
                        if (fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT) {
                            return (ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE));
                            /*note that here I declare that the video is about to be presented in full screen,
                             the screen orientation will be changed to landscape */
                        }
                        return (ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP));
                        //And when you leave the full screen go back to portrait
                    }} />
            </View>
        </View>
    )
}

const { width: WIDTH } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDFD',
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: Constants.statusBarHeight + 20
    },
    video: {
        paddingLeft: 5
    },
    av: {
        width: WIDTH - 70,
        height: WIDTH - 50
    },

})