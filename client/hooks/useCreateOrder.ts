import React, { ChangeEvent, FormEvent, useState } from "react";

const Initial_data = {
  customer: "",
  address: "",
  price: 0,
};
const useCreateOrder = () => {
  const [data, setData] = useState(Initial_data);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!data.address || !data.customer || !data.price) return;

    try {
      await fetch("http://localhost:3001/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setData(Initial_data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    onChange,
    handleSubmit,
    data,
  };
};

export default useCreateOrder;
