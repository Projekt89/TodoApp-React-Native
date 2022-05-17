import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

export default function AddTodo({ submitHandler }) {
  const [newTodo, setNewTodo] = useState('')    
  
  return (
    <View>
      <Text>Add new todo:</Text>
      <TextInput
        style={styles.input}
        placeholder = 'new todo...'
        value = {newTodo}
        onChangeText = {(val) => setNewTodo(val)}
      />
      <Button onPress={() => submitHandler(newTodo)} title='add todo' color='coral' />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 20
  }
})