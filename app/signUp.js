import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Loading from "../components/loading";

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");

  const handleSignUp = async () => {
    if (!emailRef.current || !passwordRef.current) {
      alert("Please fill all fields");
      return;
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="auto" />
      <View className="flex-1 px-5">
        <View className="items-center mb-8">
          <Image
            className="w-[200px] h-[200px]"
            source={{
              uri: "https://via.placeholder.com/200",
            }}
            resizeMode="contain"
          />
        </View>
        <View className="flex-col">
          <View className="flex-row justify-center mb-6">
            <Text className="tracking-wider text-3xl font-bold">Sign Up</Text>
          </View>

          <View className="flex-col space-y-4">
            <View className="flex-row p-4 bg-neutral-100 rounded-2xl">
              <Octicons name="mail" size={"20rem"} color={"gray"} />
              <TextInput
                onChange={(value) => (emailRef.current = value)}
                className="flex-1 px-4"
                placeholder="Email"
                keyboardType="email-address"
              />
            </View>

            <View className="flex-row p-4 bg-neutral-100 rounded-2xl">
              <Octicons name="key" size={"20rem"} color={"gray"} />
              <TextInput
                onChange={(value) => (passwordRef.current = value)}
                className="flex-1 px-4"
                placeholder="Password"
                keyboardType="password"
              />
            </View>
          </View>
        </View>
        <View>
          {loading ? (
            <View className="flex-row justify-center">
              <Loading size={100} />
            </View>
          ) : (
            <TouchableOpacity
              onPress={handleSignUp}
              className="bg-blue-500 p-3 rounded-2xl m-5"
            >
              <Text className="text-white text-center font-bold text-xl">
                Sign Up
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View className="flex-row justify-center gap-x-2">
          <Text className="text-neutral-500">Already have an account?</Text>
          <Pressable onPress={() => router.push("signIn")}>
            <Text className="font-bold text-indigo-500">Sign In</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
