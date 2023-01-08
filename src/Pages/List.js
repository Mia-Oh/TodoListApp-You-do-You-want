import React,{ useState } from "react";
import RandomLyrics from "../Components/RandomLyrics";
import SingleList from "../Components/SingleList";
import NewListForm from "../Components/NewListForm";


const currentUser = "원필";

const List = () => {
  
  const [lists, setLists] = useState([
      {
        uuid: 1,
        writer: "김원필",
        date: "2020-10-10",
        content: "안녕!"
      },
      {
        uuid: 2,
        writer: "강영현",
        date: "2020-10-12",
        content: "오히려 좋아!"
      }
  ]);
  
  const addNewList = (newList) => {
    setLists([...lists, newList]);
  }
  
  
  return (
    <section>
      <div>{currentUser}</div>
      <RandomLyrics />
      <NewListForm onButtonClick={addNewList} />
      <ul id="lists">
        {lists.map((el) => (
          <SingleList key={el.uuid} writer={el.writer} date={el.date}>
            {el.content}
          </SingleList>
        ))}
      </ul>
    </section>
  );
};

export default List;