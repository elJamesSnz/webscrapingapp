import React from "react";
import { Container } from "semantic-ui-react";
import classNames from "classnames";
import Header from "../../components/Header/Header";
export default function MainLayout(props) {
  const { children, className } = props;

  return (
    <Container
      fluid
      className={classNames("main-layout", {
        [className]: className,
      })}
    >
      <Header />
      <Container className="content">{children}</Container>
    </Container>
  );
}
