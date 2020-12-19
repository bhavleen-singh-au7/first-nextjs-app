import Link from "next/link";

const profile = () => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        padding: "50px",
      }}>
      <h1>Welcome To Profile Page</h1>
      <Link href="/">Home Page</Link>
      <br />

      <Link href="/product">Product Page</Link>
    </div>
  );
};

export default profile;
