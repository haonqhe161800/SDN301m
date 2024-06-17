import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../Image/wallpaperflare.com_wallpaper.jpg";
import backgroundImage1 from "../../Image/logo-dragon-2.png";
import login from "../../Image/login.png";
import { ToastContainer, toast } from "react-toastify";
import "../../Styles/styles.css";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, phone, password, confirmPassword } = formData;

    // Kiểm tra xem các trường bắt buộc đã được điền đầy đủ hay không
    if (!firstname || !lastname || !email || !phone || !password || !confirmPassword) {
      toast.error("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // Kiểm tra tính hợp lệ của email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Email không hợp lệ.");
      return;
    }

    // Kiểm tra tính hợp lệ của số điện thoại (ví dụ: độ dài tối thiểu là 10)
    if (phone.length < 10) {
      toast.error("Số điện thoại không hợp lệ.");
      return;
    }

    // Kiểm tra tính hợp lệ của mật khẩu (ví dụ: độ dài tối thiểu là 6)
    if (password.length < 6) {
      toast.error("Mật khẩu phải có ít nhất 6 ký tự.");
      return;
    }

    // Kiểm tra xác nhận mật khẩu
    if (password !== confirmPassword) {
      toast.error("Mật khẩu xác nhận không khớp.");
      return;
    }

    toast.success("Đăng ký thành công!");
  };


  return (
    <div className="all">
      <ToastContainer />
      <div className="full-screen-image">
        <img src={login} alt="img" />
      </div>

      <div className="logo">

        <Link to="/" className="flex items-center a">
          {/* <i className="fas fa-undo mr-2"></i> Quay lại trang chủ */}
          <img alt="logo" />
        </Link>
      </div>

      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2 className="mb-2 text-dark font-bold">Đăng Ký</h2>
          <p>
            Tại G1CV, chúng tôi không chỉ cung cấp công việc, chúng tôi
            tạo ra cơ hội nghề nghiệp.
          </p>
          <div className="side-by-side">
            <div className="form-group space-x-4a font-bold">
              <label htmlFor="lastname">Họ</label>
              <span className="text-red-500">*</span>
              <input
                type="text"
                className="form-control p-3"
                id="lastname"
                name="lastname"
                placeholder="Nhập họ của bạn"
                value={formData.lastname}
                onChange={handleChange}

              />
            </div>
            <div className="p-3"></div>
            <div className="form-group space-x-4a font-bold">
              <label htmlFor="firstname">Tên</label>
              <span className="text-red-500">*</span>
              <input
                type="text"
                className="form-control p-3"
                id="firstname"
                name="firstname"
                placeholder="Nhập họ và tên của bạn"
                value={formData.firstname}
                onChange={handleChange}

              />
            </div>
          </div>

          <div className="form-group a font-bold">
            <label htmlFor="email">Email</label>
            <span className="text-red-500">*</span>
            <input
              type="text"
              className="form-control p-3"
              id="email"
              name="email"
              placeholder="Nhập email của bạn"
              value={formData.email}
              onChange={handleChange}

            />
          </div>
          <div className="form-group a font-bold">
            <label htmlFor="phone">Số điện thoại</label>
            <span className="text-red-500">*</span>
            <input
              type="tel"
              className="form-control p-3"
              id="phone"
              name="phone"
              placeholder="Nhập số điện thoại của bạn"
              value={formData.phone}
              onChange={handleChange}

            />
          </div>
          <div className="form-group a font-bold">
            <label htmlFor="password">Mật Khẩu</label>
            <span className="text-red-500">*</span>
            <input
              type="password"
              className="form-control p-3"
              id="password"
              name="password"
              placeholder="**********"
              value={formData.password}
              onChange={handleChange}

            />
          </div>
          <div className="form-group a font-bold">
            <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
            <span className="text-red-500">*</span>
            <input
              type="password"
              className="form-control p-3"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="**********"
              value={formData.confirmPassword}
              onChange={handleChange}

            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white p-2 w-full rounded-md a"
          >
            Đăng Ký
          </button>
          <div className="mt-2 text-center">
            <p>
              Bạn đã có tài khoản{" "}
              <Link to="/dang-nhap" className="text-red-500 font-bold">
                Đăng nhập ngay
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
