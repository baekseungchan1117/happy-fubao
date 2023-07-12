import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Card(props) {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const moveDetail = () => {
    // navigate("/shop/detail/" + props.goods.id);
    axios({
      method: "GET",
      url: `http://localhost:8000/shop/detail/:id`,
      data: props.goods.id,
    }).then(() => {
      navigate(`detail/` + props.goods.id);
      console.log(props.goods.id);
    });
  };
  return (
    <>
      <div className="container" onClick={moveDetail}>
        <div className="col-md-4 line">
          <img
            onMouseOver={() => {
              setIsHover(true);
            }}
            onMouseOut={() => {
              setIsHover(false);
            }}
            className="card-img"
            src={
              isHover
                ? process.env.PUBLIC_URL + "goods_image/goods-bg.png"
                : process.env.PUBLIC_URL +
                  "goods_image/" +
                  props.goods.id +
                  ".jpg"
            }
            width="100%"
          />
          <h4>{props.goods.product_title}</h4>
          <p>feat. {props.goods.content}</p>
          <p>{props.goods.price} 원</p>
        </div>
      </div>
    </>
  );
}
export default Card;
