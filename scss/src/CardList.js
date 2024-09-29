import React from 'react';
import './styles/CardList.scss';
import datas from './data.json';

const CardList = () => {
  return (
    <section>
      <li className="container">
        {datas.map((data) => (
          <ul key={data.id} className="item">
            <img src={data.image[0]} alt={data.id} className="image" />
            <div className="info">
              <p>이름: {data.name}</p>
              <p>일본 이름: {data.jname}</p>
              <p>나이: {data.age}</p>
            </div>
          </ul>
        ))}
      </li>
    </section>
  );
};

export default CardList;
