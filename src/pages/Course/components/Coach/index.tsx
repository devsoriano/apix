import React from 'react';
import './styles.scss';

export const Coach = ({
  photo,
  coach,
  profil,
  workposition,
  workplace,
  description,
}: any) => {
  return (
    <section className="DetailCourse--Coach">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3 col-center">
            <img src={photo} className="photo-profile" alt="" />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">Tu coach</h5>
              <p className="card-text">
                <ul className="list-group">
                  <li className="list-group-item">{coach}</li>
                  <li className="list-group-item">{profil}</li>
                  <li className="list-group-item">{workposition}</li>
                  <li className="list-group-item">{workplace}</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col description">{description}</div>
        </div>
      </div>
    </section>
  );
};
