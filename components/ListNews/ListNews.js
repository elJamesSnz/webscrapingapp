import React from "react";
import { map } from "lodash";
import { Grid, Image } from "semantic-ui-react";
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
      <a>
        <h2>{n.title}</h2>
        <div className="list-games__game-poster">
          <div className="list-games__game-poster-info">
            <span className="price">${n.subtitle}</span>
          </div>
        </div>
      </a>
    </Grid.Column>
  );
}
