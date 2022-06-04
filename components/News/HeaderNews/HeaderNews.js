import React from "react";
import { Container, Grid, Button, Image, Input, Icon } from "semantic-ui-react";
import Link from "next/link";
import { days, months } from "../../../utils/constants";

export default function HeaderNews(props) {
  const { news } = props;
  return (
    <>
      <div className="news__left__HeaderInfo">
        <div className="news__left__HeaderInfo-title elemento">
          <TitleNews titulo={news.title} />
        </div>
        <div className="news__left__HeaderInfo-author elemento">
          <Author author={news.author} />
        </div>
        <div className="news__left__HeaderInfo-rating elemento">
          <Ratings />
        </div>
        <div className="news__left__HeaderInfo-social elemento">
          <Social />
        </div>
      </div>
    </>
  );
}

function TitleNews(props) {
  const { titulo } = props;
  //console.log(title);
  return (
    <>
      <h2>{titulo}</h2>
    </>
  );
}

function Author(props) {
  const { author } = props;

  return (
    <>
      <p>
        <span>By: </span>
        {author}
      </p>
    </>
  );
}

function Ratings() {
  return (
    <>
      <Icon name="star" />
      <Icon name="star" />
      <Icon name="star" />
      <Icon name="star" />
      <Icon name="star half" />
    </>
  );
}

function Social() {
  return (
    <>
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
    </>
  );
}
