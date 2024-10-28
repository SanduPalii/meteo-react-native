import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import React from 'react';

type SearchBarProps = { onSubmit: (value: string) => void };

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  return (
    <View>
      <TextInput
        onSubmitEditing={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) =>
          onSubmit(e.nativeEvent.text)
        }
        placeholder="Type a city... Ex: Hameenlinna"
        className="h-12 rounded-2xl bg-white pl-5 font-alata drop-shadow-xl"
      />
    </View>
  );
};

export default SearchBar;
