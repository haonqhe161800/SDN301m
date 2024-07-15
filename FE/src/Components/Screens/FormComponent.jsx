import * as React from "react";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaStar } from "react-icons/fa";

function PersonalInfo({ iconSrc, label, placeholder }) {
  return (
    <div className="flex gap-2.5 mt-6 text-base tracking-normal">
      <img loading="lazy" src={iconSrc} alt="" className="shrink-0 my-auto w-5 aspect-square" />
      <div className="flex gap-5 justify-between">
        <div className="my-auto font-bold text-white">{label}:</div>
        <input
          className="justify-center p-2.5 mt-4 text-base leading-6 bg-white rounded-md text-neutral-500"
          placeholder={placeholder}
          aria-label={placeholder}
        />
      </div>
    </div>
  );
}

function SkillRating({ skill, rating, onRatingChange }) {
  const handleRatingClick = (index) => {
    onRatingChange(skill, index);
  };

  return (
    <div className="flex gap-5 justify-between py-2 pr-2 mt-5 text-base font-bold tracking-normal text-white">
      <div className="flex gap-5 justify-between">
        <div>{skill}:</div>
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              size={25}
              className={`cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-500'}`}
              onClick={() => handleRatingClick(index + 1)}
            />
          ))}
        </div>
      </div>
      <FaStar className="shrink-0 my-auto w-5 aspect-square" />
    </div>
  );
}

function SkillInput() {
  return (
    <div className="flex gap-5 justify-between mt-5 w-full">
      <input
        className="justify-center items-start px-4 py-2 text-base tracking-normal bg-white rounded-md text-neutral-700"
        placeholder="Tên kỹ năng"
      />
      <input
        className="justify-center items-start px-4 py-2 text-base tracking-normal bg-white rounded-md text-neutral-700"
        placeholder="Độ thành thạo"
      />
    </div>
  );
}

function ProjectDetails() {
  return (
    <>
      <div className="flex gap-2 mt-7 text-base font-bold text-stone-900">
        <div className="flex gap-5 p-2.5">
          <div>2/2022 - 3/2022</div>
          <div>//</div>
          <div>Endia Group Branding</div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0312a6ecac451537fc404d123986882602872a2b42969066f530cfc8cf475da5?apiKey=0f44d02fac5e4a888ebe9441c68d566c&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
      </div>
      <div className="mt-2.5 ml-2.5 text-sm leading-5 text-neutral-700">Khách hàng: Endia Group</div>
      <div className="mt-4 ml-2.5 text-sm leading-5 text-neutral-700">Số lượng người tham gia: 2</div>
      <div className="self-stretch mt-4 ml-2.5 text-sm leading-6 text-neutral-700 max-md:max-w-full">
        Giới thiệu: Tham gia lên ý tưởng thiết kế nhận diện, tạo hình key visual. Thiết kế các ấn phẩm truyền thông đi kèm, thiết kế hệ thống branding guideline, ấn phẩm văn phòng.
      </div>
    </>
  );
}

