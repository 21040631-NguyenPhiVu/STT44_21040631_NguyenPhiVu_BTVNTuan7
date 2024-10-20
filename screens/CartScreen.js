import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const CartScreen = ({ route }) => {
    const navigation = useNavigation();
    const { cart } = route.params;  // Assuming you pass cart data through navigation
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (cart) {
            setCartItems(Object.values(cart));
        }
    }, [cart]);

    const handleRemoveItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const handleUpdateQuantity = (id, action) => {
        setCartItems(prevItems => {
            return prevItems.map(item => {
                if (item.id === id) {
                    const updatedQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
                    return { ...item, quantity: Math.max(updatedQuantity, 1) };
                }
                return item;
            });
        });
    };

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.cartItemImage} />
            <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <Text style={styles.cartItemPrice}>Price: {item.price}</Text>
                <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
            </View>
            <View style={styles.cartItemActions}>
                <TouchableOpacity onPress={() => handleUpdateQuantity(item.id, 'increase')}>
                    <Text style={styles.actionButton}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleUpdateQuantity(item.id, 'decrease')}>
                    <Text style={styles.actionButton}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                    <Text style={styles.removeButton}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const handleCheckout = () => {
        alert("Checkout process not implemented yet.");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shopping Cart</Text>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.id.toString()}
                renderItem={renderCartItem}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
            <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
                <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 1,
    },
    cartItemImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginRight: 10,
    },
    cartItemDetails: {
        flex: 1,
    },
    cartItemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cartItemPrice: {
        fontSize: 16,
        color: 'gray',
    },
    cartItemQuantity: {
        fontSize: 16,
    },
    cartItemActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButton: {
        fontSize: 18,
        paddingHorizontal: 10,
    },
    removeButton: {
        color: 'red',
        marginLeft: 10,
    },
    checkoutButton: {
        backgroundColor: '#2bc9de',
        borderRadius: 10,
        paddingVertical: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CartScreen;