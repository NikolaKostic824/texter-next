const WriterCard = ({writer}) => {
    return (
        <div>
          <img src={writer.image} alt={writer.nameUser + " avatar"} />
          <h2>{writer.nameUser}</h2>
        </div>
    );
}
 
export default WriterCard;