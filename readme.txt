React native allow us to create mobile apps with use of JavaScript, JSX and React code.

All react native elements have to be imported from 'react-native' in curly braces
Also styles have to be imported from react native as StyleSheet and added after the app component as:
const styles = StyleSheet.create({
    object json z klasami
})
Zastosowanie klas:
<View style={styles.container}></View>
List of adequate elements in comparison to html tags. Below tag examples of mandatory(m) or optional props of specific elements:
View = div
------
Text = p - use everytime when we want to display a bit of text
------
<Button /> = button
title='button name' 
------
<TextInput /> = input
multiline - allow extention of input field to multiline when inputing data
placeholder - pleceholder text for input
onChangeText - event listener like onChange in React
keyboadType - type of keyboard to show (ex. value: 'numeric')
more in documentation
------
<ScrollView></ScrollView> - No adequate element in HTML. Somthing like CSS's overflow: scroll, so allow to scroll the content inside that element
-----
<FlatList /> - FlatList is a way to display data in form of a list of objects.It's substitue to ScrollView but works more effectively through displaying part of the list that's allready in viewport instead of rendering the whole list. Object served to FlatList must have a 'key' property in it and we have to destructurize when we serve it into the callback function as and argument.
data={people} - data is mandatory and receives db object as a value
renderItem={({ item }) => (jsx)} - mandatory. Receives function as value. argument passed to function has to be named item and descructured as shown.
keyExtractor={(item) => (item.id)} - that prop is a way to substitute key with for example id or any other unike property of given object
numColumns = spits list into columns like in CSS grid