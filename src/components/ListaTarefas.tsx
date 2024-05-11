import React from "react";
import { FlatList, Text, Box, IconButton, Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useEstadoGlobal } from "../hooks/EstadoGlobal";

interface TarefaItemProps {
  id: number;
  tarefa: string;
}

const TarefaItem: React.FC<TarefaItemProps> = ({ id, tarefa }) => {
  const { editarTarefa, excluirTarefa } = useEstadoGlobal();
  
  const [editando, setEditando] = React.useState(false);
  const [novoTitulo, setNovoTitulo] = React.useState(tarefa);

  const handleEditar = () => {
    if (editando) {
      editarTarefa(id, novoTitulo); 
    }
    setEditando(!editando); 
  };

  return (
    <Box
      flexDirection="row" 
      justifyContent="space-between"
      alignItems="center" 
      bg="#60a8d8" 
      p={4} 
      my={2} 
      mx={2} 
    >
      {editando ? ( 
        <Input
          flex={3} 
          value={novoTitulo} 
          onChangeText={setNovoTitulo} 
        />
      ) : (
        <Text flex={3}>{tarefa}</Text> 
      )}
      <IconButton
        icon={<Ionicons name={editando ? "checkmark" : "pencil"} size={14} color="#ec1e8f" />} 
        colorScheme="light"
        onPress={handleEditar} 
        style={{ borderRadius: 50, backgroundColor: 'green', marginLeft: 4 }} 
      />
      <IconButton
        icon={<Ionicons name="trash" size={14} color="#402291" />}
        colorScheme="light"
        onPress={() => excluirTarefa(id)} 
        style={{ borderRadius: 50, backgroundColor: 'gray', marginLeft: 4 }} 
      />
    </Box>
  );
};


const ListaTarefas: React.FC = () => {
  const { tarefas } = useEstadoGlobal(); 

  return (
    <FlatList
      data={tarefas} 
      renderItem={({ item }) => <TarefaItem id={item.id} tarefa={item.tarefa} />} 
      keyExtractor={(item) => item.id.toString()} 
      contentContainerStyle={{ flexGrow: 1 }} 
    />
  );
};

export default ListaTarefas;
