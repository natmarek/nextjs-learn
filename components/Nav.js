import Link from "next/link";
import Router from "next/router";

export default function NavBar() {
  return (
    <div className="">
      <h2 className="title">Autism friendly places</h2>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="posts/about">
        <a> About</a>
      </Link>
      <Link href="posts/places">
        <a>Places</a>
      </Link>

      <style jsx>
        {" "}
        {`
          * {
            padding: 20px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }

          .title {
            font-size: 40px;
            margin-right: 850px;
            margin-top: 0;
          }
        `}
      </style>
    </div>
  );
}
