import React,{ useEffect, useState } from "react";
import RandomLyrics from "../Components/RandomLyrics";
import SingleList from "../Components/SingleList";
import NewListForm from "../Components/NewListForm";


const List = ({currentUser}) => {


  const [lists, setLists] = useState(
    JSON.parse(window.localStorage.getItem("fromLocalStorage"))
  );

  
  // list 추가하기
  const addNewList = (newList) => {
    setLists([...lists, newList]);    
  }

  useEffect(() => {
    //console.log(lists)
    window.localStorage.setItem("fromLocalStorage",JSON.stringify(lists))
  })

  
  // list 삭제하기
  const deleteList = (id) => {
    const filteredList = lists.filter((el) => el.uuid !== Number(id));
    setLists(filteredList);
    //console.log(id)
    //console.log(filteredList)
  }

  let data;
  const localStorageData = localStorage.getItem("fromLocalStorage");
  if (localStorageData){
    data = JSON.parse(localStorageData)
  }
  console.log(data)

  return (
    <section>
      <h4 id="userGreeting">{currentUser}의 행운을 빌어줘</h4>
      <RandomLyrics />
      <NewListForm onButtonClick={addNewList} />
      <ul id="lists">
        {lists.map((el) => (
          <SingleList 
          key={el.uuid} 
          id={el.uuid} 
          date={el.date}
          deleteList={deleteList}
          >
            {el.content}
          </SingleList>
        ))}
      </ul>
    </section>
  );
};

export default List;