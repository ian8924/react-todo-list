const Item = ({ note, date, time }) => {
  console.log(note, date, time);
  return (
    <div className="item">
      <button className="remove">
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
        刪除
      </button>
    </div>
  );
};

export default Item;
