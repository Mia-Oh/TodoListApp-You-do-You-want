import React,{ useState } from "react";
import RandomLyrics from "../Components/RandomLyrics";
import SingleList from "../Components/SingleList";
import NewListForm from "../Components/NewListForm";


const currentUser = "원필";

const List = () => {
  
  const [lists, setLists] = useState([
      {
        uuid: 1,
        date: "2020-10-10",
        content: "취침 준비하기"
      },
      {
        uuid: 2,
        date: "2020-10-12",
        content: "기상하기"
      },
      {
        uuid: 3,
        date: "2020-10-12",
        content: "지하철 타러 가기"
      },      {
        uuid: 4,
        date: "2020-10-12",
        content: "나가서 버스타기"
      }
  ]);
  
  // list 추가하기
  const addNewList = (newList) => {
    setLists([...lists, newList]);
  }
  
  // list 삭제하기
  const deleteList = (id) => {
    const filteredList = lists.filter((el) => el.uuid !== Number(id));
    setLists(filteredList);
    console.log(id)
    console.log(filteredList)
  }

  // // 체크된 리스트 
  // const listChecked = (id) => {
  //   console.log(id)
  // }


  return (
    <section>
      <h4>{currentUser}의 행운을 빌어줘</h4>
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