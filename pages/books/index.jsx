import styles from "../../styles/Home.module.css";
import { useState } from "react";
import DisplayBook from "../../components/DisplayBook";

function Book(props) {
  const [books, setBooks] = useState({});

  return (
    <div className={styles.container}>
      <h1>You are on the main page of the library,</h1>
      {/* Now with the help of the getserverside props, use prisma to fetch data and display it on this page with the same component as in the book page */}
      {/* The data you are going to fetch need to be an array of objects. like so [{...}] */}
      {books?.map((book) => {
        <DisplayBook book={book} />;
      })}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  return {
    props: { id: context.params.id },
  };
};

export default Book;
