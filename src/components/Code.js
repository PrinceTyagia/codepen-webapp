import { useContext } from 'react';
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import  Editor  from "./Editor";
import {DataContext } from '../context/DataProvider'

const Container = styled(Box)`
  background-color: #060606;
  height: 62vh;
  display: flex;
`;


const Code = () => {
 const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);
  return (
    <Container>
      <Editor heading="HTML" icon="/" color="#FF3C41" language="xml"   value={html}
                onChange={setHtml}/>
      <Editor heading="CSS" icon="*" color="#0EBEFF" language="css"  value={css}
                onChange={setCss}/>
      <Editor heading="Js" icon="( )" color="#FCD000" language="javascript"   value={js}
                onChange={setJs}/>
    </Container>
  );
};

export default Code;
