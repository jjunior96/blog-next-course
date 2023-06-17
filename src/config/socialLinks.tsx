import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon
} from '@/components/Icons';

import { MainNavType } from '@/models';

export const socialLinkConfig: MainNavType = {
  mainNav: [
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/seunome/',
      icon: <LinkedinIcon size={28} />
    },
    {
      title: 'Youtube',
      href: 'https://www.youtube.com/seunome/',
      icon: <YoutubeIcon size={28} />
    },
    {
      title: 'Github',
      href: 'https://www.github.com/seunome/',
      icon: <GithubIcon size={28} />
    },
    {
      title: 'Twitter',
      href: 'https://www.twitter.com/seunome/',
      icon: <TwitterIcon size={28} />
    }
  ]
};
