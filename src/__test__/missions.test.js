import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../redux/reduxConfig';

const MissionsMock = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

describe('Mission component', () => {
  it('Should render a table:', () => {
    render(<MissionsMock />);
    expect(screen.getByRole('table')).toBeDefined();
  });
});
