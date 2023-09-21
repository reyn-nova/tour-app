import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = props => {
  const [search, setSearch] = useState('');
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);

  const destinations = [
    'Mount Ijen',
    'Mount Bromo',
    'Museum Fatahillah',
    'National Monument',
  ];

  const sliderData = [
    {
      id: 0,
      name: 'Padar Island',
      uri: 'https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    },
    {
      id: 1,
      name: 'Mount Kerinci',
      uri: 'https://images.unsplash.com/photo-1684141419225-d56a858465b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  const categories = [
    {
      id: 0,
      name: 'Adventure',
      items: [
        {
          id: 0,
          name: 'Mount Ijen',
          uri: 'https://images.unsplash.com/photo-1555058170-94d5f5016a2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: 1,
          name: 'Mount Bromo',
          uri: 'https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80',
        },
      ],
    },
    {
      id: 1,
      name: 'Historical',
      items: [
        {
          id: 0,
          name: 'Museum Fatahillah',
          uri: 'https://images.unsplash.com/photo-1642064816139-36f0f72192b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
        },
        {
          id: 1,
          name: 'National Monumemnt',
          uri: 'https://images.unsplash.com/photo-1611637405506-e6e6ca710362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80',
        },
      ],
    },
  ];

  const MainContent = (
    <>
      <View style={styles.welcomeSectionContainer}>
        <Text style={styles.welcomeSectionLabel}>Welcome to Tour App!</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
        style={styles.scrollViewContainer}>
        <View style={styles.sliderContainer}>
          <Swiper
            showPagination={true}
            height={200}
            dotColor="gray"
            activeDotColor="goldenrod">
            {sliderData.map(slider => {
              return (
                <View key={slider.id}>
                  <Image
                    source={{
                      uri: slider.uri,
                    }}
                    style={styles.sliderImage}
                  />
                </View>
              );
            })}
          </Swiper>
        </View>

        <Text style={styles.byCategoryLabel}>By Type</Text>

        {categories.map(category => {
          return (
            <View key={category.id} style={styles.categoryContainer}>
              <Text style={styles.categoryNameLabel}>{category.name}</Text>

              <ScrollView
                horizontal={true}
                contentContainerStyle={
                  styles.categoryScrollViewContentContainer
                }>
                {category.items.map(categoryItem => {
                  return (
                    <TouchableOpacity
                      key={categoryItem.id}
                      activeOpacity={0.6}
                      style={styles.categoryItemButton}
                      onPress={() =>
                        props.navigation.navigate('DestinationDetail')
                      }>
                      <Image
                        style={styles.categoryItemImage}
                        source={{uri: categoryItem.uri}}
                      />

                      <Text style={styles.categoryItemName}>
                        {categoryItem.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          );
        })}
      </ScrollView>
    </>
  );

  const SearchSection = (
    <View style={styles.searchPageContainer}>
      {destinations
        .filter(item => item.toLowerCase().includes(search.toLowerCase()))
        .map(item => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => props.navigation.navigate('DestinationDetail')}
              style={styles.searchItemButton}>
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        })}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchSectionContainer}>
          <TextInput
            placeholder="Search Destination"
            placeholderTextColor="darkgray"
            style={styles.searchTextInput}
            onFocus={() => setIsSearchInputFocused(true)}
            onBlur={() => setIsSearchInputFocused(false)}
            onChangeText={value => setSearch(value)}
            autoCorrect={false}
          />

          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.searchSubmitButton}>
            <FontAwesome name="search" color="white" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.mainContentContainer}>
          {isSearchInputFocused ? SearchSection : MainContent}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'mediumseagreen',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  searchSectionContainer: {
    backgroundColor: 'mediumseagreen',
    flexDirection: 'row',
    padding: 15,
  },
  searchTextInput: {
    backgroundColor: 'white',
    color: 'black',
    flex: 1,
    padding: 10,
    borderRadius: 10,
  },
  searchSubmitButton: {
    backgroundColor: 'goldenrod',
    marginLeft: 15,
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContentContainer: {
    flex: 1,
  },
  welcomeSectionContainer: {
    backgroundColor: 'mediumseagreen',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeSectionLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollViewContentContainer: {
    flexGrow: 1,
  },
  scrollViewContainer: {
    flex: 1,
  },
  sliderContainer: {
    height: 250,
  },
  sliderImage: {
    height: 250,
    width: '100%',
  },
  byCategoryLabel: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  categoryContainer: {
    backgroundColor: 'rgb(60, 60, 60)',
    paddingBottom: 20,
    marginBottom: 10,
  },
  categoryNameLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  categoryScrollViewContentContainer: {
    paddingRight: 20,
  },
  categoryItemButton: {
    marginLeft: 20,
  },
  categoryItemImage: {
    height: 200,
    width: 150,
    borderRadius: 10,
  },
  categoryItemName: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  searchPageContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  searchItemButton: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 20,
  },
});

export default Home;
