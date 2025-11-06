import React from "react";
import { TextInput, View, Text } from "react-native";

interface CustomInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  error,
}) => {
  return (
    <View className="mb-4">
      <TextInput
        className={`h-12 px-4 border rounded-lg ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text className="text-red-500 text-sm">{error}</Text>}
    </View>
  );
};

export default CustomInput;