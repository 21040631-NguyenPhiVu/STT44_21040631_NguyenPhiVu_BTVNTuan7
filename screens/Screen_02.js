import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, FlatList } from "react-native";

const Screen_02 = () => {
    const products = [
        { id: 1, type: 'iphone', name: 'Iphone 12', price: '$899', image: require('../assets/Data/1.png') },
        { id: 2, type: 'iphone', name: 'Iphone 11', price: '$889', image: require('../assets/Data/2.png') },
        { id: 3, type: 'iphone', name: 'Iphone XSMax', price: '$799', image: require('../assets/Data/3.png') },
        { id: 4, type: 'iphone', name: 'Iphone 13', price: '$999', image: require('../assets/Data/4.png') },
    ];
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/Data/back.png')} style={{ marginHorizontal: 10 }} />
                <Text style={{ fontSize: 23, fontWeight: 'bold', marginHorizontal: 10 }}>Electronics</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/Data/basket.png')} style={{ marginLeft: 120 }} />
                </TouchableOpacity>
                <Image source={require('../assets/Data/Avatar_31.png')} style={{ width: 35, height: 35, marginLeft: 5 }} />
            </View>

            <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', height: 45, marginTop: 20 }}>
                <View style={{ flexDirection: 'row', width: '85%', backgroundColor: '#f3f4f6' }}>
                    <Image source={require('../assets/Data/search.png')} style={{ width: 20, height: 20, alignSelf: 'center', marginHorizontal: 10 }} />
                    <TextInput placeholder='Search' style={{ width: '105%', height: 45, fontSize: 17 }} />
                </View>
                <TouchableOpacity style={{ width: 45, marginLeft: 15 }}>
                    <Image source={require('../assets/Data/filter.png')} style={{ width: 55, height: 45, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', resizeMode: 'contain' }} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Categories</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'gray', fontSize: 20 }}>See all</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
            }}>
                <TouchableOpacity>
                    <Image source={require('../assets/Data/iphoneCategory.png')} style={{ width: 105, height: 105, resizeMode: 'contain', borderRadius: 15 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/Data/ipadCategory.png')} style={{ width: 105, height: 105, resizeMode: 'contain', borderRadius: 15 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/Data/macbookcategory.png')} style={{ width: 105, height: 105, resizeMode: 'contain', borderRadius: 15 }} />
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
            }}>
                <TouchableOpacity style={{
                    backgroundColor: '#ebfdff',
                    width: 105,
                    height: 35,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{ color: '#2bc9de', fontSize: 14, fontWeight: 'bold' }}>Best Sales</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: '#ffffff',
                    width: 105,
                    height: 35,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{ color: 'gray', fontSize: 14, fontWeight: '500' }}>Best Matched</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: '#ffffff',
                    width: 105,
                    height: 35,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{ color: 'gray', fontSize: 14, fontWeight: '500' }}>Popular</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={products}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <Image source={item.image} style={styles.productImage} />
                        <View style={styles.productDetails}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Image source={require('../assets/Data/Rating5.png')} style={{ width: 70, height: 20, resizeMode: 'contain' }} />
                        </View>
                        <View style={styles.priceContainer}>
                            <TouchableOpacity>
                                <Image source={require('../assets/Data/add.png')} style={styles.addIcon} />
                            </TouchableOpacity>
                            <Text style={styles.productPrice}>{item.price}</Text>
                        </View>
                    </View>
                )}
            />

            <TouchableOpacity style={{
                width: '90%',
                height: 50,
                backgroundColor: '#f3f4f6',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
            }}>
                <Text>See all</Text>
            </TouchableOpacity>

            <View style={{
                width: '90%',
                alignSelf: 'center',
                height: 100,
            }}>
                <Image source={require('../assets/Data/banner.png')} style={{ width: '100%', height: 70, marginTop: 20 }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
        alignSelf: 'center',
        height: 100,
    },
    productImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    productDetails: {
        flex: 1,
        marginLeft: 15,
    },
    productName: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    priceContainer: {
        alignItems: 'flex-end',
        marginRight: 10,
    },
    addIcon: {
        width: 30,
        height: 30,
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Screen_02;