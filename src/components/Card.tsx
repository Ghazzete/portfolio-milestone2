import React from 'react';
import Image from 'next/image';
import '../app/styles/card.css'; 

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="card ">
      <div>
        <Image
          className="cardImage"
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="cardContent">
        <div className="cardTitle">{title}</div>
        <div className="cardDesc">{desc}</div>
        <div className="tagsContainer">
          {tags.map((el) => (
            <div className="tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