function FormComponent() {
  const [skills, setSkills] = useState([{ skill: "Làm việc nhóm", rating: 0 }]);
  const [achievements, setAchievements] = useState(["Sinh viên xuất sắc Đại học FPT"]);
  const [projects, setProjects] = useState([<ProjectDetails key={0} />]);

  const handleAddSkill = () => {
    setSkills([...skills, { skill: "", rating: 0 }]);
  };

  const handleRatingChange = (skill, rating) => {
    setSkills(skills.map(s => (s.skill === skill ? { ...s, rating } : s)));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        document.getElementById("avatar-image").src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadPDF = () => {
    const input = document.getElementById("form-container");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save("form.pdf");
    });
  };

  const handleSave = () => {
    toast.success("Lưu thành công!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleAddAchievement = () => {
    setAchievements([...achievements, ""]);
  };

  const handleAddProject = () => {
    setProjects([...projects, <ProjectDetails key={projects.length} />]);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full max-md:max-w-full" id="form-container">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <img
                id="avatar-image"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb2c793cb5ff4c73174de7585178726328a61bb2e3aa3de4c69d497abbec6f5?apiKey=0f44d02fac5e4a888ebe9441c68d566c&"
                alt="Personal profile image"
                className="self-center max-w-full rounded-full aspect-[0.96] w-[275px] cursor-pointer CustomizeAvatar"
                onClick={() => document.getElementById("avatar-upload").click()}
              />
              <section className="flex flex-col px-11 py-16 mt-8 bg-orange-600 rounded-xl max-md:px-5 max-md:max-w-full">
                <div className="text-xl font-bold tracking-wide text-white">Thông tin cá nhân</div>
                <PersonalInfo
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/85613166a3073f11a6719f592a927b5a6ab3677b508cf694b2705ebdf2325014?apiKey=0f44d02fac5e4a888ebe9441c68d566c&"
                  label="Email"
                  placeholder="Nhập email"
                />
                <PersonalInfo
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c84bd8988e4530a1f0372585279078d3ba66a51b39b4a4e9ec1ee60016fff743?apiKey=0f44d02fac5e4a888ebe9441c68d566c&"
                  label="Số điện thoại"
                  placeholder="Nhập số điện thoại"
                />
                <PersonalInfo
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ae832a8d4036f18ecaae2a3a52c56c8d24eef88d61c6d8f4d2809e806e4568e6?apiKey=0f44d02fac5e4a888ebe9441c68d566c&"
                  label="Địa chỉ"
                  placeholder="Nhập địa chỉ"
                />
                <div className="mt-14 text-xl font-bold tracking-wide text-white max-md:mt-10">Các kỹ năng</div>
                {skills.map((skill, index) => (
                  <SkillRating
                    key={index}
                    skill={skill.skill}
                    rating={skill.rating}
                    onRatingChange={handleRatingChange}
                  />
                ))}
                <SkillInput />
                <div className="flex gap-5 justify-between mt-8 font-bold text-white">
                  <div className="flex flex-col">
                    <div className="flex gap-1.5 justify-center px-2.5 py-1.5 text-sm leading-6 rounded-lg bg-indigo-950 cursor-pointer dynamic" onClick={handleAddSkill}>
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d0e8c0066156f30e89f08c58850452108466dbffbd247da3a61e6325f3c7e9f?apiKey=0f44d02fac5e4a888ebe9441c68d566c&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                      <div>Thêm kỹ năng</div>
                    </div>
                    <div className="mt-14 text-xl tracking-wide max-md:mt-10">Chứng chỉ</div>
                    {achievements.map((achievement, index) => (
                      <div key={index} className="mt-6 text-base tracking-normal text-white">{achievement}</div>
                    ))}
                  </div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b151b939144091e3dc81e902933ef0179c4a45397cc30d06a2627768430369bd?apiKey=0f44d02fac5e4a888ebe9441c68d566c&" alt="" className="shrink-0 self-end mt-32 w-5 aspect-square max-md:mt-10" />
                </div>
                <input
                  className="justify-center items-start px-4 py-2 mt-5 max-w-full text-base tracking-normal bg-white rounded-md text-neutral-700 w-[365px] max-md:pr-5 max-md:mr-1.5"
                  placeholder="Tên chứng chỉ"
                />
                <div className="justify-center self-start px-11 py-1.5 mt-5 text-sm font-bold leading-6 text-red-500 whitespace-nowrap bg-white rounded-lg border border-red-500 border-solid max-md:px-5">
                  Hủy
                </div>
                <div className="flex gap-5 justify-between mt-16 font-bold max-md:mt-10 max-md:mr-2">
                  <div className="flex flex-col">
                    <div className="text-xl tracking-wide text-white">Danh hiệu và giải thưởng</div>
                    {achievements.map((achievement, index) => (
                      <div key={index} className="mt-6 text-base tracking-normal text-white">{achievement}</div>
                    ))}
                  </div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b151b939144091e3dc81e902933ef0179c4a45397cc30d06a2627768430369bd?apiKey=0f44d02fac5e4a888ebe9441c68d566c&" alt="" className="shrink-0 self-end mt-12 w-5 aspect-square max-md:mt-10" />
                </div>
                <div className="flex gap-1.5 justify-center self-start px-2.5 py-1.5 mt-7 mb-72 text-sm font-bold leading-6 text-white rounded-lg bg-indigo-950 max-md:mb-10 cursor-pointer dynamic" onClick={handleAddAchievement}>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d0e8c0066156f30e89f08c58850452108466dbffbd247da3a61e6325f3c7e9f?apiKey=0f44d02fac5e4a888ebe9441c68d566c&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                  <div>Thêm danh hiệu</div>
                </div>
              </section>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-2 max-md:mt-7 max-md:max-w-full">
              <section className="flex flex-col items-start px-10 py-5 rounded-xl bg-indigo-950 max-md:px-5 max-md:max-w-full">
                <div className="text-3xl font-bold tracking-wide text-white">Họ và tên</div>
                <input
                  className="justify-center p-2.5 mt-4 text-base leading-6 bg-white rounded-md text-neutral-500"
                  placeholder="Vị trí ứng tuyển"
                  aria-label="Vị trí ứng tuyển"
                />
              </section>
              <section className="flex flex-col px-7 py-7 mt-5 rounded-xl bg-zinc-100 max-md:px-5 max-md:max-w-full">
                <div className="text-2xl font-bold tracking-wide leading-6 text-black max-md:max-w-full">Mô tả bản thân</div>
                <textarea
                  className="justify-center p-2.5 mt-5 text-base leading-6 bg-white rounded-md text-neutral-500 max-md:max-w-full"
                  placeholder="Mô tả về bản thân bạn"
                  aria-label="Mô tả về bản thân bạn"
                />
              </section>
              <section className="flex flex-col items-start px-7 pt-5 pb-10 mt-5 rounded-xl bg-zinc-100 max-md:px-5 max-md:max-w-full">
                <div className="self-stretch text-2xl font-bold tracking-wide text-stone-900 max-md:max-w-full">Mục tiêu nghề nghiệp</div>
                <textarea
                  className="justify-center self-stretch p-2.5 mt-4 text-base leading-6 bg-white rounded-md text-neutral-500 max-md:max-w-full"
                  placeholder="Mục tiêu nghề nghiệp của bạn, bao gồm cả ngắn hạn và dài hạn"
                  aria-label="Mục tiêu nghề nghiệp của bạn, bao gồm cả ngắn hạn và dài hạn"
                />
                <div className="shrink-0 self-stretch mt-4 h-px bg-gray-400 border border-gray-400 border-solid max-md:max-w-full" />
                <div className="self-stretch mt-14 text-2xl font-bold tracking-wide text-stone-900 max-md:mt-10 max-md:max-w-full">Học vấn</div>
                <div className="flex gap-5 justify-between items-center mt-6 max-w-full w-[486px] max-md:flex-wrap">
                  <div className="self-stretch my-auto text-base font-bold text-stone-900">2/2022 - 3/2022</div>
                  <div className="self-stretch my-auto text-sm leading-5 text-neutral-700">Sinh viên trường Đại học FPT</div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0312a6ecac451537fc404d123986882602872a2b42969066f530cfc8cf475da5?apiKey=0f44d02fac5e4a888ebe9441c68d566c&" alt="" className="shrink-0 self-stretch w-5 aspect-square" />
                </div>
                <div className="flex gap-5 self-stretch mt-5 text-base leading-6 text-neutral-500 max-md:flex-wrap">
                  <div className="flex gap-2.5 justify-center max-md:flex-wrap">
                    <div className="flex gap-2.5 justify-center p-2.5 bg-white rounded-md">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9618c9b842f11d864588fc30eb1abbaeca31bf0255fb23622947e96c92d540b?apiKey=0f44d02fac5e4a888ebe9441c68d566c&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                      <div>Bắt đầu</div>
                    </div>
                    <div className="my-auto">-</div>
                    <div className="flex gap-2.5 justify-center p-2.5 bg-white rounded-md">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9618c9b842f11d864588fc30eb1abbaeca31bf0255fb23622947e96c92d540b?apiKey=0f44d02fac5e4a888ebe9441c68d566c&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                      <div>Kết thúc</div>
                    </div>
                    <div className="my-auto">//</div>
                    <div className="justify-center p-2.5 bg-white rounded-md">Ngành học</div>
                  </div>
                  <div className="justify-center px-4 py-2.5 bg-white rounded-md">Tên trường học</div>
                </div>
                <div className="shrink-0 self-stretch mt-24 h-px bg-gray-400 border border-gray-400 border-solid max-md:mt-10 max-md:max-w-full" />
                <div className="mt-14 ml-2.5 text-2xl font-bold tracking-wide text-stone-900 max-md:mt-10">Kinh nghiệm làm việc</div>
                <div className="flex gap-4 mt-3.5 text-base font-bold text-stone-900">
                  <div className="flex gap-px justify-between p-2.5">
                    <div>2/2022 - 3/2022</div>
                    <div>//</div>
                    <div>Thực tập sinh UX - UI</div>
                  </div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0312a6ecac451537fc404d123986882602872a2b42969066f530cfc8cf475da5?apiKey=0f44d02fac5e4a888ebe9441c68d566c&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                </div>
                <div className="mt-2.5 ml-2.5 text-sm font-bold leading-5 text-neutral-700">Tên công ty: Wecan Group</div>
                <div className="self-stretch mt-3.5 ml-2.5 text-sm leading-6 text-neutral-700 max-md:max-w-full">
                  Mô tả kinh nghiệm: Tham gia lên ý tưởng thiết kế nhận diện, tạo hình key visual. Thiết kế các ấn phẩm truyền thông đi kèm, thiết kế hệ thống branding guideline, ấn phẩm văn phòng.
                </div>
                <div className="flex gap-5 justify-center mt-6 ml-2.5 text-base leading-6 text-neutral-500 max-md:flex-wrap">
                  <div className="flex gap-2.5 justify-center">
                    <div className="flex gap-2.5 justify-center p-2.5 bg-white rounded-md">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9618c9b842f11d864588fc30eb1abbaeca31bf0255fb23622947e96c92d540b?apiKey=0f44d02fac5e4a888ebe9441c68d566c&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                      <div>Bắt đầu</div>
                    </div>
                    <div className="my-auto">-</div>
                    <div className="flex gap-2.5 justify-center p-2.5 bg-white rounded-md">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9618c9b842f11d864588fc30eb1abbaeca31bf0255fb23622947e96c92d540b?apiKey=0f44d02fac5e4a888ebe9441c68d566c&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                      <div>Kết thúc</div>
                    </div>
                  </div>
                  <div className="my-auto">//</div>
                  <div className="justify-center p-2.5 bg-white rounded-md">Vị trí công việc</div>
                </div>
                <textarea
                  className="justify-center self-stretch p-2.5 mt-5 ml-2.5 text-base leading-6 bg-white rounded-md text-neutral-500 max-md:pr-5 max-md:max-w-full"
                  placeholder="Mô tả kinh nghiệm làm việc của bạn"
                  aria-label="Mô tả kinh nghiệm làm việc của bạn"
                />
                <div className="justify-center self-stretch p-2.5 mt-5 ml-2.5 text-base leading-6 bg-white rounded-md text-neutral-500 max-md:max-w-full">
                  Tên công ty
                </div>
                <div className="justify-center px-11 py-1.5 mt-5 ml-2.5 text-sm font-bold leading-6 text-red-500 whitespace-nowrap rounded-lg border border-red-500 border-solid max-md:px-5">
                  Hủy
                </div>
                <div className="shrink-0 mt-7 ml-2.5 max-w-full h-px bg-gray-400 border border-gray-400 border-solid w-[604px]" />
                <div className="mt-14 ml-2.5 text-2xl font-bold tracking-wide text-stone-900 max-md:mt-10">Dự án</div>
                {projects}
                <div className="flex gap-1.5 justify-center px-2.5 py-1.5 mt-6 text-sm font-bold leading-6 text-white rounded-lg bg-indigo-950 cursor-pointer dynamic" onClick={handleAddProject}>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d0e8c0066156f30e89f08c58850452108466dbffbd247da3a61e6325f3c7e9f?apiKey=0f44d02fac5e4a888ebe9441c68d566c&" alt="" className="shrink-0 my-auto w-5 aspect-square" />
                  <div>Thêm dự án</div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 self-end mt-10 text-base tracking-normal leading-6 text-center text-white max-md:flex-wrap">
        <button className="grow justify-center px-8 py-4 rounded bg-indigo-950 w-fit max-md:px-5" onClick={handleDownloadPDF}>Tải xuống dưới dang PDF</button>
        <button className="grow justify-center px-8 py-4 bg-orange-600 rounded w-fit max-md:px-5" onClick={handleSave}>Lưu hồ sơ ứng tuyển</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default FormComponent;
