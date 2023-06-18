import { useMDXComponent } from 'next-contentlayer/hooks';

import { MDXComponents } from 'mdx/types';

import '@/styles/mdx.css';
import { Pre, Note } from './components';

const components: MDXComponents = {
  h1: ({ className = '', children, ...props }) => (
    <h1
      className={`mt-12 scroll-m-20 text-4xl font-bold ${className}`}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ className = '', children, ...props }) => (
    <h2
      className={`mb-6 mt-14 scroll-m-20 pb-1 text-3xl font-bold ${className}`}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ className = '', children, ...props }) => (
    <h3
      className={`mb-4 mt-8 scroll-m-20 text-2xl font-bold ${className}`}
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ className = '', children, ...props }) => (
    <h4
      className={`mb-4 mt-8 scroll-m-20 text-xl font-bold ${className}`}
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ className = '', children, ...props }) => (
    <h5
      className={`mb-4 mt-8 scroll-m-20 text-lg font-bold ${className}`}
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ className = '', children, ...props }) => (
    <h6
      className={`mb-4 mt-8 scroll-m-20 text-base font-bold ${className}`}
      {...props}
    >
      {children}
    </h6>
  ),
  a: ({ className = '', children, ...props }) => (
    <a
      className={`font-medium text-link underline underline-offset-4 ${className}`}
      {...props}
    >
      {children}
    </a>
  ),
  p: ({ className = '', children, ...props }) => (
    <p
      className={`mb-4 text-xl leading-7 text-slate-300 ${className}`}
      {...props}
    >
      {children}
    </p>
  ),
  blockquote: ({ className = '', children, ...props }) => (
    <blockquote
      className={`mb-4 mt-6 border-l-2 border-slate-50 pl-6 font-normal italic text-gray-200 ${className}`}
      {...props}
    >
      {children}
    </blockquote>
  ),
  pre: ({ className = '', children, ...props }) => (
    <Pre {...props} className={className}>
      {children}
    </Pre>
  ),
  code: ({ className = '', children, ...props }) => (
    <code
      className={`text-md relative rounded bg-gray-700 px-[0.4rem] py-[0.1rem] font-mono leading-tight text-gray-50  ${className}`}
      {...props}
    >
      {children}
    </code>
  ),
  Note
};

type MdxProps = {
  code: string;
};

export const Mdx = ({ code = '' }: MdxProps) => {
  const Component = useMDXComponent(code);

  return (
    <>
      <Component components={components} />
    </>
  );
};
