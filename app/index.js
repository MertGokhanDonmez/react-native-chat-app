import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";

export default function StartPage() {
  return (
    <SafeAreaView className="flex-1 justify-center">
      <ActivityIndicator size="large" color="gray" />
    </SafeAreaView>
  );
}
