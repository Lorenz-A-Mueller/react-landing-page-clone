/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import arm from './arm.svg';
import avocado from './avocado.png';
import butterfly from './butterfly.svg';
import diamond from './diamond.svg';
import pencil from './pencil.svg';
import ps from './ps.svg';
import {
  armStyles,
  avocadoStyles,
  bulletStyles,
  butterflyStyles,
  buttonStyles,
  diamondPsStyles,
  h1Styles,
  heroContainerStyles,
  inputButtonContainerStyles,
  inputStyles,
  mainPictureStyles,
  mainTextStyles,
  pencilStyles,
  singleTasksStyles,
  tasksStyles,
  underlineStyles,
  xdStyles,
} from './styles.js';
import underline from './underline.svg';
import xd from './xd.svg';

export default function Main() {
  return (
    <>
      <div css={heroContainerStyles}>
        <div css={diamondPsStyles}>
          <img src={diamond} alt="a diamond" />
          <img src={ps} alt="a pic that says 'ps'" />
        </div>
        <div css={mainPictureStyles}>
          <img src={butterfly} css={butterflyStyles} alt="a butterfly" />
          <img src={xd} css={xdStyles} alt="a pic that says 'xd'" />
          <img src={underline} css={underlineStyles} alt="an underline" />
          <img src={pencil} css={pencilStyles} alt="a pencil" />
          <img src={arm} css={armStyles} alt="the avocado's arm" />
          <img src={avocado} css={avocadoStyles} alt="an avocado" />
        </div>
      </div>
      <div css={mainTextStyles}>
        <h1 css={h1Styles}>
          Save Time <br />
          Working with
          <br /> design files
        </h1>
        <div css={tasksStyles}>
          <div css={singleTasksStyles}>
            <div css={bulletStyles}>✓</div> <p>Hand-off </p>
          </div>
          <div css={singleTasksStyles}>
            <div css={bulletStyles}>✓</div>
            <p>Inspect</p>
          </div>
          <div css={singleTasksStyles}>
            <div css={bulletStyles}>✓</div>
            <p>Get assets</p>
          </div>
          <div css={singleTasksStyles}>
            <div css={bulletStyles}>✓</div>
            <p>Review</p>
          </div>
        </div>
        <div css={inputButtonContainerStyles}>
          <input placeholder="name@company.com" css={inputStyles} />
          <button css={buttonStyles}>Start free trial</button>
        </div>
      </div>
    </>
  );
}
