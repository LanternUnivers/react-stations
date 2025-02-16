// DO NOT DELETE

import './App.css'
import Header from './Header';
import Description from './Description';
import { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div className="container">
      <Header />
      <Description />
    </div>
  )
}