"use client"
import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
// if you are using Next.js 14, use below import instead. More info: https://github.com/ant-design/ant-design/issues/45567
// import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs/lib';
// import type Entity from '@ant-design/cssinjs/es/Cache';
import { useServerInsertedHTML } from 'next/navigation';

const StyledComponentsRegistry = ({ children }) => {
  const cache = React.useMemo(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
  ));
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default StyledComponentsRegistry;
