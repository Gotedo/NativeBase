import { VStack, Button, FormControl, TextArea } from 'native-base';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  thought: string;
}

export const Example = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => {
    console.log('submiting with ', data);
  };
  return (
    <VStack width="80%" space={4}>
      <FormControl isRequired isInvalid={'thought' in errors}>
        <FormControl.Label>What do you think?</FormControl.Label>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextArea
              placeholder="TextArea"
              onChangeText={(val) => onChange(val)}
              defaultValue={value}
            />
          )}
          name="thought"
          rules={{ required: 'Field is required', minLength: 3 }}
          defaultValue="I love Nativebase."
        />
        <FormControl.ErrorMessage>
          {errors.thought?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={() => handleSubmit(onSubmit)()} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  );
};
