/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import axios from 'axios';

import App from './App';

describe('App component', () => {
  it('Matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render App component correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should update a state in a callback', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ scores: 'new' }, () => {
      expect(wrapper.state()).toEqual({ scores: 'new', teams: [], view: 'main' });
    });
  });

  it('Should call componentDidMount once', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
});

describe('Make successful API call to database', () => {
  it('Should fetch via axios /espn/teamstandings', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    wrapper.instance().componentDidMount(axios.get('/espn/teamstandings'));
    expect(spy).toHaveBeenCalled();
  });
});
