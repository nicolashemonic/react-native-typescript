import React, { Component } from "react";

import {
	View,
	Text,
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity
} from "react-native";

import style from "../styles/select-action";

import FontAwesome, { Icons } from "react-native-fontawesome";

export default class SelectActionScreen extends Component<any, any> {
	static navigationOptions = {
		title: "What do you wish to do?"
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	selectAction = () => {
		this.setState({});
	};

	render() {
		const { navigate } = this.props.navigation;
		const Touchable =
			Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
		return (
			<View style={style.actionView}>
				<Touchable
					style={style.closeActionWrapper}
					onPress={() => navigate("SelectRates")}>
					<FontAwesome style={style.iconAction}>{Icons.lock}</FontAwesome>
					<Text style={style.closeAction}>Close one or more rates</Text>
				</Touchable>
				<Touchable
					style={style.openActionWrapper}
					onPress={() => navigate("SelectRates")}>
					<FontAwesome style={style.iconAction}>{Icons.unlock}</FontAwesome>
					<Text style={style.openAction}>Open one or more rates</Text>
				</Touchable>
			</View>
		);
	}
}
