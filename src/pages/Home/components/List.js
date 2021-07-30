import Item from "./Item";

const arr = [];

const List = ({ listData }) => {
  console.log(listData);
  return (
    <div className="list">
      {listData.map((item) => {
        const { time, date, note } = item;
        return <Item key={date} note={note} date={date} time={time} />;
      })}
    </div>
  );
};

export default List;
