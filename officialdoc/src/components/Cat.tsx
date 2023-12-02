import React from 'react';
import { Text, View } from 'react-native';

// type
type CatProps = {
    name: string;
};

const Cat = (props: CatProps) => {
    return (
        <View>
            <Text>Hello, I am {props.name}!</Text>
        </View>
    )
};

const Cafe = () => {
    return (
        <View>
            <Cat name="Munkustrap" />
            <Cat name="Spot" />
        </View>
    )
}

export default Cafe;