import React from "react";
import styles from "./Article.module.css";

const Article = ({ item }) => {
  return (
    <div className="">
      <section class="py-20">
        <article class="h-90 w-50 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
          <a href="/" class="block h-full w-full">
            <img
              class="max-h-40 w-full object-cover"
              alt="featuredimage"
              src="https://images.unsplash.com/photo-1660241588741-d653d53348fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <div class="w-full bg-white p-4">
              <p class="text-md font-medium text-indigo-500">{item.title}</p>
              <p class="mb-2 text-xl font-medium text-gray-800">
                A Visit to Mount Abignale
              </p>
              <p class="text-md font-light text-gray-400">{item.desc}</p>
              <div class="justify-starts mt-4 flex flex-wrap items-center">
                <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                  #js
                </div>
                <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                  #icefactory
                </div>
              </div>
            </div>
          </a>
        </article>
      </section>
    </div>
  );
};

export default Article;
