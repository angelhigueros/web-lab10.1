/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

function AppScreen() {
  const [isActive, setIsActive] = useState(false);
  const [screen, setScreen] = useState(0);
  const [, setResult] = useState(0);
  const [currentOperation, setCurrentOperation] = useState('-');

  // Acciones
  const handleAddNumber = (number) => {
    if (String(screen).length < 9) {
      if (!isActive) {
        if (number === '.' && !String(screen).includes('.')) {
          setScreen((prev) => `${prev}${number}`);
        } else {
          setScreen((prev) => parseFloat(`${prev}${number}`));
        }
      } else {
        setScreen(number);
        setIsActive(false);
      }
    }
  };

  const handleRemoveItem = () => {
    setScreen(0);
    setResult(0);
    setIsActive(false);
    setCurrentOperation('-');
  };

  // Operaciones
  const sum = () => {
    setCurrentOperation('sum');
    setResult((prev) => {
      const res = parseFloat(prev + screen);
      if (res < 999999999) {
        setScreen(res);
        return parseFloat(prev + screen);
      }
      setScreen('Error');
      return 0;
    });
    setIsActive(true);
  };

  const rest = () => {
    setCurrentOperation('rest');
    setResult((prev) => {
      let res = 0;
      if (parseFloat(prev) === 0) {
        res = parseFloat(screen - prev);
      } else {
        res = parseFloat(screen - prev) * -1;
      }
      if (res < 999999999) {
        setScreen(res);
        return parseFloat(res);
      }
      setScreen('Error');
      return 0;
    });
    setIsActive(true);
  };

  const multi = () => {
    setCurrentOperation('multi');
    setResult((prev) => {
      let res = 0;
      if (parseFloat(prev) === 0) {
        res = parseFloat(screen);
      } else {
        res = parseFloat(screen * prev);
      }
      if (res < 999999999) {
        setScreen(res);
        return parseFloat(res);
      }
      setScreen('Error');
      return 0;
    });
    setIsActive(true);
  };

  const div = () => {
    setCurrentOperation('div');
    setResult((prev) => {
      let res = 0;
      if (parseFloat(prev) === 0) {
        res = parseFloat(screen);
      } else {
        const temp = parseFloat(screen / prev);
        res = parseFloat(String(temp).substring(0, 9));
      }
      if (res < 999999999) {
        setScreen(res);
        return parseFloat(res);
      }
      setScreen('Error');
      return 0;
    });
    setIsActive(true);
  };

  const mod = () => {
    setCurrentOperation('mod');
    setResult((prev) => {
      let res = 0;
      if (parseFloat(prev) === 0) {
        res = parseFloat(screen);
      } else {
        const temp = parseFloat(screen % prev);
        res = parseFloat(String(temp).substring(0, 9));
      }
      if (res < 999999999) {
        setScreen(res);
        return parseFloat(res);
      }
      setScreen('Error');
      return 0;
    });
    setIsActive(true);
  };

  const invert = () => {
    setScreen((prev) => parseFloat(prev * -1));
  };

  const equal = () => {
    if (currentOperation === 'sum') {
      sum();
    } else if (currentOperation === 'rest') {
      rest();
    } else if (currentOperation === 'multi') {
      multi();
    } else if (currentOperation === 'div') {
      div();
    } else if (currentOperation === 'mod') {
      mod();
    }
    setCurrentOperation('-');
  };

  return (
    <div className="container">
      <div className="calculator-container">
        <div className="screen">
          <span>{screen}</span>
        </div>
        <div className="row">
          <div id="c" role="button" onClick={handleRemoveItem} className="item">
            C
          </div>
          <div id="invert" role="button" onClick={invert} className="item">+/-</div>
          <div id="mod" role="button" onClick={mod} className="item">%</div>
          <div id="div" role="button" onClick={div} className="item">/</div>
        </div>
        <div className="row">
          <div
            id="siete"
            role="button"
            onClick={() => handleAddNumber(7)}
            className="item"
          >
            7
          </div>
          <div
            id="ocho"
            role="button"
            onClick={() => handleAddNumber(8)}
            className="item"
          >
            8
          </div>
          <div
            id="nueve"
            role="button"
            onClick={() => handleAddNumber(9)}
            className="item"
          >
            9
          </div>
          <div id="multi" role="button" onClick={multi} className="item">X</div>
        </div>
        <div className="row">
          <div
            id="cuatro"
            role="button"
            onClick={() => handleAddNumber(4)}
            className="item"
          >
            4
          </div>
          <div
            id="cinco"
            role="button"
            onClick={() => handleAddNumber(5)}
            className="item"
          >
            5
          </div>
          <div
            id="seis"
            role="button"
            onClick={() => handleAddNumber(6)}
            className="item"
          >
            6
          </div>
          <div id="rest" role="button" onClick={rest} className="item">-</div>
        </div>
        <div className="row">
          <div
            id="uno"
            role="button"
            onClick={() => handleAddNumber(1)}
            className="item"
          >
            1
          </div>
          <div
            id="dos"
            role="button"
            onClick={() => handleAddNumber(2)}
            className="item"
          >
            2
          </div>
          <div
            id="tres"
            role="button"
            onClick={() => handleAddNumber(3)}
            className="item"
          >
            3
          </div>
          <div id="sum" role="button" onClick={sum} className="item">
            +
          </div>
        </div>
        <div className="row">
          <div
            id="cero"
            role="button"
            onClick={() => handleAddNumber(0)}
            className="item special"
          >
            0
          </div>
          <div id="dot" role="button" onClick={() => handleAddNumber('.')} className="item">.</div>
          <div id="equal" role="button" onClick={equal} className="item">=</div>
        </div>
      </div>
    </div>
  );
}

export default AppScreen;
