// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp;
