import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { Wrapper } from "./Styles";

function LandingPage() {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state: RootState) => state.user!.isLoading);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBar, setToggleBar] = useState(true);
  // const toggleChange = () => {
  //   setToggleMenu(!toggleMenu);
  //   setToggleBar(!toggleBar);
  // };
  // const onMenuClick = () => {
  //   setToggleMenu(!toggleMenu);
  //   setToggleBar(!toggleBar);
  // };

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  //modal창
  // const [modalOpen, setModalOpen] = useState(false);
  // const openModal = () => {
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  // const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODOS: 검색 결과 axios 통신
  };

  useEffect(() => {
    // TODOS: projectList Dispatch
  }, []);

  return (
    <Wrapper>
      <h2>Search</h2>
      {/* <form onSubmit={(e) => onSearch(e)}> */}
      <form onSubmit={onSearch}>
        {/* ASK: 함수 선언 */}
        {/* <input type="text" value={search} placeholder="검색어를 입력하세요" onChange={onChangeSearch} />
        <button type="submit">검색</button> */}
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
    </Wrapper>
  );
}

export default LandingPage;
