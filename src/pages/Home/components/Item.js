const Item = ({ id ,note, date, time, deleteData }) => {
  console.log(note, date, time, id);

    function deleteIt (test) {
        deleteData(function(pre){
            return pre.filter(item=>{
                return item.id !== id
            })
        })
    }
    
  return (
    <div className="item">
      <button onClick={ deleteIt } className="remove">
        <p>{ note }</p>
        <p>{`${ date } ${ time }`}</p>
        刪除
      </button>
    </div>
  );
};

export default Item;
