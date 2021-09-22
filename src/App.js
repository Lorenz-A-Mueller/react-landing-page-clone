/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';

const backgroundStyles = (dark) => css`
  position: absolute;
  top: calc(15vh + 200px);
  width: 100vw;
  height: 100vh;
  background-color: ${dark ? 'rgba(200,200,200,0.5)' : 'transparent'};
  z-index: 0;
`;

function App() {
  const [dark, setDark] = useState(false);

  function handleBackgroundColor(rotate) {
    if (rotate) {
      setDark(true);
    } else {
      setDark(false);
    }
  }
  return (
    <>
      <div css={backgroundStyles(dark)} />
      <Header
        handleBackgroundColor={handleBackgroundColor}
        styles={{ zIndex: 3 }}
      />
      <Main />
    </>
  );
}

export default App;

// backgroundColor: dark ? 'grey' : 'white' }}>
