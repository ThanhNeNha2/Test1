import React, { useState } from "react";
import "./Product.css";
import anh1 from "../../assets/image/anh1.jpg";
import anh2 from "../../assets/image/anh2.jpg";
import anh3 from "../../assets/image/anh3.jpg";
import anh4 from "../../assets/image/anh4.jpg";
import Lightbox from "react-image-lightbox";
const images = [anh1, anh2, anh3, anh4];

export default function Product() {
  const [showimg, setshowimg] = useState(anh1);
  const [isOpen, setisOpen] = useState(false);
  const [photoIndex, setphotoIndex] = useState(0);

  const ClickShowImg = (imgsss) => {
    setshowimg(imgsss);
  };
  const HanderClickViewImg = () => {
    let index = images.findIndex((item) => item === showimg);
    setphotoIndex(index);
    setisOpen(true);
  };
  return (
    <div>
      <div className="product-container">
        <div className="product-left">
          <div className="img-main">
            <img alt="" src={showimg} onClick={() => HanderClickViewImg()} />
          </div>

          <div className="img-botton">
            <img
              alt=""
              src={anh1}
              onClick={() => {
                ClickShowImg(anh1);
              }}
            />
            <img
              alt=""
              src={anh2}
              onClick={() => {
                ClickShowImg(anh2);
              }}
            />
            <img
              alt=""
              src={anh3}
              onClick={() => {
                ClickShowImg(anh3);
              }}
            />
            <img
              alt=""
              src={anh4}
              onClick={() => {
                ClickShowImg(anh4);
              }}
            />
          </div>
        </div>
        <div className="product-right">
          <h3>Giày chạy bộ nam New Balance - M860E11</h3>
          <span>3.695.000 đ</span>
          <p>Size:30</p>
          <p>Số lượng</p>

          <input type="checkbox" />
          <div>
            <button>Chọn mua</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setisOpen({ isOpen: false })}
          onMovePrevRequest={() =>
            setphotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setphotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}
