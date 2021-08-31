import * as React from "react";
import type { PageProps } from "gatsby";

import { globalStyles } from "~/gatsby-theme-stitches/stitches.config";
import { Banner } from "~/components/organisms/Banner";
import { Main } from "~/components/organisms/Main";

globalStyles();

type IndexPageProps = PageProps;

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <div>
      <Banner />
      <Main />
    </div>
  );
};

export default IndexPage;
