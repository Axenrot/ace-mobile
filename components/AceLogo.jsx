import { Image } from "react-native";

export default function AceLogo() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("../public/images/favicon.png")}
    />
  );
}
