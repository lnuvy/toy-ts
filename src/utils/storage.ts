export const getStorage = () => {
  const session = window.sessionStorage;
  const userId = session.getItem("userId");

  // console.log("getStorage / userId 모양: ", userId);

  if (userId) {
    return userId; // 10.27 userId 스트링을 반환하는걸로 변경!
  } else {
    return false;
  }
};

export const setStorage = (id: string) => {
  const session = window.sessionStorage;

  // console.log("setStorage / userId 모양: ", id);

  session.setItem("userId", id);
};

export const removeStorage = () => {
  const session = window.sessionStorage;
  session.removeItem("userId");
};
