import { render, screen } from '@testing-library/react';

import { GithubIcon, YoutubeIcon } from '../Icons';
import { SocialMedia } from './SocialMedia';

const items = [
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/seunome',
    icon: <YoutubeIcon data-testid="youtube-icon" />
  },
  {
    title: 'Github',
    href: 'https://www.github.com/seunome',
    icon: <GithubIcon data-testid="github-icon" />
  }
];

describe('<SocialMedia />', () => {
  it('should render', () => {
    render(<SocialMedia items={items} />);

    const firstLink = screen.getByRole('link', { name: items[0].title });
    const secondLink = screen.getByRole('link', { name: items[1].title });

    const firstIcon = screen.getByTestId('youtube-icon');
    const secondIcon = screen.getByTestId('github-icon');

    expect(firstLink).toHaveAttribute('href', items[0].href);
    expect(secondLink).toHaveAttribute('href', items[1].href);

    expect(firstIcon).toBeVisible();
    expect(secondIcon).toBeVisible();
  });
});
