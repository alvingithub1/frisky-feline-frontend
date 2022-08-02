import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home.js'
Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", ()=> {

    let renderedHome; 

    beforeEach(()=>{
      renderedHome = shallow(<Home />);
    });

    it("displays an h3 with text", ()=>{
        const homeWelcomeTagText = renderedHome.find("h3").text()

        expect(homeWelcomeTagText).toEqual("Home")
    })
    
})