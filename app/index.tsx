import { Redirect } from "expo-router";
export default function Index() {
  const isLogin = false;
  if (!isLogin) return <Redirect href={"/(auth)/getStarted"} />;
  return <Redirect href={"/(tabs)/travel"} />;
}
