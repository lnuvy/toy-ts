import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function JoblistPage() {
  const sprintId = useParams();
  const navigate = useNavigate();
  const onClickSprint = () => {
    navigate(`/sprint/${sprintId}/joblist`);
  };
  return (
    <div>
      <button>이동</button>
    </div>
  );
}

export default JoblistPage;
