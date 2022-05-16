import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
    <Foot><p>Created by Divyansh Sharma</p>
    <a href='https://github.com/Divyansh2134/Tesla-Clone.git'><u>github </u> &nbsp; </a>
    &nbsp;
    <a href='https://www.linkedin.com/in/divyansh-sharma-158b04193/'> <u> linkedin</u></a>
    </Foot>
  )
}

export default Footer;

const Foot =styled.div`
font-family: cursive;

text-align:center;
u{
    color:blue;
}
a:hover{
    text-decoration: none;
}
`