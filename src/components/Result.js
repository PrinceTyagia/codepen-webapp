import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataContext } from "../context/DataProvider";


const Container = styled(Box)`
  height: 45vh;
`;

const Result = () => {
  const [src, setSrc] = useState("");
  const { html,css,js } = useContext(DataContext);
  // console.log(js);

  const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container style={html || css || js ? null : { background: "#444857" }}>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
