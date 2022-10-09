// Note: This is an *extremely* naive implementation of a
// unified Link component. More work to be done here!
import { Link as RLink, LinkProps } from "@remix-run/react";
import React, { FC } from "react";
export const Link: FC<Omit<LinkProps, "to"> & { href: string }> = ({
  href,
  ...rest
}) => <RLink to={href} {...rest} />;
