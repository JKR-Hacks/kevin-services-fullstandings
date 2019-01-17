/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import axios from 'axios';

import App from './App';
import FullStandings from './components/FullStandings';

jest.mock('./components/FullStandings', () => 'fullstandings');

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

  it('Should update state view when handleClick() is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleClick();
    expect(wrapper.state()).toEqual({ teams: [], view: 'fullstandings' });
  });
});

describe('FullStandings component', () => {
  it('Should render FullStandings component', () => {
    const tree = mount(<FullStandings />).toJSON;
    expect(tree).toMatchSnapshot();
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
