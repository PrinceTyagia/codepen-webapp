import React, { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Controlled as ControlledEditor } from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';

import '../App.css';




const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;
const Closestyle =  styled(Box)`
    display: flex;
    align-items: center;
`

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;
const Heading = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;
`;

const Editor = ({ heading, language, value, onChange, icon, color }) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    }
  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              borderRadius: 5,
              marginRight: 5,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              color: "#000",
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <Closestyle>
          <SettingsIcon fontSize="small" style={{ alignSelf: "center" }} />
          <KeyboardArrowDownIcon
            fontSize="small"
            style={{ alignSelf: "center" }}
            onClick={() => setOpen((prevState) => !prevState)}
          />
        </Closestyle>
      </Header>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="controlled-editor"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      ></ControlledEditor>
    </Container>
  );
};

export default Editor;
