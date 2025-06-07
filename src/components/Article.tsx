import React from "react";
import ArticleMenu from "./ArticleMenu";
import Link from "next/link";
import ArticleCart from "./ArticleCart";

function Article() {
  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="w-11/12 flex flex-col justify-start items-center gap-4">
        <ArticleMenu />
        <div className="w-full my-4 p-2 flex justify-start items-center flex-wrap">
          {Array.from({ length: 30 }).map((_, index) => (
            <Link
              href="/"
              target="_blank"
              className="xl:w-1/5 lg:w-1/4 sm:w-1/2 w-full h-[45vh] no-underline p-1"
              key={index}
            >
              <ArticleCart />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Article;
