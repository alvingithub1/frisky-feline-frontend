import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from './CatNew.js'
Enzyme.configure({adapter: new Adapter()})


describe("When App Renders", () => {

  let renderedApp; 

  beforeEach(()=>{
    renderedApp = shallow(<CatNew />);
  });

  it("has form group", () => {
    const renderedCatNewFormGroup = renderedApp.find("FormGroup")
    const renderedCatNewLabel = renderedApp.find("Label")
    const renderedCatNewInput = renderedApp.find("Input")

    expect(renderedCatNewFormGroup.length).toEqual(4)
    expect(renderedCatNewLabel.length).toEqual(4)
    expect(renderedCatNewInput.length).toEqual(4)
  })
})
