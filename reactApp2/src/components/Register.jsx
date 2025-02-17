import { useState } from "react";
// 간단한 회원가입 폼
// 1. 이름 2. 생년월일 3. 국적 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  }); // 여러개의 state로 관리하던 data를 객체 형태로 묶어서 하나의 state로 관리

  //통합 eventHandler
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value, // 새로운 객체 만들면서 property의 key 자리에 변수 이름 적으면, property의 key로써 저장됨
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="">국가 선택</option>
          <option value="kr">한국</option>
          <option value="de">독일</option>
          <option value="fr"> 프랑스</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
    </div>
  );
};

export default Register;
