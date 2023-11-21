import React, {useEffect, useState} from "react";
import Card from "../Card/index";
import axios from "axios";

const Scoops = () => {
  const [scoopData, setScoopData] = useState([]);
  const [basket, setBaket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3010/scoops")
      .then((res) => setScoopData(res.data));
  }, []);

  return (
    <div className="container">
      <div className="d-flex gap-5 justify-content-between align-items-center ">
        <h1 className="text-danger">Dondurma Çeşitleri</h1>
        <div className="d-flex gap-5 justify-content-center ">
          <h3>
            Tanesi: <span className="text-info">20 ₺</span>
          </h3>
          <h3>
            Ücreti:{" "}
            <span className="text-success"> {basket.length * 20} ₺</span>
          </h3>
        </div>
      </div>

      <div className="row gap-5 p-1 justify-content-between mt-3">
        {scoopData.map((i) => (
          <Card key={i.name} data={i} basket={basket} setBasket={setBaket} />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
