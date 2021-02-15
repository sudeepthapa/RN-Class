import React from 'react';
import { StyleSheet, ScrollView, View, Text, ImageBackground, SectionList, FlatList } from 'react-native';
import { FOODS } from './constants/data';

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

export default function App() {
  return (
    <ScrollView>
      <ScrollView horizontal style={styles.container} showsHorizontalScrollIndicator={false}>
        {FOODS.map(food => {
          return <ImageBackground key={food.title} style={[styles.box]} source={{ uri: food.image }}>
            <Text style={styles.title}>{food.title}</Text>
          </ImageBackground>
        })
        }
      </ScrollView>

      <SectionList
        sections={DATA}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section }) => <Text style={styles.heading}> {section.title} </Text>}
      />

      <FlatList
        data={FOODS}
        horizontal
        renderItem={({ item }) => <ImageBackground key={item.title} style={[styles.box]} source={{ uri: item.image }}>
          <Text style={styles.title}>{item.title}</Text>
        </ImageBackground>}
        keyExtractor={(item, index) => item.title + index}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  box: {
    height: 150,
    width: 150,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  image: {
    height: '100%'
  },
  title: {
    fontSize: 30,
    color: '#fff'
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  item: {
    fontSize: 14,
    marginLeft: 30
  }
});
