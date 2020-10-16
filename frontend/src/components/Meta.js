import React from "react";

import Helmet from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To ProShop",
  description: "We sell electronic products for cheap price",
  keywords: "electronics, buy electronics, cheap electronics",
};

export default Meta;
