import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../images/image1.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
// import ProjectList from "../ProjectPage/ProjectList";

let settings = {
  dots: true, //컨텐츠로 바로 이동이 가능한 버튼(false시 사라진다.)
  infinite: true, //컨텐츠 끝까지 갔을때 다음 콘텐츠로 가져와 반복
  speed: 500, //콘텐츠 이동속도
  slidesToShow: 1, //한 화면에 보이는 콘텐츠 개수
  slidesToScroll: 1, //한번에 넘어가는 콘텐츠 수
  cssEase: "linear",
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
};

function LandingPage() {
  const dispatch = useDispatch(); // ASK: 선언부 위치

  const isLoading = useSelector((state: RootState) => state.user!.isLoading);
  const [getlists, setlists] = useState(null);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [search, setSearch] = useState("");
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const { handleSubmit } = useForm();

  const slider = useRef(null);

  // const target = (tg) => {
  //   slider.current = tg;
  // };

  // const nextBtn = () => {
  //   slider.current.slickNext();
  // };
  // const prevBtn = () => {
  //   slider.current.slickPrev();
  // };

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBar, setToggleBar] = useState(true);
  const toggleChange = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };
  const onMenuClick = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  //modal창
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault(); // ASK: 붙인 이유?
    setSearch(e.target.value);
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODOS: 검색 결과 axios 통신
  };

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const navigate = useNavigate();

  // ASK: camelCase
  // const Id = useSelector((state: RootState) => state.user!.currentUser);
  // const data = useSelector((state: RootState) => state.project.project);

  let sessionStorge = window.sessionStorage;

  useEffect(() => {
    // TODOS: projectList Dispatch
  }, []);

  // const deletelist = (projectId: string) => {
  //   dispatch(deleteProject(projectId));
  // };

  // const logout = async () => {
  //   sessionStorge.removeItem("id");
  //   dispatch(logoutUser());
  //   navigate("/");
  // };

  return (
    <>
      <div className="header">
        <img src={image1} title="logo" />
        <nav>
          <ul>
            <li className="active">
              <a href="">Home</a>
            </li>
            <li>
              {/* <button onClick={logout}>Logout</button> */}
              {/* <button onClick={logout}>Logout</button> */}
              {/* ASK: 함수 선언 */}
            </li>
          </ul>
        </nav>
      </div>
      <h2>Search</h2>
      {/* <form onSubmit={(e) => onSearch(e)}> */}
      <form onSubmit={onSearch}>
        {/* ASK: 함수 선언 */}
        <input type="text" value={search} placeholder="검색어를 입력하세요" onChange={onChangeSearch} />
        <button type="submit">검색</button>
      </form>
      <Link style={{ float: "right" }} to="/ProjectPage">
        ADD Project
      </Link>

      {/*ADD Project 모달
    <button onClick={openModal}>Modal</button>
    <Modal open={modalOpen} close={closeModal} header="Modal heading">
      <label>삭제하시겠습니까?</label>
      <br/>
    </Modal>
    */}

      <div>
        {/* {data &&
          data.map((project) => (
            <ProjectList
              key={project.projectId}
              handleSubmit={handleSubmit}
              project={project}
              deletelist={deletelist}
            />
          ))} */}
      </div>
    </>
  );
}

export default LandingPage;
