import "./global.css";
import React from "react";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
import { SafeAreaView, Text, View } from "react-native";
import { Grid, GridItem } from "./components/ui/grid";

export default function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaView
        style={
          {
            // flex: 1,
            // alignItems: "center",
            // justifyContent: "center",
          }
        }
      >
        <View className="w-[200px]">
          <Grid
            numColumns={4}
            // rowSpacing={2}
            // columnSpacing={2}
            // spacing={5}
            spacing={5}
            className="flex-row bg-red-600 m-10"
          >
            {/* <GridItem colSpan={12} className="bg-pink-500 ">
              <Text>1</Text>
            </GridItem> */}
            <GridItem colSpan={2} className="bg-pink-500">
              <Text>2</Text>
            </GridItem>
            <GridItem colSpan={4} className="bg-pink-500">
              <Text>4</Text>
            </GridItem>
            <GridItem colSpan={2} className="bg-pink-500">
              <Text>2</Text>
            </GridItem>
            <GridItem colSpan={3} className="bg-pink-500">
              <Text>3</Text>
            </GridItem>
            <GridItem className="bg-pink-500">
              <Text>1</Text>
            </GridItem>
            <GridItem className="bg-pink-500">
              <Text>1</Text>
            </GridItem>
            <GridItem className="bg-pink-500">
              <Text>1</Text>
            </GridItem>
            <GridItem className="bg-pink-500">
              <Text>1</Text>
            </GridItem>
            <GridItem className="bg-pink-500">
              <Text>1</Text>
            </GridItem>
            <GridItem className="bg-pink-500">
              <Text>1</Text>
            </GridItem>
            <GridItem className="bg-pink-500">
              <Text>1</Text>
            </GridItem>
          </Grid>
        </View>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
