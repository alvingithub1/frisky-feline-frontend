import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound.js'
Enzyme.configure({adapter: new Adapter()})

describe("When NotFound renders", ()=>{

    let renderedNotFound; 

    beforeEach(()=>{
      renderedNotFound = shallow(<NotFound />);
    });

    it("displays h3 tag with text", ()=>{
        const renderedNotFoundText = renderedNotFound.find("h3").text()
        expect(renderedNotFoundText).toEqual("Sorry, this page was not found")
    })

    it("renders image", ()=>{
        const renderedNotFoundImage = renderedNotFound.find("img")
        expect(renderedNotFoundImage.length).toEqual(1)
    })
})