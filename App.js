import "./global.css";
import React from "react";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
import { SafeAreaView, Text, View } from "react-native";
import { Grid, GridItem } from "./components/ui/grid";

export default function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Grid
          numColumns={8}
          className="bg-pink-200 flex-row-reverse pl-[50px] gap-x-5 gap-y-5"
        >
          <GridItem colSpan={2} className="bg-pink-500">
            <Text>2</Text>
          </GridItem>
          <GridItem colSpan={4} className="bg-pink-500">
            <Text>4</Text>
          </GridItem>
          <GridItem colSpan={2} className="bg-pink-500">
            <Text>2</Text>
          </GridItem>

          <GridItem colSpan={8} className="bg-pink-500">
            <Text>8</Text>
          </GridItem>

          <GridItem colSpan={8} className="bg-pink-500">
            <Text>12</Text>
          </GridItem>

          <GridItem colSpan={2} className="bg-pink-500">
            <Text>2</Text>
          </GridItem>
          <GridItem colSpan={6} className="bg-pink-500">
            <Text>6</Text>
          </GridItem>
        </Grid>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
