const RestrauntCardV1 = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <div className="rating">
        <p>{avgRating}</p>
      </div>
    </div>
  );
};

export default RestrauntCardV1;
