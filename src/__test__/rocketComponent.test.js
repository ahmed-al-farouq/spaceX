import React from 'react';
import { Provider } from 'react-redux';
import { render as rltRender } from '@testing-library/react';
import Rocket from '../components/rocketsPage/Rocket';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/reduxConfig';

const render = (component) => rltRender(
  <Provider store={store}>
    {component}
  </Provider>,
);
describe('test rocket component', () => {
  let component;
  beforeEach(() => {
    component = render(<Rocket
      name="rocket1"
      description="this is rocket1"
      image="./img/rocket1"
      reserved={false}
      id={2}
    />);
  });
  it('test image src', () => {
    const image = component.getByTestId('img');
    expect(image.src).toBe('http://localhost/img/rocket1');
  });

  it('test rocket name', () => {
    const name = component.getByTestId('name');
    expect(name.textContent).toBe('rocket1');
  });

  it('test rocket description', () => {
    const description = component.getByTestId('description');
    expect(description.textContent).toBe('this is rocket1');
  });
});
