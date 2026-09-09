import React from 'react';
import Head from '@docusaurus/Head';
import DocCategoryGeneratedIndexPage from '@theme-original/DocCategoryGeneratedIndexPage';

export default function DocCategoryGeneratedIndexPageWrapper(props) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <DocCategoryGeneratedIndexPage {...props} />
    </>
  );
}
