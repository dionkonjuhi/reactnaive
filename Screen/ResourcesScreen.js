import React from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

class ResourcesScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            photos: [],
            albums: [],
            activeSection: 'comments',
            loading: true,
            error: null,
        };
    }

    async componentDidMount() {
        try {
            const [commentsResponse, photosResponse, albumsResponse] = await Promise.all([
                fetch('https://jsonplaceholder.typicode.com/comments'),
                fetch('https://jsonplaceholder.typicode.com/photos'),
                fetch('https://jsonplaceholder.typicode.com/albums'),
            ]);

            const [comments, photos, albums] = await Promise.all([
                commentsResponse.json(),
                photosResponse.json(),
                albumsResponse.json(),
            ]);

            this.setState({ comments, photos, albums, loading: false });
        } catch (error) {
            this.setState({
                error: 'Could not load the resources.',
                loading: false,
            });
        }
    }

    renderComment = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.itemId}>Comment {item.id}</Text>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.body}>{item.body}</Text>
        </View>
    );

    renderComments = () => (
        <FlatList
            data={this.state.comments}
            keyExtractor={(item) => String(item.id)}
            renderItem={this.renderComment}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
        />
    );

    renderPhotos = () => (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.photoGrid}
            showsVerticalScrollIndicator={false}
        >
            {this.state.photos.slice(0, 100).map((photo) => (
                <View key={String(photo.id)} style={styles.photoCard}>
                    <Image
                        source={{ uri: photo.thumbnailUrl }}
                        style={styles.photoImage}
                        resizeMode="cover"
                    />
                    <Text style={styles.photoTitle} numberOfLines={2}>{photo.title}</Text>
                </View>
            ))}
        </ScrollView>
    );

    renderAlbums = () => (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
        >
            {this.state.albums.map((album) => (
                <View key={String(album.id)} style={styles.albumCard}>
                    <Text style={styles.itemId}>Album {album.id}</Text>
                    <Text style={styles.title}>{album.title}</Text>
                </View>
            ))}
        </ScrollView>
    );

    renderActiveSection = () => {
        const { activeSection } = this.state;

        if (activeSection === 'comments') {
            return this.renderComments();
        }
        if (activeSection === 'photos') {
            return this.renderPhotos();
        }
        return this.renderAlbums();
    };

    render() {
        const { activeSection, loading, error } = this.state;
        const sections = [
            { key: 'comments', label: 'Comments' },
            { key: 'photos', label: 'Images' },
            { key: 'albums', label: 'Albums' },
        ];

        return (
            <View style={styles.container}>
                <Text style={styles.screenTitle}>Resources</Text>

                <View style={styles.tabs}>
                    {sections.map((section) => (
                        <TouchableOpacity
                            key={section.key}
                            style={[
                                styles.tab,
                                activeSection === section.key && styles.activeTab,
                            ]}
                            onPress={() => this.setState({ activeSection: section.key })}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    activeSection === section.key && styles.activeTabText,
                                ]}
                            >
                                {section.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {loading ? (
                    <View style={styles.messageContainer}>
                        <ActivityIndicator size="large" color="#006f8e" />
                        <Text style={styles.messageText}>Loading resources...</Text>
                    </View>
                ) : error ? (
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>{error}</Text>
                    </View>
                ) : (
                    this.renderActiveSection()
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
    tabs: {
        flexDirection: 'row',
        marginHorizontal: 12,
        marginBottom: 8,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 4,
        borderRadius: 8,
        backgroundColor: '#e1e9ec',
    },
    activeTab: {
        backgroundColor: '#006f8e',
    },
    tabText: {
        color: '#29434d',
        fontSize: 13,
        fontWeight: '600',
    },
    activeTabText: {
        color: 'white',
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
    email: {
        color: '#5a7180',
        marginBottom: 5,
    },
    body: {
        color: '#455b63',
        lineHeight: 20,
    },
    scrollView: {
        flex: 1,
    },
    photoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingBottom: 20,
    },
    photoCard: {
        width: '48%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 12,
        padding: 8,
        borderWidth: 1,
        borderColor: '#dde7ea',
    },
    photoImage: {
        width: '100%',
        height: 120,
        borderRadius: 7,
        backgroundColor: '#e4ecef',
    },
    photoTitle: {
        marginTop: 7,
        color: '#455b63',
        fontSize: 13,
    },
    albumCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#dde7ea',
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

export default ResourcesScreen;
