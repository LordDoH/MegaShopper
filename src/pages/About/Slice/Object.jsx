import React from 'react';
// Import css
import Styles from './Object.module.css';

function Object() {
  return (
    <div className={Styles.text}>
      <span>
        <span className={Styles.def}> const </span>
        coder =<span className={Styles.spc}>{`{`}</span>
      </span>
      <span className={Styles.sec}>
        name<span className={Styles.spc}>: </span>
        <span className={Styles.str}>&apos;Daniel&apos;,</span>
      </span>
      <span className={Styles.sec}>
        lastname<span className={Styles.spc}>: </span>
        <span className={Styles.str}>&apos;Ochoa H&apos;,</span>
      </span>
      <span className={Styles.sec}>
        age<span className={Styles.spc}>: </span>
        <span className={Styles.num}>27,</span>
      </span>
      <span className={Styles.sec}>
        email<span className={Styles.spc}>: </span>
        <span className={Styles.str}>&apos;dochoahenao@gmail.com&apos;,</span>
      </span>
      <span className={Styles.sec}>
        github<span className={Styles.spc}>: </span>
        <span className={Styles.str}>&apos;LordDoH&apos;,</span>
      </span>
      <span className={Styles.sec}>
        linkedIn<span className={Styles.spc}>: </span>
        <span className={Styles.str}>&apos;danieloch&apos;,</span>
      </span>
      <span>
        <span className={Styles.spc}>{`};`}</span>
      </span>
    </div>
  );
}

export default Object;
