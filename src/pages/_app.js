import React from "react";
import "styles/global.scss";
import "styles/components/index.scss";
import { AuthProvider } from "util/auth";
import { QueryClientProvider } from "util/db";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
