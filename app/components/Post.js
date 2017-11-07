import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class Post extends Component {
    render() {
        const {title, subreddit, preview} = this.props

        let image
        try {
            image = preview.images[0].source.url
        } catch (e) { }
        
        return (
            <View style={styles.container}>
                <View style={styles.thumbnailSection}>
                    {
                     image ?
                        <Image
                            style={{width: 60, height: 60}}
                            source={{uri: image}}
                        /> :
                        <View
                            style={{width: 60, height: 60, backgroundColor: '#eee'}}
                        />          
                    }
                </View>
                <View>
                    <Text numberOfLines={2}>{title}</Text>
                    <Text style={styles.subreddit}>{subreddit}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        padding: 15,
        flexDirection: 'row',
    },
    thumbnailSection: {
        width: 80,
    },
    textSection: {
        flex: 1,
    },
    subreddit: {
        fontSize: 11,
        color: '#999',
    },
})