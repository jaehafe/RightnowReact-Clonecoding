import "./productImage.css";

export default function ProductImage({ thumbnailImg, productName }) {
  const imgUrl = "https://test.api.weniv.co.kr/" + thumbnailImg;
  return <img src={imgUrl} alt={productName} />;
}
