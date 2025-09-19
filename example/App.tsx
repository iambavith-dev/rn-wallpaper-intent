import { useEvent } from 'expo';
import RnWallpaperIntent from 'rn-wallpaper-intent';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';

console.log(RnWallpaperIntent)

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title='Set WALLPAPER'
        onPress={() => {
          try {
            console.log("Called")
          RnWallpaperIntent.openSetWallpaperFromUrl("https://www.hdwallpapers.in/download/marvels_spider_man_4k_8k-2048x2048.jpg")
          } catch (error) {
            console.log("ERROR", error)
          }
        }}
      />
    </SafeAreaView>
  );
}


const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view: {
    flex: 1,
    height: 200,
  },
};
