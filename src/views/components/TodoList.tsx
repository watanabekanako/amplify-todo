import React from 'react';
import {
  Center,
  Flex,
  Heading,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import TodoItem from './TodoItem';

const TodoList: React.VFC = () => {
  const todoList = [
    { id: 'aaa', content: 'aaa', isDone: true },
    { id: 'bbb', content: 'bbb', isDone: false },
    { id: 'ccc', content: 'ccc', isDone: true },
    { id: 'ddd', content: 'ddd', isDone: false },
    { id: 'eee', content: 'eee', isDone: true },
    { id: 'fff', content: 'fff', isDone: false },
    { id: 'ggg', content: 'ggg', isDone: true },
    { id: 'hhh', content: 'hhh', isDone: false },
    { id: 'iii', content: 'iii', isDone: true },
    { id: 'jjj', content: 'jjj', isDone: false },
  ];
  return (
    <Flex flexDir='column' align='center'>
      <Center mb={8}>
        <Heading>Todo List</Heading>
      </Center>
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        align='stretch'
        w={{ base: '90vw', sm: '80vw', md: '70vw', lg: '60vw' }}
        border='2px'
        borderColor='gray.300'
        borderRadius='md'
        p={4}
        maxH='65vh'
        overflow='scroll'
      >
        {todoList.length === 0 ? (
          <Text align='center' fontWeight='bold' fontSize='lg'>
            No Todo
          </Text>
        ) : (
          todoList.map((item) => {
            return (
              <TodoItem
                id={item.id}
                content={item.content}
                isDone={item.isDone}
              />
            );
          })
        )}
      </VStack>
    </Flex>
  );
};

export default TodoList;
