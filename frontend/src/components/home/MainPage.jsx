import React from 'react'

const MainPage = () => {
  return (
<>
<div className="container">
  <div className="row">
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card">
        {/* <img src="car1.jpg" className="card-img-top" alt="Car 1"> */}
        <div className="card-body">
          <h5 className="card-title">Honda Civic</h5>
          <p className="card-text"><strong>Model:</strong> 2022</p>
          <p className="card-text"><strong>Color:</strong> White</p>
          <ul className="list-group">
            <li className="list-group-item">1. Fuel efficient</li>
            <li className="list-group-item">2. Spacious interior</li>
            <li className="list-group-item">3. Smooth ride</li>
            <li className="list-group-item">4. Advanced safety features</li>
            <li className="list-group-item">5. Sleek design</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card">
        {/* <img src="car2.jpg" className="card-img-top" alt="Car 2"> */}
        <div className="card-body">
          <h5 className="card-title">Toyota Corolla</h5>
          <p className="card-text"><strong>Model:</strong> 2021</p>
          <p className="card-text"><strong>Color:</strong> Blue</p>
          <ul className="list-group">
            <li className="list-group-item">1. Reliable</li>
            <li className="list-group-item">2. Fuel efficient</li>
            <li className="list-group-item">3. Affordable</li>
            <li className="list-group-item">4. Easy to drive</li>
            <li className="list-group-item">5. Comfortable seats</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card">
        {/* <img src="car3.jpg" className="card-img-top" alt="Car 3"> */}
        <div className="card-body">
          <h5 className="card-title">BMW X5</h5>
          <p className="card-text"><strong>Model:</strong> 2023</p>
          <p className="card-text"><strong>Color:</strong> Black</p>
          <ul className="list-group">
            <li className="list-group-item">1. Powerful engine</li>
            <li className="list-group-item">2. Luxurious interior</li>
            <li className="list-group-item">3. Responsive handling</li>
            <li className="list-group-item">4. Advanced technology</li>
            <li className="list-group-item">5. Stylish design</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  );
}

export default MainPage
