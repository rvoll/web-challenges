import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>Id: {id}</p>
    </div>
  );
}

// see HO-React data fetching (and HO JS-fetch)
const fetcher = (...args) => fetch(...args).then((response) => response.json());

function ProductDetails({ id }) {
  // interpolating this into the URL
  const { data, error } = useSWR("/api/products/${id}", fetcher);

  if (error) return <div>Failed to load.</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h2>{product.price}</h2>
      <h2>{product.currency}</h2>d<h2>{product.category}</h2>
    </div>
  );
}
