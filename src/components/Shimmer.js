const Shimmer = (props) => {
  return (
    <>
      <div className="restaurent-card">
        <div className="shimmer-container">
          {Array(16)
            .fill("")
            .map((e, index) => (
              <div key={index} className="shimmer-card"></div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Shimmer;
