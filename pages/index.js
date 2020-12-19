import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:3000/api/hello"
  );
  const data = await res.json();
  console.log(data);
  return {
    props: { data },
  };
}

const Home = (prop) => {
  return (
    <div
      style={{ backgroundColor: "red", padding: "50px" }}>
      <h1>Welcome To Home Page</h1>
      <h3>{prop.data.message}</h3>
      <Link href="/product">Product Section</Link>
      <br />
      <Link href="/profile">Profile Section</Link>

      {/* Adding CSS */}
      <style jsx>
        {`
          h3 {
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
