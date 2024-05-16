import "./global.css";
import React from "react";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
import { SafeAreaView } from "react-native";
import { Grid, GridItem } from "./components/ui/grid";
import { useBreakpointValue } from "./utils/useMediaQuery";

export default function App() {
  const colSpan = useBreakpointValue({
    base: 6,
    md: 2,
  });
  return (
    <GluestackUIProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Grid numColumns={6} className="gap-5">
          <GridItem
            colSpan={colSpan}
            className="bg-yellow-500 p-5 rounded-md"
          />
          <GridItem
            colSpan={colSpan}
            className="bg-yellow-500 p-5 rounded-md"
          />
          <GridItem
            colSpan={colSpan}
            className="bg-yellow-500 p-5 rounded-md"
          />
          <GridItem
            colSpan={colSpan}
            className="bg-yellow-500 p-5 rounded-md"
          />
          <GridItem
            colSpan={colSpan}
            className="bg-yellow-500 p-5 rounded-md"
          />
          <GridItem
            colSpan={colSpan}
            className="bg-yellow-500 p-5 rounded-md"
          />
        </Grid>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
