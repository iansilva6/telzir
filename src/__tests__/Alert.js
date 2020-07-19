import React from 'react';
import Alert from '../components/Alert';
import renderer from 'react-test-renderer';

// Images and Icons
import DangerImage from '../assets/images/danger.png';

describe("Alert Component", ()=>{
    it("renders as expected", ()=>{
        const tree = renderer
            .create(<Alert
                        show={true}
                        title={"Example Title"}
                        subtitle={"Example Subtitle"}
                        image={DangerImage}
                    />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    })
});