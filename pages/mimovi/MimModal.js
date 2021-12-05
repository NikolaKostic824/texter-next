const MimModal = ({ selectedImage, setBack }) => {
    return (
        <div className="backdrop">
          <h1 onClick={() => setBack()}>X</h1>
          <img src={selectedImage} alt="Mim" />
        </div>
      );
}
 
export default MimModal;