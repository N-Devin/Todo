import {
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { IconButton, IcontButton } from "react-native-paper";

const TodoScreen = () => {
  const [todo, setTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);
  const [editTodo, setEditTodo] = React.useState(null);
  const handleAddTodo = () => {
    console.log(todo);

    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  const handleTodoDelete = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  const handleEditTodo = (item) => {
    setEditTodo(item);
    setTodo(item.title);
  };

  const handleUpdateTodo = () => {
    const updatedItem = todoList.map((item) =>
      item.id === editTodo.id ? { ...item, title: todo } : item
    );
    setTodoList(updatedItem);
    setEditTodo(null);
    setTodo("");
  };

  const renderTodos = (item, index) => {
    return (
      <View
        style={{
          backgroundColor: "#C9ADA7",
          borderRadius: 10,
          paddingVertical: 12,
          paddingHorizontal: 16,
          marginBottom: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton
          icon="pencil"
          iconColor="#35666F"
          onPress={() => handleEditTodo(item)}
        />
        <Text
          style={{
            color: "#22223B",
            fontSize: 18,
            textAlign: "center",
            flex: 1,
          }}
        >
          {item.title}
        </Text>
        <IconButton
          icon="trash-can"
          iconColor="#D65E5E"
          onPress={() => handleTodoDelete(item.id)}
        />
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 16 }}>
      {/* <TodoScreen /> */}
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#9A8C98",
          borderRadius: 6,
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}
        placeholder="add a few tasks"
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />

      {editTodo ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#35666F",
            fontWeight: "Bold",
            fontSize: 20,
            paddingVertical: 10,
            marginVertical: 24,
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => {
            handleUpdateTodo();
          }}
        >
          <Text
            style={{
              color: "#F2E9E4",
              fontSize: 20,
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "#4A4E69",
            fontWeight: "Bold",
            fontSize: 20,
            paddingVertical: 10,
            marginVertical: 24,
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => {
            handleAddTodo();
          }}
        >
          <Text
            style={{
              color: "#F2E9E4",
              fontSize: 20,
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={todoList}
        renderItem={({ item, index }) => renderTodos(item, index)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
