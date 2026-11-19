import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from 'react-native';

class PostsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
            error: null,
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');

            if (!response.ok) {
                throw new Error('Could not load posts.');
            }

            const posts = await response.json();
            this.setState({ posts, loading: false });
        } catch (error) {
            this.setState({
                error: 'Could not load the posts.',
                loading: false,
            });
        }
    }

    renderPost = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.itemId}>Post {item.id}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
        </View>
    );

    renderPosts = () => (
        <FlatList
            data={this.state.posts}
            keyExtractor={(item) => String(item.id)}
            renderItem={this.renderPost}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
        />
    );

    render() {
        const { loading, error } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.screenTitle}>Posts</Text>

                {loading ? (
                    <View style={styles.messageContainer}>
                        <ActivityIndicator size="large" color="#006f8e" />
                        <Text style={styles.messageText}>Loading posts...</Text>
                    </View>
                ) : error ? (
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>{error}</Text>
                    </View>
                ) : (
                    this.renderPosts()
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f7f9',
        paddingTop: 45,
    },
    screenTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#12333d',
        marginHorizontal: 16,
        marginBottom: 12,
    },
    listContent: {
        paddingHorizontal: 12,
        paddingBottom: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 14,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#dde7ea',
    },
    itemId: {
        color: '#006f8e',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    title: {
        color: '#1b3038',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
    },
    body: {
        color: '#455b63',
        lineHeight: 20,
    },
    messageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageText: {
        color: '#455b63',
        marginTop: 10,
    },
});

export default PostsScreen;
