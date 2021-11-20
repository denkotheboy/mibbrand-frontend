import React, { FC, useState } from "react";
import { IImage } from "../../pages/product/[id]";
import Modal from "./Modal";

interface IProps {
  images: IImage[];
}

const Images: FC<IProps> = ({ images }) => {
  const [isShowModal, setIsShowModal] = useState<number | null>(null);
  return (
    <>
      {isShowModal !== null ? (
        <Modal
          onClose={() => setIsShowModal(null)}
          images={images}
          current={isShowModal}
        />
      ) : null}
      {images.map((image: IImage, index: number) => (
        <img
          key={index}
          style={{ width: "48%", margin: 5, cursor: "pointer" }}
          src={image.url}
          srcSet={image.url}
          alt=""
          loading="lazy"
          onClick={() => setIsShowModal(index)}
        />
      ))}
    </>
  );
};

export default Images;
