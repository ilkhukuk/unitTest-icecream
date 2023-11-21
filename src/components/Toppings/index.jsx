import axios from 'axios';
import { useEffect, useState } from 'react';

const Toppings = () => {
  const [toppingData, setToppingData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3010/toppings')
      .then((res) => setToppingData(res.data));
  }, []);

  //   her sos seçildinğinde  çalışır
  const handleChange = (e, item) => {
    e.target.checked
      ? setBasket([...basket, item]) // input tikliyse sepete ekler
      : setBasket(basket.filter((i) => i.name !== item.name)); // değilse kaldırır
  };

  return (
    <div className="container">

      <div className='d-flex gap-5 justify-content-between my-3 '>
      <h1 className="text-danger">Sos Çeşitleri</h1>
      <div className='d-flex gap-3 align-items-center '>
      <h3>
        Tanesi <span className="text-info"> 3 ₺</span>
      </h3>
      <h3>
        Soslar Ücreti:{' '}
        <span className="text-success">{basket.length * 3} ₺</span>
      </h3>
      </div>
      </div>
      


      <div className="row gap-2 mt-3">
        {toppingData.map((data) => (
          <div
            key={data.name}
            className="d-flex m-auto justify-content-center py-2 rounded-5 top-card"
            style={{ width: '150px' }}
          >
            <label
              className="d-flex flex-column align-items-center gap-2"
              htmlFor={data.name}
            >
              <img
                height={100}
                src={data.imagePath}
                alt="topping-img"
              />

              <p className="text-center text-nowrap">{data.name}</p>
            </label>

            <input
              onChange={(e) => handleChange(e, data)}
              id={data.name}
              className="form-check-input"
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
