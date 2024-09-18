import React from "react";

export default function Card() {
  return (
    <div className="container spaced-container"> {/* Applied class for spacing */}
      <div className="center-card"> {/* Applied class to center the card horizontally */}
        <div className="card card-custom"> {/* Applied custom card class */}
          <img className="card-img-top" src="card(2).png" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some code place.</p>

            {/* Dropdowns aligned in one row with spacing */}
            <div className="container w-100">
              <div className="d-flex justify-content-between align-items-center">
                <select className="form-select m-2 h-100 w-50 bg-success text-white">
                  {Array.from({ length: 6 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select className="form-select ms-3 m-2 h-100 w-50 bg-success text-white rounded">
                  <option value="half">Half</option>
                  <option value="full">Full</option>
                </select>
              </div>
            </div>

            <div className="mt-3">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
