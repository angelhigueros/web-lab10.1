/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';

import 'jsdom-global/register';

import AppScreen from '../components/appScreen';

describe('Test en <AppScren /> ', () => {
  test('Se debe mostrar el componente correctamente', () => {
    const wrapper = mount(<AppScreen />);
    expect(wrapper).toMatchSnapshot();
  });

  test('El valor incial debe ser 0', () => {
    const wrapper = mount(<AppScreen />);
    const screen = wrapper.find('span').text();
    expect(screen).toBe('0');
  });

  test('La suma se realiza correctamente', () => {
    const wrapper = mount(<AppScreen />);
    wrapper.find('#uno').simulate('click');
    wrapper.find('#sum').simulate('click');
    wrapper.find('#dos').simulate('click');
    wrapper.find('#equal').simulate('click');
    const screen = wrapper.find('span').text();
    expect(screen).toBe('3');
  });

  test('Las operaciones concatenadas se realizan correctamente', () => {
    const wrapper = mount(<AppScreen />);
    wrapper.find('#uno').simulate('click');
    wrapper.find('#sum').simulate('click');
    wrapper.find('#dos').simulate('click');
    wrapper.find('#multi').simulate('click');
    wrapper.find('#cuatro').simulate('click');
    wrapper.find('#equal').simulate('click');
    const screen = wrapper.find('span').text();
    expect(screen).toBe('8');
  });

  test('La calculadora se reinicia correctamente', () => {
    const wrapper = mount(<AppScreen />);
    wrapper.find('#uno').simulate('click');
    wrapper.find('#sum').simulate('click');
    wrapper.find('#dos').simulate('click');
    wrapper.find('#equal').simulate('click');
    wrapper.find('#c').simulate('click');

    const screen = wrapper.find('span').text();
    expect(screen).toBe('0');
  });

  test('Los numeros se vuelven negativos correctamente', () => {
    const wrapper = mount(<AppScreen />);
    wrapper.find('#uno').simulate('click');
    wrapper.find('#sum').simulate('click');
    wrapper.find('#dos').simulate('click');
    wrapper.find('#equal').simulate('click');
    wrapper.find('#invert').simulate('click');

    const screen = wrapper.find('span').text();
    expect(screen).toBe('-3');
  });

  test('la calculadora no muestra mas de 9 digitos en pantalla', () => {
    const wrapper = mount(<AppScreen />);
    wrapper.find('#dos').simulate('click');
    wrapper.find('#dos').simulate('click');
    wrapper.find('#div').simulate('click');
    wrapper.find('#siete').simulate('click');
    wrapper.find('#equal').simulate('click');

    const screen = wrapper.find('span').text();
    expect(screen).toBe('0.3181818');
  });
});

test('El punto decimal funciona correctamente', () => {
  let wrapper = mount(<AppScreen />);
  // Caso uno - Cuenta como uno de los nueve digitos a mostrar en pantalla
  wrapper.find('#uno').simulate('click');
  wrapper.find('#dos').simulate('click');
  wrapper.find('#tres').simulate('click');
  wrapper.find('#cuatro').simulate('click');
  wrapper.find('#cinco').simulate('click');
  wrapper.find('#seis').simulate('click');
  wrapper.find('#siete').simulate('click');
  wrapper.find('#ocho').simulate('click');
  wrapper.find('#dot').simulate('click');
  wrapper.find('#nueve').simulate('click');

  const screen = wrapper.find('span').text();
  expect(screen).toBe('12345678.');

  // Caso dos - Solo se permite un punto en pantalla
  wrapper = mount(<AppScreen />);
  wrapper.find('#uno').simulate('click');
  wrapper.find('#dot').simulate('click');
  wrapper.find('#dos').simulate('click');
  wrapper.find('#dot').simulate('click');
  wrapper.find('#tres').simulate('click');

  const screen2 = wrapper.find('span').text();
  expect(screen2).toBe('1.23');
});
