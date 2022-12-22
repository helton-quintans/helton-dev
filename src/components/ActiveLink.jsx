import Link from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

export function ActiveLink({
  children,
  shouldMatchHref = true,
  ...rest
}) {
  const { asPath } = useRouter();

  let isActive = false;

  if (!shouldMatchHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    (!shouldMatchHref && asPath.startsWith(String(rest.href))) ||
    asPath.startsWith(String(rest.as))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "yellow.300" : "gray.50",
      })}
    </Link>
  );
}