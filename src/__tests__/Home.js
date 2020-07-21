import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Home from '../views/Home';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// get wrapper function
const setup = (props={}, state=null) => {
    const wrapper = shallow(<Home {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
}

// function to find data test
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

describe('<Home />', () => {
	it('renders without crashing', () => {
		shallow(<Home />);
	});
});

test('Test calculate function', () => {
    const wrapper = setup(null);
  
    // Set origin
    const origin = findByTestAttr(wrapper, 'origin-input');
    origin.simulate('change', { target: { value: '011' } });

    // Set destiny
    const destiny = findByTestAttr(wrapper, 'destiny-input');
    destiny.simulate('change', { target: { value: '016' } });

    // Set minutes
    const minutes = findByTestAttr(wrapper, 'minutes-input');
    minutes.simulate('change', { target: { value: 20 } });

    // find button and click
    const button = findByTestAttr(wrapper, 'simulate-button');
    button.simulate('click');
});