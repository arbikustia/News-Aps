import { useEffect, useState } from "react";
import { selectSelectedArticle } from "../store/Features/articleSlice";
import { Image } from "antd";
import axios from "axios";
import CardNews from "../components/card";
import { cardInterface } from "../utils/interface/cardInterface";

import { useSelector } from "react-redux";
import { setSelectedArticle } from "../store/Features/articleSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const DetailPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(selectSelectedArticle);
  const [relevantData, setRelevantData] = useState([]);


  const getRelevantNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?pageSize=5&q=${data?.title}&sortBy=relavanct&apiKey=dd3a283694aa48d6ad116c21dccf7410`
      );
      setRelevantData(response.data.articles);
    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    if (data) {
      getRelevantNews();
    }
  }, []);

  const goDetail = (item: cardInterface) => {
    dispatch(setSelectedArticle(item));
    navigate("/detail");
  };

  if (!data) {
    return <div>No article selected.</div>;
  }

  return (
    <div className="pt-20 grid md:grid-cols-6">
      <div
        className={`${
          relevantData.length >= 1 ? "md:col-span-4" : "md:col-span-6"
        }  px-4 flex flex-col items-center`}
      >
      
        <Image
          className="rounded-3xl"
          src={
            data.urlToImage
              ? data.urlToImage
              : "https://www.babatpost.com/wp-content/uploads/2023/07/Breaking-News-Lando-Norris-Menikmati-Latihan-Pra-Balapan-di-Monako.jpeg"
          }
        />

        <div className="w-8/12 p-5 flex flex-col gap-5 rounded-xl bg-gray-200 -top-24 relative">
          <h1 className="font-bold mb-5">{data.title}</h1>
          <p>{data.description}</p>
          <a href={data.url} target="_blank" className="text-[#3346ba] w-fit">
            Read more.
          </a>
          <p>{data.publishedAt}</p>
        </div>
      </div>
      {relevantData.length >= 1 ? (
        <div className="md:col-span-2">
          <h1 className="font-bold text-2xl m-5 text-center">Relevant News</h1>
          <div className="flex flex-col gap-5 justify-center items-center">
            {relevantData.map((item: cardInterface, index: number) => {
              return (
                <CardNews
                  key={index}
                  urlToImage={item.urlToImage}
                  title={item.title}
                  description={item.description}
                  publishedAt={item.publishedAt}
                  cardDetail={() => goDetail(item)}
                />
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailPage;
