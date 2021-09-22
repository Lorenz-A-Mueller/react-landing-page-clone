/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import avocode_logo from './avocode_logo.png';
import lock from './lock.svg';
import {
  loginButtonStyles,
  logoStyles,
  navBarLeftStyles,
  navBarMiddleStyles,
  navBarRightStyles,
  navBarStyles,
  signupButtonStyles,
} from './styles';

const dropDownStyles = (height) => css`
  height: ${height + 'px'};
  transition: all 0.5s ease-out;
  overflow: hidden;
`;

const triangleStyles = (rotate) => css`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid black;
  transform: rotate(${rotate + 'deg'});
  transition: transform 0.5s ease-out;
`;

export default function Header(props) {
  const [height, setHeight] = useState(0);
  const [rotate, setRotate] = useState(0);

  props.handleBackgroundColor(rotate);

  function handleOnMouseOver() {
    setHeight(200);
    setRotate(180);
  }

  function handleOnMouseOut() {
    setHeight(0);
    setRotate(0);
  }

  return (
    <>
      <nav css={navBarStyles}>
        <div css={navBarLeftStyles}>
          <img src={avocode_logo} alt="avocode logo" css={logoStyles} />
          <div>avocode</div>
        </div>
        <div css={navBarMiddleStyles}>
          <div
            onMouseOver={() => handleOnMouseOver()}
            onFocus={() => handleOnMouseOver()}
            style={{ marginBottom: '10px', display: 'flex' }}
          >
            <div>Product</div>
            <div css={triangleStyles(rotate)} />
          </div>
          <div>Solutions</div>
          <div>Learn</div>
          <div>Blog</div>
          <div>Download</div>
          <div>Pricing</div>
        </div>

        <div css={navBarRightStyles}>
          <button css={loginButtonStyles}>
            <img src={lock} alt="a lock" />
            Log in
          </button>
          <button css={signupButtonStyles}>Sign up</button>
        </div>
      </nav>
      <div
        css={dropDownStyles(height)}
        onMouseOut={() => handleOnMouseOut()}
        onBlur={() => {}}
        onMouseOver={() => handleOnMouseOver()}
        onFocus={() => handleOnMouseOver()}
      >
        <h1>More Content goes here.... </h1>
      </div>
    </>
  );
}
