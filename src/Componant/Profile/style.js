import styled from "styled-components";

export const Profileskills = styled.div`
  padding: 50px 0;
  overflow: hidden;
`;

export const Profilesection = styled.div`
  width: 50%;
  float: left;
`;

export const Listprofile = styled.ul`{
    list-style: none
`;

export const Itemprofile = styled.li`
  margin-bottom: 8px;
`;

export const Itemspan = styled.span`
  display: inline-block;
  width: 100px;
  font-weight: bold;
`;

export const Itemspanweb = styled.span`
  font-weight: normal;
  color: #eb5424;
`;

export const Skills = styled.div`
  width: 50%;
  float: left;
`;

export const Skillsdesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const Skillsbar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const Bartitle = styled.h2`
  float: left;
`;

export const Barperc = styled.div`
  float: right;
  margin-right: 100px;
`;

export const Barparent = styled.div`
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px;
`;

export const Parentspan = styled.span`
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${(props) => {
    return props.sp2 ? "90%" : props.sp3 ? "80%" : "100%";
  }};
`;

export const Skillstitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;

export const Skillstitlespan = styled.span`
  font-weight: normal;
`;
