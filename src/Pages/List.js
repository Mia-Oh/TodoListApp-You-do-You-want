import { useEffect, useState } from "react";
import RandomLyrics from "../Components/RandomLyrics";
import SingleList from "../Components/SingleList";
import NewListForm from "../Components/NewListForm";


const List = ({currentUser}) => {


  // 기본 상태 로컬스토리지에서 불러오기
  // 리스트 내용이 없을 경우 오류 생김 --> []도 넣어줘야 함 
  const [lists, setLists] = useState(
    JSON.parse(window.localStorage.getItem("fromLocalStorage")) || []
  );

  
  // list 추가하기
  const addNewList = (newList) => {
    setLists([...lists, newList]);    
  }

  // 렌더링 될 때 마다 로컬스토리지에 리스트 업데이트 해주기
  useEffect(() => {
    window.localStorage.setItem("fromLocalStorage",JSON.stringify(lists))
  })

  
  // list 삭제하기
  const deleteList = (id) => {
    const filteredList = lists.filter((el) => el.uuid !== Number(id));
    setLists(filteredList);
  }

 
  // To Do 체크 상태 변경
  const toggleHandler = (id) => {
    console.log(id)
    let checkedList = lists.map((el) => {
      if(el.uuid === id){
        el.checked = !el.checked;
      }
      return el;
    });
      setLists(checkedList);
  }


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
          checked={el.checked}
          deleteList={deleteList}
          toggleHandler={toggleHandler}
          >
            {el.content}
          </SingleList>
        ))}
      </ul>
    </section>
  );
};

export default List;