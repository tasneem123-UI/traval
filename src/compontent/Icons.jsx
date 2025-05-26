const Icons = () => {
    return (
      <div className="container-fluid icons">
        <div className="row ">
          {/* Icon Box 1 */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex align-items-center p-3 bg-light rounded">
              <i className="bi bi-arrow-clockwise fs-3 me-3 text-primary"></i>
              <h5 className="mb-0">Adventures</h5>
            </div>
          </div>
  
          {/* Icon Box 2 */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex align-items-center p-3 bg-light rounded">
              <i className="bi bi-truck fs-3 me-3 text-success"></i>
              <h5 className="mb-0">Family Tours</h5>
            </div>
          </div>
  
          {/* Icon Box 3 */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex align-items-center p-3 bg-light rounded">
              <i className="bi bi-gift fs-3 me-3 text-warning"></i>
              <h5 className="mb-0">City Cards</h5>
            </div>
          </div>
  
          {/* Icon Box 4 */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex align-items-center p-3 bg-light rounded">
              <i className="bi bi-person-lines-fill fs-3 me-3 text-info"></i>
              <h5 className="mb-0">Multi-day Trips</h5>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Icons;