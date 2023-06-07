"use client";
import useCreateOrder from "@/hooks/useCreateOrder";

const Create = () => {
  const { handleSubmit, onChange, data } = useCreateOrder();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-teal-900 rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col p-3 space-y-3 w-1/2"
    >
      <input
        type="text"
        name="customer"
        onChange={onChange}
        value={data.customer}
        className="bg-slate-300 p-2 outline-none"
        autoComplete="off"
        placeholder="customer"
      />
      <input
        type="text"
        name="address"
        onChange={onChange}
        value={data.address}
        autoComplete="off"
        className="bg-slate-300 p-2 outline-none"
        placeholder="address"
      />
      <input
        type="number"
        name="price"
        onChange={onChange}
        value={data.price}
        autoComplete="off"
        className="bg-slate-300 p-2 outline-none"
        placeholder="price"
      />

      <button type="submit" className="py-2  rounded bg-slate-100">
        submit
      </button>
    </form>
  );
};

export default Create;
