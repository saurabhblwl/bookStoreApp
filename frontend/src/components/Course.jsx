import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
// import list from "../../public/list.json";

function Course() {
  const [book, setBook] = useState([]);

  // Fetching books from the API
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here!!!</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            saepe obcaecati ducimus omnis consequatur sit provident deleniti cum
            dolore dicta! In excepturi odit culpa quas voluptatem sit
            repellendus quo ipsum!
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
