import React from 'react';
import {
	View,
	ActivityIndicator,
	StyleSheet,
	Platform
} from 'react-native';

const Spinner = () => (
	<View style={styles.progressBar}>
        <View style={{ height: 80, width: 80 , backgroundColor: 'black', justifyContent: 'center', borderRadius: 8 }}>
		<ActivityIndicator size="large" color={Platform.OS === "ios" ? "white" : "#EA0000"} />
        </View>
	</View>
);

const styles = StyleSheet.create({
	progressBar: {
		flex: 1,
		justifyContent: 'center'
	}
});

export default Spinner;
