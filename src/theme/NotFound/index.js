import React from 'react';
import Head from '@docusaurus/Head';
import NotFound from '@theme-original/NotFound';

export default function NotFoundWrapper(props) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <NotFound {...props} />
    </>
  );
}
