import { Link, useHistory } from "react-router-dom";

import '../styles/users.css';
export default function Users(props){
  const history = useHistory();
   const onDelete = async (id) => {
        try {
          // sử dụng hàm async  call api 
          const response = await fetch('https://6156c5bce039a0001725abbf.mockapi.io/users/' + id, {
          method: 'Delete', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          //chuyển đổi dữ liệu sang String -> post dữ liệu lên server
          body: null,
        });
        //chờ sau khi post dữ liệu thành công sẽ trả về data
        const data = await response.json();
        props.onDelete(data.id);
        history.push("/users")
      } catch (error) {
          console.log(error)
      }
 }
    return(
        <div>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">User Manager</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <Link role="button" className="btn btn-success" to="/add">Create</Link>
                </div>
              </div>
            </div> 
             <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
           {props.users && props.users.map((user, index) => (
              <div className="col" key={index}>
              <div className="card shadow-sm">
                <div className="bd-placeholder-img card-img-top" width="100%" height={225}><img src={user.avt} alt="" width="100%"  height="100%"/></div>
                <div className="card-body">
                  <p className="card-text">{user.fullname}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link role="button" className="btn btn-primary" to={"/edit/" + user.id}>Edit</Link>
                      <button type="button" className="btn btn-danger" onClick={()=>onDelete(user.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             ) )}
          </div>
        </div>
      </div>
        </div>
    )
}