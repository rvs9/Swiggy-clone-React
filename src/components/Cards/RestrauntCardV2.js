import { Link } from "react-router-dom";

const RestrauntCardV2 = (props) => {
  return (
    <div className="restaurent-card">
      <Link to={"restaurant/"+props.id}>
        <div className="card_container">
          <div className="card_content">
            <div className="card_image_container ">
              <img
                className="rest_image"
                alt="NOTO - Healthy Ice Cream"
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  props.cloudinaryImageId
                }
              />
            </div>

            <div className="card_description_container1">
              <div className="rest_name">{props.name}</div>
              <div
                className="rest_cuisines"
                title="Ice Cream, Healthy Food, Desserts"
              >
                {props.cuisines}
              </div>
            </div>
            <div className="card_description_container2">
              <div className="rest_rating">
                <span className="icon-star _537e4"></span>
                <span>{props.avgRating}</span>
              </div>
              <div>•</div>
              <div>{props.slaString}</div>
              <div>•</div>
              <div className="rest_cost">{props.costForTwoString}</div>
            </div>
            <div className="offer_container">
              <span className="icon-offer-filled offer_image"></span>
              <span className="rest_offer">50% off | Use TRYNEW</span>
            </div>
          </div>
        </div>
        </Link>
    </div>
  );
};

export default RestrauntCardV2;
