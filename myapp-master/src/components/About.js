import './css/about.css';
import user from './images/user_img.png'

export default function About() {
  return (
  <>
    <div className="wrapper">
    <div className="container">
      <div className="profile">
        <img src={user} alt="lamp" className="profile-img"/>
      </div>
      <div className="user-details">
        <h3>Saravanan</h3>
        <h5>user</h5>
      </div>
    </div>
    <div className="user-table-container">
      <tabel className="user-table">
        <tr >
          <th colSpan="3">User Books</th>
        </tr>
        <tr>
          <th>userId</th>
          <th>UserName</th>
          <th>Current Books</th>
        </tr>
        <tr>
          <td>1</td>
          <td>sara</td>
          <td>Harry porter</td>
        </tr>
      </tabel>
    </div>
    </div>
  </>
  )
}
