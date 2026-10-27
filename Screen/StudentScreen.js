import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const student = {
  firstName: 'Arben',
  lastName: 'Brahimi',
  birthDate: '15/06/2002',
  age: 24,
  city: 'Prishtina',
  email: 'arben.brahimi@email.com',
  phone: '+383 49 123 456',
};

const hobbies = ['Leximi', 'Sporti', 'Programimi', 'Muzika'];
const learnedTopics = ['HTML', 'CSS', 'JavaScript', 'React Native', 'Expo', 'Git'];

const StudentScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Profili i Studentit</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Emri: <Text style={styles.value}>{student.firstName}</Text></Text>
        <Text style={styles.label}>Mbiemri: <Text style={styles.value}>{student.lastName}</Text></Text>
        <Text style={styles.label}>Datëlindja: <Text style={styles.value}>{student.birthDate}</Text></Text>
        <Text style={styles.label}>Mosha: <Text style={styles.value}>{student.age}</Text></Text>
        <Text style={styles.label}>Qyteti: <Text style={styles.value}>{student.city}</Text></Text>
        <Text style={styles.label}>Email: <Text style={styles.value}>{student.email}</Text></Text>
        <Text style={styles.label}>Telefoni: <Text style={styles.value}>{student.phone}</Text></Text>

        <Text style={styles.sectionTitle}>Hobbies:</Text>
        <Text style={styles.value}>{hobbies.join(', ')}</Text>

        <Text style={styles.sectionTitle}>Gjerat e mesuara deri tani:</Text>
        <Text style={styles.value}>{learnedTopics.join(', ')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1d3557',
    marginBottom: 16,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    color: '#2b2d42',
    marginBottom: 10,
    fontWeight: '600',
  },
  value: {
    fontSize: 15,
    color: '#495057',
    fontWeight: '400',
  },
  sectionTitle: {
    marginTop: 14,
    marginBottom: 6,
    fontSize: 17,
    fontWeight: '700',
    color: '#1d3557',
  },
});

export default StudentScreen;
