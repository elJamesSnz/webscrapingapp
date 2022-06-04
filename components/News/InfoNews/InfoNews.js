import React, { useEffect, useState } from "react";
import { Image, Grid } from "semantic-ui-react";
import Link from "next/link";
import { map } from "lodash";
import { getGameByUrlApi } from "../../../api/news";
import { Main } from "next/document";

export default function InfoNews(props) {
  const { query } = props;
  const [news, setNews] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getGameByUrlApi(query.news);
      setNews(response);
    })();
  }, [news]);

  if (!news) return null;

  return <MainInfo news={news} />;
}

function MainInfo(props) {
  const { news } = props;
  return (
    <div className="news__left__MainInfo">
      <div className="news__left__MainInfo-img">
        <InfoImg imgtitle={news.title} imgUri={news.img} />
      </div>
      <div className="news__left__MainInfo-subtitle elemento">
        {news.subtitle != "" ? (
          <div className="news__left__MainInfo-subtitle">
            <Subtitulo sub={news.subtitle} />
          </div>
        ) : (
          <Subtitulo sub={`--------`} />
        )}
      </div>

      <div className="news__left__MainInfo-intro elemento">
        {news.intro != "" ? (
          <div className="news__left__MainInfo-intro">
            <Intro intro={news.intro} />
          </div>
        ) : (
          <Intro intro={`--------`} />
        )}
      </div>
      <div className="news__left__MainInfo-secciones elemento secc">
        {news.sections.length > 0 ? (
          <div className="news__left__MainInfo-secciones-textos">
            <Grid>
              {map(news.sections, (seccion) => (
                <Grid.Row key={seccion.sec_title}>
                  <Parrafo title={seccion.sec_title} text={seccion.text} />
                </Grid.Row>
              ))}
            </Grid>
          </div>
        ) : (
          <Secciones secciones={`--------`} />
        )}
      </div>
    </div>
  );
}

function InfoImg(props) {
  const { imgtitle, imgUri } = props;
  return (
    <>
      <Image src={imgUri} alt={imgtitle} />
    </>
  );
}

function Subtitulo(props) {
  const { sub } = props;
  return (
    <>
      <h3>{sub}</h3>
    </>
  );
}

function Intro(props) {
  const { intro } = props;
  return (
    <>
      <p>{intro}</p>
    </>
  );
}

function Parrafo(props) {
  const { title, text } = props;
  return (
    <div className="news__left__MainInfo-secciones-textos-parrafo">
      <div className="news__left__MainInfo-secciones-textos-parrafo__title">
        <h3>{title}</h3>
      </div>
      <div className="news__left__MainInfo-secciones-textos-parrafo__text">
        <p>{text}</p>
      </div>
    </div>
  );
}

function Secciones(props) {
  const { secciones } = props;
}
