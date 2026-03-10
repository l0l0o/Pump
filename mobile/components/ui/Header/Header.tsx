import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Text, View } from "react-native";
import Container from "../Container";
import AddButton from "./modules/AddButton";
import BackButton from "./modules/BackButton";

interface TabInfo {
  icon: React.ReactNode;
  label: string;
}

type Props = {
  tabInfo: TabInfo;
  toggleBackButton?: boolean;
  toggleAddButton?: boolean;
};

const Header = ({
  tabInfo,
  toggleBackButton = true,
  toggleAddButton = true,
}: Props) => {
  return (
    <View style={{ flexDirection: "row", gap: SPACING.xxs, width: "100%" }}>
      {toggleBackButton && <BackButton />}

      <Container
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 64,
          flex: 1,
          flexDirection: "row",
          gap: SPACING.xs,
        }}
      >
        {tabInfo.icon}
        <Text style={{ fontWeight: FONT.weight.bold, fontSize: FONT.size.xl }}>
          {tabInfo.label}
        </Text>
      </Container>
      {toggleAddButton && <AddButton />}
    </View>
  );
};

export default Header;
