import React ,{useState} from 'react';
import Todo from './Todo';


function Todos(){
  const [myArray, updateMyArray] = useState([]);
  const [listCon, setListCon] = useState('');

    const onClick = () => {
        updateMyArray( arr => [...arr, `${listCon}`]);
    };
  return(
    <>
      <h1>TODO APP</h1>
      <input type='text' id='listInput' value={listCon} onChange={e => setListCon(e.target.value)}/>
      <input type="button" onClick={ onClick } value="Add Note" />
      <hr/>
        <div>{myArray.map((val,i)=>{
          return <Todo key={i} detail={val}/>
        }
        )}
        </div>
    </>
  )
}
export default Todos;