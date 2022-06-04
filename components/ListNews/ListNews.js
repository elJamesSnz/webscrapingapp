import React from "react";
import { map } from "lodash";
import { Grid, Image } from "semantic-ui-react";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import {
  breakpointUpSm,
  breakpointUpMd,
  breakpointUpLg,
} from "../../utils/breakpoints";

export default function ListNews(props) {
  const { news } = props;
  const { width } = useWindowSize();

  const getColumnRender = () => {
    console.log(width);

    switch (true) {
      case width > breakpointUpLg:
        console.log(1);
        return 3;
      case width > breakpointUpMd:
        console.log(2);
        return 2;
      case width > breakpointUpSm:
        return 2;
      default:
        return 1;
    }
  };

  return (
    <div className="list-news">
      <Grid>
        <Grid.Row columns={getColumnRender()}>
          {map(news, (n) => (
            <N n={n} />
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}

function N(props) {
  const { n } = props;
  return (
    <Grid.Column key={n.id} className="list-news__n">
      <Link href={`/news/${n.post}`}>
        <a>
          <h2>{n.title}</h2>
          <div className="list-games__game-poster">
            <Image src={n.img} alt={n.title} />
            <div className="list-games__game-poster-info">
              <p>
                <span className="price">Autor: </span>
                {n.author}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </Grid.Column>
  );
}
