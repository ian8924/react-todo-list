import Item from "./Item";


const List = ({ listData , deleteData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { time, date, note ,id } = item;
        return <Item key={ id } id={ id } note={ note } date={ date } time={ time } deleteData={ deleteData }/>;
      })}
    </div>
  );
};

export default List;
