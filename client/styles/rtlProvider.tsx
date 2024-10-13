"use client";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import React, { ReactNode } from "react";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

interface RTLProps {
  children: ReactNode;
}

const RTLProvider: React.FC<RTLProps> = ({ children }) => {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export default RTLProvider;
