import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, SafeAreaView } from "react-native";
import TodoScreen from "./src/screen/TodoScreen";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2E9E4",
    alignItems: "center",
    justifyContent: "center",
  },
});
