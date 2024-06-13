import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { styles } from "./styles";
import Image1 from "../src/assets/images/Imagem1.png"

export default function Index(){
  return (
    <View style={styles.container}
    >
      <TouchableOpacity activeOpacity={0.7}>
      <Text style={styles.title}>
        Skills
      </Text>
      <TextInput style={styles.input} placeholder={'Escreva sua habilidade'} placeholderTextColor={'#588'}  />
      <FlatList
          data={skillsList}
          renderItem={({item}) => {
            return <View>
              <Image style={styles.image} source={Image1} />
              <Text>{item}</Text>
            </View>
          }}
        />
      </TouchableOpacity>
    </View>
  )
}