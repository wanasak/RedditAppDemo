import React, { Component } from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'

export default class Comment extends Component {
    static propTypes = {
        body: PropTypes.string,
        subreddit: PropTypes.string,
        author: PropTypes.string,
    }
    
    render() {
        const {body, subreddit, author} = this.props
        
        return (
            <View style={styles.container}>
                <View style={styles.textSection}>
                    <Text numberOfLines={2}>{body}</Text>
                    <View style={styles.textSection}>
                        <Text style={styles.subreddit}>{subreddit}</Text>
                        <Text style={styles.subreddit}>{author}</Text>
                    </View>
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
      marginLeft: 20,
      borderTopWidth: 1,
      borderTopColor: 'rgba(0,0,0,0.3)',
    },
    thumbnailSection: {
      width: 80
    },
    textSection: {
      flex: 1
    },
    detailInfo: {
      flexDirection: 'column',
      flex: 1,
    },
    subreddit: {
      color: '#999',
      fontSize: 11,
    }
  })