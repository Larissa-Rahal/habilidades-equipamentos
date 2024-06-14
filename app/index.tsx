import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { styles } from "./styles";
import Image1 from "../src/assets/images/Imagem1.png"
import { useState } from 'react';

export default function Index() {
  const [skillsList, setSkillsList] = useState(['Skill1', 'Skill2', 'Skill3'])

  return (
    <View style={styles.container}
    >
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.title}>
          Skills
        </Text>
        <TextInput style={styles.input} placeholder={'Escreva sua habilidade'} placeholderTextColor={'#588'} />
        <FlatList
          data={skillsList}
          renderItem={({ item }) => {
            return <View>
              <Image style={styles.image} source={Image1} />
              <Text>{item}</Text>
            </View>
          }}
          keyExtractor={item => item}
        />
      </TouchableOpacity>
    </View>
  )
}