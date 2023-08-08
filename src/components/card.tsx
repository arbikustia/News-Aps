import { FC } from "react";

// interface Component
import { cardInterface } from "../utils/interface/cardInterface";

// module
import { Card } from "antd";
const { Meta } = Card;

const card: FC<cardInterface> = ({
  urlToImage,
  publishedAt,
  title,
  cardDetail,
}) => {
  return (
    <>
      <Card
        hoverable
        onClick={cardDetail}
        style={{ width: 280 }}
        cover={
          <img
            className="h-32"
            alt={title}
            src={
              urlToImage
                ? urlToImage
                : "https://www.babatpost.com/wp-content/uploads/2023/07/Breaking-News-Lando-Norris-Menikmati-Latihan-Pra-Balapan-di-Monako.jpeg"
            }
          />
        }
      >
        <Meta className="" title={title} description={publishedAt} />
      </Card>
    </>
  );
};

export default card;
