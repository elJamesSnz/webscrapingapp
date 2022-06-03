import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { size } from "lodash";
import { getNewsApi } from "../api/news";
import ListNews from "../components/ListNews";
import MainLayout from "../layout/MainLayout";

export default function Main() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getNewsApi();
      if (size(response) > 0) setNews(response);
      else setNews([]);
    })();
  }, []);

  return (
    <div className="home">
      <MainLayout className="home">
        {!news && <Loader active> Cargando noticias</Loader>}
        {news && size(news) === 0 && (
          <div>
            <h3>No hay noticias</h3>
          </div>
        )}
        {size(news) > 0 && <ListNews news={news} />}
      </MainLayout>
    </div>
  );
}
