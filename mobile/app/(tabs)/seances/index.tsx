import AddIcon from "@/assets/images/exercise/AddIcon";
import SeanceIcon from "@/assets/images/header/SeanceIcon";
import Header from "@/components/ui/Header/Header";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { Pressable, Text, View } from "react-native";

const seances = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: SPACING.sm,
        backgroundColor: COLORS.white,
        gap: SPACING.sm,
      }}
    >
      <Header tabInfo={{ icon: <SeanceIcon />, label: "Séances" }} />
      <Pressable
        style={{
          justifyContent: "center",
          height: 200,
          width: "100%",
          backgroundColor: COLORS.mainLightest,
          borderStyle: "dashed",
          borderWidth: 2,
          borderColor: COLORS.main,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <AddIcon fill={COLORS.main} />
        <Text
          style={{
            color: COLORS.main,
            marginTop: SPACING.xs,
            fontSize: FONT.size.sm,
            fontWeight: FONT.weight.bold,
          }}
        >
          Créer une nouvelle séance
        </Text>
      </Pressable>
    </View>
  );
};

export default seances;
