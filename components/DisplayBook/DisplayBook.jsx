import styles from "./DisplayBook.module.css";

function DisplayBook(props) {
  return (
    <div>
      {/* Create your reusable component to display the books, here is an example */}
      <h1>{props.book.name}</h1>
    </div>
  );
}

export default DisplayBook;
