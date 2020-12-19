import Link from "next/link";

const product = () => {
  return (
    <div
      style={{ backgroundColor: "green", padding: "50px" }}>
      <h1>Welcome to Product Page</h1>
      <Link href="/">Home Page</Link>
      <br />

      <Link href="/profile">Profile Page</Link>
    </div>
  );
};

export default product;
