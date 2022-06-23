import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayBook from "../../components/DisplayBook";

function Book(props) {
  const [book, setBook] = useState({});
  async function getbook() {
    const res = await axios
      .post("/api/get-book", { id: props.id })
      .catch(function (error) {
        error;
      });
    setBook(res.data);
  }

  useEffect(function () {
    getbook();
  }, []);

  console.log(book);
  return (
    <div className={styles.container}>
      <h1>
        You are on the page with the id (<span>{props.id}</span>)
      </h1>
      {/* Now use the fetched datas in "book" to display them on the webpage using the DisplayBook component (that you need to do) */}
      <DisplayBook book={book}/>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  return {
    props: { id: context.params.id },
  };
};

export default Book;
