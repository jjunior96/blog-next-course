import { act, fireEvent, render, screen } from '@testing-library/react';

import { ToggleButton } from './ToggleButton';

const handleToggleMenu = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe('<ToggleButton />', () => {
  it('should render close icon when isOpenMenu is true', () => {
    const props = {
      isOpenMenu: true,
      handleToggleMenu
    };

    render(<ToggleButton {...props} />);

    const iconClose = screen.getByTestId('close-icon');

    act(() => {
      fireEvent.click(iconClose);
    });

    expect(iconClose).toBeVisible();
    expect(handleToggleMenu).toHaveBeenCalledTimes(1);
  });

  it('should render open icon when isOpenMenu is false', () => {
    const props = {
      isOpenMenu: false,
      handleToggleMenu
    };

    render(<ToggleButton {...props} />);

    const iconOpen = screen.getByTestId('open-icon');

    act(() => {
      fireEvent.click(iconOpen);
    });

    expect(iconOpen).toBeVisible();
    expect(handleToggleMenu).toHaveBeenCalledTimes(1);
  });
});
