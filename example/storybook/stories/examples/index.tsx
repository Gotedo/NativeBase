import React from 'react';
import Wrapper from '../components/Wrapper';
import { Example as TodoApp } from './TodoApp';
import { Example as Signin } from './Signin';
import { Example as Signup } from './Signup';

export default {
  title: 'Examples',
  decorators: [(getStory: any) => <Wrapper>{getStory()}</Wrapper>],
};
export const Story1 = { name: 'Todo App', render: () => <TodoApp /> };
export const Story2 = { name: 'Signin Screen', render: () => <Signin /> };
export const Story3 = { name: 'Signup Screen', render: () => <Signup /> };
