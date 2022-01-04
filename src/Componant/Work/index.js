import axios from "axios";
import React, { Component } from "react";
import {
  Worksection,
  Title,
  Title2,
  Span,
  Line,
  Desc,
  Part,
  Icon,
} from "./style";

class Work extends Component {
  state = {
    works: [],
  };
  componentDidMount() {
    axios
      .get("data.json")
      .then((res) => this.setState({ works: res.data.works }));
  }
  render() {
    const { works } = this.state;
    const workslist = works.map((workitem) => {
      return (
        <Part first={workitem.id} key={workitem.id}>
          <Icon className={workitem.icon_name}></Icon>
          <Title2>{workitem.title}</Title2>
          <Line />
          <Desc>{workitem.body}</Desc>
        </Part>
      );
    });

    return (
      <Worksection>
        <div className="container">
          <Title>
            <Span>My</Span> Work
          </Title>
          {workslist}
        </div>
      </Worksection>
    );
  }
}

export default Work;
