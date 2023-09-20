import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import NotFound from "../NotFound";

export default function Activity() {
  const { id } = useParams();

  const [activity, setActivity] = useState({});
  const [validId, setValidId] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ecoly-api.cyclic.app/api/activities/${id}`)
      .then((res) => {
        setActivity(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        if (err.response.status === 404 || err.response.status === 400) {
          setValidId(false);
        }
      });
  }, [id]);

  return (
    <>
      <div>
        {validId ? (
          <div>
            <div className="images">
              {activity.images ? (
                activity.images.map((image) => (
                  <img
                    key={image.id}
                    src={image}
                    alt={activity.title}
                    width="300"
                    height="200"
                  />
                ))
              ) : (
                <Loading />
              )}
            </div>
            <div className="title">
              <h3>{activity.title}</h3>
            </div>
            <div className="theme">
              <span>{activity.theme}</span>
            </div>
            <div className="dates">
              <span>
                {activity.initial_date} - {activity.final_date}
              </span>
            </div>
            <div className="complexity">
              <span className="stars">
                {Array.from({ length: activity.complexity }, (_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
              </span>
            </div>
            <div className="creator">
              <span>
                {activity.creator ? activity.creator.name : "No creator"}
              </span>
            </div>
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
}
