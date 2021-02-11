import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
 it("renders correctly", () => {
   shallow(<App />);
 });

 it("includes two paragraphs", () => {
   const wrapper = shallow(<App />);
   expect(wrapper.find("p").length).toEqual(2);
 });

 it("should update state on click", () => {
  const changeSize = jest.fn();
  const wrapper = mount(<App onClick={changeSize} />);
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation(size => [size, changeSize]);

  wrapper.find("#para1").simulate("click");
  expect(changeSize).toBeTruthy();
});

});