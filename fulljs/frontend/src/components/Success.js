const Success = (props) => {
  return (
    <div>
      <div className="col-6 m-auto my-2">
        <div className="card">
          <div className="card-header">Success</div>
          <div className="card-body">
            <h5 className="card-title text-center">User Details</h5>
            <p className="card-text text-center">Details saved successfully</p>
            <button onClick={props.cancel} className="btn btn-primary m-auto">
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
