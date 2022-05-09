import '@seed-design/stylesheet/global.css'

import * as React from 'react';
import type { PageProps } from 'gatsby';
import { vars } from '@seed-design/design-token';
import { globalCss } from 'gatsby-theme-stitches/src/config';
import { useLocation } from '@reach/router';
import type { OverrideProps } from '@cometjs/core';

import DefaultLayout from './DefaultLayout';
import JobPostLayout from './JobPostLayout';

type LayoutSwitchProps = OverrideProps<
  PageProps<any>,
  {
    children: React.ReactNode,
  }
>;

const globalStyles = globalCss({
  '*': {
    margin: 0,
  },
  ':root': {
    colorSchema: 'light dark',
  },
  'body': {
    background: vars.$semantic.color.paperDefault,
    color: vars.$scale.color.gray900,
    fontFamily: '$system',
    textRendering: 'optimizeLegibility',
    wordBreak: 'break-word',
    WebkitFontSmoothing: 'antialiased'
  },
  'body:lang(ko)': {
    wordBreak: 'keep-all',
  },
  'a': {
    color: vars.$scale.color.carrot500,
  },
  '@media (prefers-reduced-motion: no-preference)': {
    ':focus': {
      transition: 'outline-offset .25s ease',
      outlineOffset: '3px',
    },
  },
});

const LayoutSwitch: React.FC<LayoutSwitchProps> = ({
  children,
  ...props
}) => {
  globalStyles();

  const { pathname: path } = useLocation();

  if (path === '/') {
    return (
      <DefaultLayout {...props}>
        {children}
      </DefaultLayout>
    );
  }

  if (/\/jobs\/faq\/?$/.test(path)) {
    return (
      <DefaultLayout {...props}>
        {children}
      </DefaultLayout>
    );
  }

  if (/\/jobs\/\d+\/?/.test(path)) {
    return (
      <DefaultLayout {...props}>
        <JobPostLayout {...props}>
          {children}
        </JobPostLayout>
      </DefaultLayout>
    );
  }

  if (/\/jobs\/.+\/?/.test(path)) {
    return (
      <DefaultLayout {...props}>
        {children}
      </DefaultLayout>
    );
  }

  if (/\/faq\/.+\/?/.test(path)) {
    return (
      <DefaultLayout {...props}>
        {children}
      </DefaultLayout>
    );
  }
  
  if (/\/(jobs|preview|culture|faq)\/?/.test(path)) {
    return (
      <DefaultLayout {...props}>
        {children}
      </DefaultLayout>
    );
  }

  return <>{children}</>;
}

export default LayoutSwitch;
