import { useState, useEffect, useContext } from "react";
import { Data } from "../../database/data";
import "./homePage.css";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function HomePage() {
  const [lodaData, setLodaData] = useState(null);

  useEffect(() => {
    console.log("로딩중");
  }, []);

  useEffect(() => {
    if (lodaData == null) {
      return;
    } else {
      console.log("로딩완료");
    }
  }, [lodaData]);

  useContext(Data).then((d) => {
    console.log(d);
    setLodaData(d);
  });

  return (
    <main className="product">
      <ul className="product-list">
        {lodaData !== null ? (
          lodaData.map((item) => (
            <ProductCard
              key={item.id}
              productName={item.productName}
              price={item.price}
              thumbnailImg={item.thumbnailImg}
            />
          ))
        ) : (
          <h2>로딩 중입니다.</h2>
        )}
      </ul>
      <a className="link-btn cart-link" href="#"></a>
    </main>
  );
}
