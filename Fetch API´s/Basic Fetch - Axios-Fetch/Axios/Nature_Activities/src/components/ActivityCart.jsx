import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ActivityCart({ ...props }) {
    return (
        <div 
        className="activity-cart">
            <div className="title">
            <h3>
                {
                    props.activity.title
                }
            </h3>
            </div>
            <div className="theme">
                <span>
                    {
                        props.activity.theme
                    }
                </span>
            </div>
            <div className="image-activity">
                <img src={props.activity.image} alt={props.activity.title}
                    width="300" height="200"
                />
            </div>
            <div className="description">
                <p>
                    {
                        props.activity.description
                    }
                </p>
            </div>
            <div className="link-detail">
                <button>
                    <Link to={`/activities/${props.activity.id}`}>
                        Detail
                    </Link>
                </button>
            </div>
        </div>
    )
}

ActivityCart.propTypes = {
    activity: PropTypes.object.isRequired,
};

export default ActivityCart;
