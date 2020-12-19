import Link from "next/link";

const Home = () => {
  return (
    <div
      style={{ backgroundColor: "red", padding: "50px" }}>
      <h1>Welcome To Home Page</h1>
      <Link href="/product">Product Section</Link>
      <br />
      <Link href="/profile">Profile Section</Link>
    </div>
  );
};

export default Home;
