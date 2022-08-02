import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer.js'
Enzyme.configure({adapter: new Adapter()})

describe("When Footer renders",()=>{
    let renderedFooter; 

    beforeEach(()=>{
      renderedFooter = shallow(<Footer />);
    });

    it("It displays div tag with text", ()=>{
        const renderedFooterCopy = renderedFooter.find("h3").text()
        expect(renderedFooterCopy).toEqual("© 2022 Copyright:")
    })

    it("It displays p tag with text", ()=>{
        const renderedFooterText = renderedFooter.find("p").text()
        expect(renderedFooterText).toEqual("Corey & Alvin")
    })

    it("It displays p tag with text", ()=>{
        const renderedFooterAnchor = renderedFooter.find("a").text()
        expect(renderedFooterAnchor).toEqual("Git Hub")
    })

    it("It has a route to git hub", ()=>{
        const renderedFooterGitHub = renderedFooter.find("[href='#']")
        expect(renderedFooterGitHub.length).toEqual(1)
    })
})