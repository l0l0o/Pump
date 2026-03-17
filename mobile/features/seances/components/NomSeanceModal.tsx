import { BORDER_RADIUS } from "@/style/BORDER_RADIUS";
import { COLORS } from "@/style/COLORS";
import { FONT } from "@/style/FONT";
import { SPACING } from "@/style/SPACING";
import { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface NomSeanceModalProps {
  visible: boolean;
  onValider: (titre: string) => void;
  onAnnuler: () => void;
}

export function NomSeanceModal({
  visible,
  onValider,
  onAnnuler,
}: NomSeanceModalProps) {
  const [titre, setTitre] = useState("");

  const handleValider = () => {
    onValider(titre.trim());
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onAnnuler}
    >
      <Pressable style={styles.overlay} onPress={onAnnuler}>
        <Pressable style={styles.card} onPress={() => {}}>
          <Text style={styles.label}>Nom de la séance</Text>
          <TextInput
            style={styles.input}
            value={titre}
            onChangeText={setTitre}
            placeholder="Ex: Push Day, Cardio matin..."
            placeholderTextColor={COLORS.greyLighter}
            autoFocus
            returnKeyType="done"
            onSubmitEditing={handleValider}
          />
          <View style={styles.buttonRow}>
            <Pressable
              style={[styles.button, styles.buttonAnnuler]}
              onPress={onAnnuler}
            >
              <Text style={styles.buttonAnnulerText}>Annuler</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonValider]}
              onPress={handleValider}
            >
              <Text style={styles.buttonValiderText}>Valider</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 300,
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    gap: SPACING.sm,
  },
  label: {
    fontSize: FONT.size.sm,
    fontFamily: FONT.family.bold,
    color: COLORS.greyDark,
  },
  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.greyLightest,
    borderRadius: BORDER_RADIUS.sm,
    padding: SPACING.sm,
    fontSize: FONT.size.sm,
    fontFamily: FONT.family.regular,
    color: COLORS.greyDark,
  },
  buttonRow: {
    flexDirection: "row",
    gap: SPACING.xs,
    marginTop: SPACING.xs,
  },
  button: {
    flex: 1,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.sm,
    alignItems: "center",
  },
  buttonAnnuler: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.greyLightest,
  },
  buttonAnnulerText: {
    fontSize: FONT.size.sm,
    fontFamily: FONT.family.regular,
    color: COLORS.greyDark,
  },
  buttonValider: {
    backgroundColor: COLORS.main,
  },
  buttonValiderText: {
    fontSize: FONT.size.sm,
    fontFamily: FONT.family.bold,
    color: COLORS.white,
  },
});
