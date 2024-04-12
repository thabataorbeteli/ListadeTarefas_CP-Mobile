import React, { useState } from "react";
import { View, Input, IconButton } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useEstadoGlobal } from "../hooks/EstadoGlobal";

const AdicionarTarefa: React.FC = () => {
  const { adicionarTarefa } = useEstadoGlobal();
  const [novaTarefa, setNovaTarefa] = useState("");

  const handleAdicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      adicionarTarefa(novaTarefa);
      setNovaTarefa("");
    }
  };

  return (
    <View style={{ backgroundColor: '#2f60cc', paddingVertical: 20, paddingHorizontal: 20, paddingTop: 50 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1, marginRight: 10 }}>
          {/* Campo de entrada para o usuário digitar o título da nova tarefa! */}
          
          <Input
            placeholder="Nova Tarefa"
            placeholderTextColor="white"
            value={novaTarefa}
            onChangeText={setNovaTarefa}
            fontSize={14}
            color="white"
          />
        </View>
        {/* Botão de adicionar tarefa */}
        <IconButton
          icon={<Ionicons name="add" size={24} color="#ec1e8f" />}
          colorScheme="light"
          onPress={handleAdicionarTarefa}
          style={{ borderRadius: 50, backgroundColor: 'green' }}
        />
      </View>
    </View>
  );
};

export default AdicionarTarefa;
