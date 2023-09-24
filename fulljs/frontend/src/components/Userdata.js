const Userdata = (props) => {
  return (
    <div>
      <div className="col-6 m-auto my-2">
        <div className="form form-group">
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Enter Name"
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
            required
          />{" "}
        </div>
      </div>

      <div className="col-6 m-auto my-2">
        <div className="form form-group">
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter Email"
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
            required
          />{" "}
        </div>
      </div>

      <div className="col-6 m-auto my-2">
        <div className="form form-group">
          <input
            type="tel"
            name="phone"
            id="phone"
            className="form-control"
            placeholder="Enter Phone Number"
            value={props.phone}
            onChange={(e) => props.setPhone(e.target.value)}
            min="6"
            max="14"
            required
          />{" "}
        </div>
      </div>

      <div className="col-6 m-auto my-2">
        <div className="form form-group">
          <input
            type="date"
            name="birthday"
            id="birthday"
            className="form-control"
            placeholder="Enter Birthday"
            value={props.birthday}
            onChange={(e) => props.setBirthday(e.target.value)}
            required
          />{" "}
        </div>
      </div>

      <div className="col-6 m-auto my-2">
        <div className="form form-group">
          <button className="btn btn-info mx-2" onClick={props.setUserDetails}>
            Save
          </button>
          <button className="btn btn-secondary mx-2" onClick={props.cancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Userdata;
