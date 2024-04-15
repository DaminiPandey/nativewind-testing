import "./global.css";
import React from "react";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";

import { CheckIcon } from "./components/ui/icon";
import { SafeAreaView } from "react-native";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from "./components/ui/checkbox";
import { Icon, CloseIcon } from "./components/ui/icon";

export default function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon as={CloseIcon} color="gray" />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
