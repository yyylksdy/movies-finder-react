import React from 'react';
import CardTemplate from "../Components/CardTemplate/CardTemplate";
import { shallow } from '../enzyme';

it("renders without crashing", () => {
    const props = {
      name: "abc",
      date: new Date().toString(),
      vote: 40,
      image: "www.xxx.com",
      id: 1
    }
    const cardTemp = shallow(<CardTemplate name={props.name} date={props.date} vote={props.vote} image={props.image} id={props.id}/>);
    expect(cardTemp.exists()).toBe(true);
  });