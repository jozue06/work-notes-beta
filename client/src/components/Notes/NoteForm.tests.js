import React from 'react';
import {shallow, mount} from 'enzyme';
import NoteForm from './NoteForm';

it('renders without crashing', () => {
  shallow(<NoteForm buttonText="foo" onComplete={()=>{}} />);
});

it('supplies form data on complete', () => {
  const onComplete = jest.fn();
  const wrapper = mount(<NoteForm buttonText="foo" onComplete={onComplete} />);
  wrapper.find('input').simulate('change', { target: { value: 'Hello', name: 'name' } })
  expect(wrapper.find('input').instance().value).toBe('Hello');
  wrapper.find('form').simulate('submit');
  expect(wrapper.find('button').text()).toBe('foo');
  expect(onComplete).toBeCalledWith({"name": "Hello"});
});
