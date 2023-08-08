import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardNews from "../components/card";
import Country from "../components/country";
import axios from "axios";
import { cardInterface } from "../utils/interface/cardInterface";
import { Pagination } from "antd";
import { useDispatch } from "react-redux";
import { setSelectedArticle } from "../store/Features/articleSlice";
import CardSkeleton from "../components/CardSkeleton";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [latestNews, setLatestNews] = useState([]);
  const [popularNews, setPopularNews] = useState([]);
  const [category, setCategory] = useState("");
  const [countrySelected, setCountrySelected] = useState("");
  const [totalPageLatestNews, setTotalPageLatestNews] = useState<number>();
  const [totalPagePopularNews, setTotalPagePopularNews] = useState<number>();
  const [currentPageLatest, setCurrentPageLatest] = useState<number>(1);
  const [currentpagePopular, setCurrentPagePopular] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const listCategory = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleCountryChange = (selectedCountry: string) => {
    setCountrySelected(selectedCountry);
  };

  // get latest times
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const currentTime = `${year}-${month}-${day}`;

  // get latest Newa
  const getLatestNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?pageSize=12&page=${currentPageLatest}&country=${
          countrySelected ? countrySelected : "us"
        }&category=${category}&from=${currentTime}&to=${currentTime}&apiKey=dd3a283694aa48d6ad116c21dccf7410`
      );
      setLatestNews(response.data.articles);
      setTotalPageLatestNews(response.data.totalResults);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const getPopularNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?pageSize=12&page=${currentpagePopular}&q=${
          category ? category : "general"
        }&sortBy=popularity&apiKey=dd3a283694aa48d6ad116c21dccf7410`
      );
      setPopularNews(response.data.articles);
      setTotalPagePopularNews(response.data.totalResults);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getLatestNews();
    getPopularNews();
  }, [category, countrySelected, currentpagePopular, currentPageLatest]);

  const goDetail = (item: cardInterface) => {
    dispatch(setSelectedArticle(item));
    navigate("/detail");
  };

  return (
    <div className="pt-20">
      {/* category */}
      <div className="w-full mb-10 fixed z-10 pb-5 bg-[#e8e8e8] h-auro flex flex-wrap flex-row gap-2 justify-center items-center">
        {listCategory.map((item: string, index: number) => {
          return (
            <span
              key={index}
              onClick={() => setCategory(item)}
              className="bg-[#00BFFF] text-white font-semibold pb-1 rounded-full px-5 mt-2 cursor-pointer"
            >
              {item}
            </span>
          );
        })}
      </div>

      <Country onDataChange={handleCountryChange} />

      {/* contenet */}
      <div className="pt-5 flex flex-col gap-1">
        {/* latest news */}
        <div className="w-full h-auto p-5">
          <h2 className="border-b border-[#bfbfbf] pb-2 mb-5 text-2xl font-bold">
            Latest News
          </h2>
          {loading ? (
            <CardSkeleton count={4} />
          ) : (
            <div className="flex flex-row flex-wrap gap-3 ">
              {latestNews.map((item: cardInterface, index: number) => {
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
          )}

          <div className="w-full flex justify-center py-5">
            <Pagination
              onChange={(page) => setCurrentPageLatest(page)}
              defaultCurrent={1}
              total={totalPageLatestNews}
            />
          </div>
        </div>

        {/* popular news */}
        <div className="w-full h-auto p-5">
          <h2 className=" border-b-2 border-black pb-2 mb-5 text-2xl font-bold">
            Popular News
          </h2>
          {loading ? (
            <CardSkeleton count={4} />
          ) : (
            <div className="flex flex-row flex-wrap gap-3 ">
              {popularNews.map((item: cardInterface, index: number) => {
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
          )}
          <div className="w-full flex justify-center py-5">
            <Pagination
              onChange={(page) => setCurrentPagePopular(page)}
              defaultCurrent={1}
              total={totalPagePopularNews}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
