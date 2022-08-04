import "./newUser.css";
import { Link } from "react-router-dom";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Name</label>
          <input type="text" placeholder="User name" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="email address" />
        </div>

        <div className="newUserItem">
          <label>Phone Number</label>
          <input type="text" placeholder="phone number" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="address" />
        </div>
        <div className="newUserItem">
          <label>City</label>
          <input type="text" placeholder="city" />
        </div>
        <div className="newUserItem">
          <label>Country</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="cameroun">cameroun</option>
            <option value="france">france</option>
            <option value="canada">canada</option>
          </select>
        </div>
        <div className="space-x-[20px]">
          <button className="newUserButton">Create</button>
          <Link to="/Users">
            <button className="newUserButtonCancel">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
