import React, { useState, useEffect } from "react";
import { Image, Grid, Loader } from "semantic-ui-react";
import Link from "next/link";
import { map, size } from "lodash";
import { getNewsApi } from "../../../api/news";

var sizeArr = 0;

export default function OtherNews(props) {
  const { news, query } = props;
  const [otherNews, setOtherNews] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getNewsApi();
      if (size(response) > 0) {
        setOtherNews(response);
        sizeArr = response.length;
      } else setOtherNews([]);
    })();
  }, [news]);

  return (
    <div className="news__right_panel ">
      <div className="news__right_panel__title elemento">
        <h2>Other news</h2>
      </div>
      <div className="news__right_panel__suggestions elemento">
        {!otherNews && <Loader active> Cargando sugerencias</Loader>}
        {otherNews && size(otherNews) === 0 && (
          <div>
            <h3>No hay sugerencias</h3>
          </div>
        )}
        {size(otherNews) > 0 && (
          <ListSuggest news={news} otherNews={otherNews} />
        )}
      </div>
    </div>
  );
}

function ListSuggest(props) {
  let { news, otherNews } = props;

  const news_title = news.title;
  const indexOfObject = otherNews.findIndex((object) => {
    return object.title === news_title;
  });
  if (sizeArr - otherNews.length == 0) otherNews.splice(indexOfObject, 1);

  return (
    <>
      {otherNews.length > 0 ? (
        <div className="news__left__MainInfo-secciones-textos">
          <Grid>
            {map(otherNews, (other) => (
              <Grid.Row key={other._id}>
                <Suggest news={other} />
              </Grid.Row>
            ))}
          </Grid>
        </div>
      ) : (
        <Secciones secciones={`--------`} />
      )}
    </>
  );
}

function Suggest(props) {
  const { news } = props;
  return (
    <div className="news__left__MainInfo-secciones-textos-suggest">
      <Link href={`/news/${news.post}`}>
        <a>
          <div className="news__left__MainInfo-secciones-textos-suggest-img ele">
            <Image src={news.img} alt={news.title} />
          </div>
          <div className="news__left__MainInfo-secciones-textos-suggest-info ele">
            <div className="news__left__MainInfo-secciones-textos-suggest-info__title">
              <h4>{news.title}</h4>
            </div>
            <div className="news__left__MainInfo-secciones-textos-suggest-info__author">
              <p>
                <span>By:</span> {news.author}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
