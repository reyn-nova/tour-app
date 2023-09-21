import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MapView from 'react-native-maps';
import Swiper from 'react-native-swiper';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DestinationDetail = props => {
  const sliderData = [
    {
      id: 0,
      uri: 'https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    },
    {
      id: 1,
      uri: 'https://images.unsplash.com/photo-1571880826835-7ab2b833ad07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    },
  ];

  const price = 55;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={props.navigation.goBack}
          style={styles.backButton}>
          <FontAwesome name="chevron-left" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Destination Detail</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.sliderContainer}>
          <Swiper showsPagination activeDotColor="goldenrod" dotColor="gray">
            {sliderData.map(item => {
              return (
                <Image
                  key={item.id}
                  source={{
                    uri: item.uri,
                  }}
                  style={styles.sliderImage}
                />
              );
            })}
          </Swiper>
        </View>

        <View style={styles.destinationLabelContainer}>
          <Text style={styles.destinationLabel}>Padar Island</Text>

          <Text style={styles.destinationPriceLabel}>${price} / pax</Text>
        </View>

        <Text style={styles.descriptionLabel}>
          Experience the enchanting beauty of Padar Island's lush landscape
          scenery.
        </Text>

        <View style={styles.mapContainer}>
          <MapView
            scrollEnabled={false}
            rotateEnabled={false}
            zoomEnabled={false}
            initialRegion={{
              latitude: -8.6491277,
              longitude: 119.5805411,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            style={styles.map}
          />
        </View>
      </ScrollView>

      <View style={styles.orderNowButtonContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.orderNowButton}
          onPress={() =>
            props.navigation.navigate('PersonalInformation', {price})
          }>
          <Text style={styles.orderNowButtonLabel}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'mediumseagreen',
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  scrollView: {
    backgroundColor: 'white',
    flex: 1,
  },
  sliderContainer: {
    height: 250,
  },
  sliderImage: {
    height: 250,
    width: '100%',
  },
  destinationLabelContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  destinationLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  destinationPriceLabel: {
    fontSize: 20,
    color: 'mediumseagreen',
    fontWeight: 'bold',
  },
  descriptionLabel: {
    paddingHorizontal: 20,
  },
  mapContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  map: {
    height: 200,
    width: '100%',
  },
  orderNowButtonContainer: {
    padding: 20,
    backgroundColor: 'mediumseagreen',
    alignItems: 'flex-end',
  },
  orderNowButton: {
    backgroundColor: 'goldenrod',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  orderNowButtonLabel: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DestinationDetail;
