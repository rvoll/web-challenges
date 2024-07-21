import useSWR from "swr";

// see HO-React data fetching (and HO JS-fetch)
const fetcher = (...args) => fetch(...args).then((response) => response.json());

//   Map over the fetched data object to create a list
//   of all products where you display their information.

export default function Products() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load.</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h2>{product.price}</h2>
          <h2>{product.currency}</h2>d<h2>{product.category}</h2>
        </div>
      ))}
    </div>
  );
}
// formatting looks far from ideal
