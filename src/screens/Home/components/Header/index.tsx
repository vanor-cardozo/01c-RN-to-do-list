import { View } from "react-native";
import { LogoSvg } from "../../../../../assets/LogoSvg";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.logoContainer}>
      <LogoSvg />
    </View>
  );
}
