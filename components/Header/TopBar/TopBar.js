import React from "react";
import { Container, Grid, Button, Image, Input, Icon } from "semantic-ui-react";
import Link from "next/link";
import { days, months } from "../../../utils/constants";

export default function TopBar() {
  return (
    <div className="TopBar">
      <Container>
        <Grid className="TopBar" columns={3}>
          <Grid.Column className="TopBar__left">
            <DateSocial />
          </Grid.Column>
          <Grid.Column className="TopBar__center">
            <Logo />
          </Grid.Column>
          <Grid.Column className="TopBar__right">
            <LogAuth />
          </Grid.Column>
        </Grid>
      </Container>
    </div>

    /*
    <div className="TopBar-left">
          <DateSocial />
        </div>
        <div className="TopBar-center">
          <Logo />
        </div>
        <div className="TopBar-right">
          <LogAuth />
        </div> */
  );
}

function DateSocial() {
  const d = new Date();
  return (
    <>
      <div className="TopBar__left__menu">
        <div className="TopBar__left__menu__dates">
          <p>{days[d.getDay() - 1]}</p>
          <p>{d.getDate()}</p>
          <p>{months[d.getMonth()]}</p>
          <p>{d.getFullYear()}</p>
        </div>
        <div className="TopBar__left__menu__social">
          <Link href="/">
            <a>
              <Icon name="facebook" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Icon name="twitter" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Icon name="instagram" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Icon name="tumblr" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Icon name="google" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

function Logo() {
  return (
    <>
      <div className="TopBar-center__logo">
        <Link href="/">
          <a>
            <Image src="/logo.png" alt="News" />
          </a>
        </Link>
      </div>
    </>
  );
}

function LogAuth() {
  return (
    <>
      <div className="TopBar__right__menu">
        <a href="/" className="__log">
          Login
        </a>
        <p>/</p>
        <a href="/" className="__log">
          Register
        </a>
      </div>
    </>
  );
}
