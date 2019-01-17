/* eslint-disable no-undef */
import React from 'react';
import {
  mount, render, shallow, configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { createSerializer } from 'enzyme-to-json';
import renderer from 'react-test-renderer';


expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
configure({ adapter: new Adapter() });

global.React = React;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.renderer = renderer;
