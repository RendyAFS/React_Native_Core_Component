import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';

// Dummmy Data (Array of Object)
const datas = [
    {
        id: 1,
        title:
            "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
    {
        id: 2,
        title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
    {
        id: 3,
        title:
            "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
    {
        id: 4,
        title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
    {
        id: 5,
        title:
            "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    },
    {
        id: 6,
        title:
            "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
    {
        id: 7,
        title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
    {
        id: 8,
        title:
            "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
    {
        id: 9,
        title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
    {
        id: 10,
        title:
            "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    },
];

const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.view}
        onPress={() => {
          setSelectedItem(item);
          setModalVisible(true);
        }}>
        <View>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{selectedItem.title}</Text>
              <Image source={{ uri: selectedItem.image }} style={styles.modalImage} />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Close Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 15,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  image: {
    height: 200,
    width: null,
  },
  text: {
    fontSize: 18,
    paddingTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.6)", 
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    marginTop:25,
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalImage: {
    height: 200,
    width: 200,
  },
});

export default List;