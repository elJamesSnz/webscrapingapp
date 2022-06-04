import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getGameByUrlApi } from "../../api/news";
import MainLayout from "../../layout/MainLayout";
import HeaderNews from "../../components/News/HeaderNews";
import InfoNews from "../../components/News/InfoNews";
import OtherNews from "../../components/News/OtherNews";

var result;
export default function ShowNews(props) {
  const { query } = useRouter();
  const [news, setNews] = useState(null);
  //const [ruta, setRuta] = useState(query);

  useEffect(() => {
    (async () => {
      const response = await getGameByUrlApi(query.news);
      setNews(response);
    })();
  }, [query]);

  if (!news) return null;

  return (
    <>
      <MainLayout className="news">
        <div className="news">
          <div className="news__left secc">
            <HeaderNews news={news} />
            <InfoNews news={news} query={query} />
          </div>
          <div className="news__right">
            <OtherNews news={news} query={query} />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
