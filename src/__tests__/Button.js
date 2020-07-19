import React from 'react';
import DefaultButton from '../components/Button/';
import renderer from 'react-test-renderer';

describe("Button Component", ()=>{
    it("renders as expected", ()=>{
        const tree = renderer
            .create(<DefaultButton
                        text={"Texto"}
                    />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    })
});