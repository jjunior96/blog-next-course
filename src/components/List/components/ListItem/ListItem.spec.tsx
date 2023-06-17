import { render, screen } from '@testing-library/react';

import { ListItem } from './ListItem';

describe('<ListItem />', () => {
  it('should render a listItem', () => {
    const children = 'children';

    const { container } = render(<ListItem>{children}</ListItem>);

    const childrenElement = screen.getByText(children);

    expect(childrenElement).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
