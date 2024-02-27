import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chat 555",
  description = "This is the Chat App called Chat 555",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
