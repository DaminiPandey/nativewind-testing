import "./global.css";
import React from "react";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { Grid, GridItem } from "./components/ui/grid";

export default function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Grid className="bg-pink-600 p-8 gap-5" numColumns={4}>
          <GridItem
            // colSpan={4}
            className="bg-background-50 rounded-md text-center"
          >
            <View className="p-20">
              <Text className="text-sm">01</Text>
            </View>
          </GridItem>
          <GridItem
            // colSpan={4}
            className="bg-background-50 rounded-md text-center"
          >
            <View className="p-20">
              <Text className="text-sm">01</Text>
            </View>
          </GridItem>
          <GridItem
            // colSpan={4}
            className="bg-background-50 rounded-md text-center"
          >
            <View className="p-20">
              <Text className="text-sm">01</Text>
            </View>
          </GridItem>
          <GridItem
            // colSpan={4}
            className="bg-background-50 rounded-md text-center"
          >
            <View className="p-20">
              <Text className="text-sm">01</Text>
            </View>
          </GridItem>
          <GridItem
            // colSpan={4}
            className="bg-background-50 rounded-md text-center"
          >
            <View className="p-20">
              <Text className="text-sm">01</Text>
            </View>
          </GridItem>
          <GridItem
            // colSpan={4}
            className="bg-background-50 p-2  rounded-md text-center"
          >
            <Text className="text-sm">01</Text>
          </GridItem>
          <GridItem
            // colSpan={4}
            className="bg-background-50 p-2  rounded-md text-center"
          >
            <Text className="text-sm">01</Text>
          </GridItem>
          <GridItem
            // colSpan={4}
            className="bg-background-50 p-2  rounded-md text-center"
          >
            <Text className="text-sm">01</Text>
          </GridItem>

          {/* <GridItem
            colSpan={4}
            className="bg-background-50 p-3 rounded-md text-center"
          >
            <Text className="text-sm">02</Text>
          </GridItem>
          <GridItem
            colSpan={4}
            className="bg-background-50 p-3 rounded-md text-center"
          >
            <Grid numColumns={4} className="gap-5">
              <GridItem
                colSpan={1}
                className="bg-background-200 p-3 rounded-md"
              >
                <Text className="text-sm">01</Text>
              </GridItem>
              <GridItem
                colSpan={3}
                className="bg-background-200 p-3 rounded-md"
              >
                <Text className="text-sm">04</Text>
              </GridItem>
              <GridItem
                colSpan={4}
                className="bg-background-200 p-3 rounded-md"
              >
                <Text className="text-sm">04</Text>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem
            colSpan={4}
            className="bg-background-50 p-2 rounded-md text-center"
          >
            <Grid numColumns={4} className="gap-5">
              <GridItem
                colSpan={2}
                className="bg-background-200 p-3 rounded-md"
              >
                <Text className="text-sm">01</Text>
              </GridItem>
              <GridItem
                colSpan={2}
                className="bg-background-200 p-3 rounded-md"
              >
                <Text className="text-sm">02</Text>
              </GridItem>
              <GridItem
                colSpan={2}
                className="bg-background-200 p-3 rounded-md"
              >
                <Text className="text-sm">03</Text>
              </GridItem>
              <GridItem
                colSpan={2}
                className="bg-background-200 p-3 rounded-md"
              >
                <Text className="text-sm">04</Text>
              </GridItem>
            </Grid>
          </GridItem> */}
        </Grid>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
