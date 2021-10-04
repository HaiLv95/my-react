import '../styles/addUser.css';
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
export default function AddUser(props){
  const history = useHistory();
  const [userdata, setUserdata] = useState({});
  const {register, handleSubmit, formState : {errors}} = useForm();
  //lấy id nếu edit profile của user
  const {id} = useParams();
      useEffect(() => {
        try {
          // call dữ liệu từ api => chuyển dữ liệu sang duôi ".json" => truyền dữ liệu vào user
          fetch("https://6156c5bce039a0001725abbf.mockapi.io/users/" +id)
            .then((response) => response.json())
            .then((data) => setUserdata(data))
        } catch (error) {
          console.log(error);
        }
      }, []); 

  //nếu có id thì lấy user từ mảng users gán vào userEdit. nếu có id thì userEdit
  //lưu dữ liệu vào server và chuyển về list user
  const onSubmit = async (user) =>{
        if (id!=undefined) {
          try {
            // sử dụng hàm async  để chờ  call api hoàn thành 
              const response = await fetch('https://6156c5bce039a0001725abbf.mockapi.io/users/' + id, {
                method: 'PUT', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                //chuyển đổi dữ liệu sang String -> post dữ liệu lên server
                body: JSON.stringify(user),
              })
              //chờ sau khi post dữ liệu thành công sẽ trả về data
              const data = await response.json();
              props.onEdit(data);
              history.push("/users")
            } catch (error) {
              console.log(error)
            }
          }else{
            try {
              // sử dụng hàm async  để chờ  call api hoàn thành 
              const response = await fetch('https://6156c5bce039a0001725abbf.mockapi.io/users', {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                //chuyển đổi dữ liệu sang String -> post dữ liệu lên server
                body: JSON.stringify(user),
              })
              //chờ sau khi post dữ liệu thành công sẽ trả về data
              const data = await response.json();
              props.onAdd(data);
              history.push("/users")
            } catch (error) {
              console.log(error)
            }
          }
        };
    return (
      <div>
        <div className="container">
          <main>
            <div className="row g-5">
              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">User information</h4>
                <form
                  className="needs-validation"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="username" className="form-label">
                        Full Name
                      </label>
                      <div className="input-group has-validation">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Input your fullname"
                          defaultValue={userdata.fullname}
                          {...register("fullname", { required: true })}
                        />
                      </div>
                      {errors.fullname && (
                        <span>you must input your fullname</span>
                      )}
                    </div>
                    <div className="col-12">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <div className="input-group has-validation">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          defaultValue={userdata.username}
                          {...register("username", { required: true })}
                        />
                      </div>
                      {errors.username && (
                        <span>you must input your username</span>
                      )}
                    </div>
                    <div className="col-12">
                      <label htmlFor="username" className="form-label">
                        Password
                      </label>
                      <div className="input-group w-120">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Input password"
                          aria-label="Input group example"
                          aria-describedby="basic-addon1"
                          defaultValue={userdata.password}
                          {...register("password", { required: true })}
                        />
                        <span className="input-group-text" id="basic-addon1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-eye-slash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                          </svg>
                        </span>
                      </div>
                      {errors.password && (
                        <span>you must input your password</span>
                      )}
                    </div>
                    <div className="col-12">
                      <label htmlFor="phone" className="form-label">
                        Phone number
                      </label>
                      <div className="input-group has-validation">
                        <input
                          type="tel"
                          className="form-control"
                          id="address"
                          placeholder="0123456789"
                          defaultValue={userdata.phone}
                          {...register("phone", { required: true })}
                        />
                      </div>
                      {errors.phone && (
                        <span>you must input your phone number</span>
                      )}
                    </div>
                    <div className="col-12">
                      <label htmlFor="address" className="form-label">
                        Gender
                      </label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="true"
                          defaultChecked={userdata.gender ? true : false}
                          {...register("gender")}
                        />{" "}
                        Nam
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="false"
                          defaultChecked={userdata.gender ? false : true}
                          {...register("gender")}
                        />{" "}
                        Nữ
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <button className="w-50 btn btn-primary btn-lg" type="submit">
                    Confirm
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
}