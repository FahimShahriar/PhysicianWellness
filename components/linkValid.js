import {Linking} from 'react-native'

export default function linkValid ( url) {
	
	Linking.canOpenURL(url)
		.then((supported) => {
			if (supported) {
				return Linking.openURL(url)
					.catch(() => null);
			}
		});
}