const Username = (props) => {
  return (
    <div>
      <div className="col-6 m-auto my-2">
        <div className="form form-group">
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            placeholder="Enter Username"
            value={props.userName}
            onChange={(e) => props.setUserName(e.target.value)}
          />{" "}
        </div>
      </div>
      <div className="col-6 m-auto my-2">
        <div className="form form-group">
          <button className="btn btn-info" onClick={props.getUserDetails}>
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default Username;
