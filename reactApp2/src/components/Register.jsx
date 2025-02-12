import { useState } from "react";
// 간단한 회원가입 폼
// 1. 이름 2. 생년월일 3. 국적 4. 자기소개

const Register = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState();
  const [country, setCountry] = useState();
  const [bio, setBio] = useState();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"이름"} />
      </div>
      <div>
        <input value={birth} type="date" onChange={onChangeBirth} />
      </div>
      <div>
        <select onChange={onChangeCountry}>
          <option value="">국가 선택</option>
          <option value="kr">한국</option>
          <option value="de">독일</option>
          <option value="fr"> 프랑스</option>
        </select>
      </div>

      <div>
        <textarea value={bio} onChange={onChangeBio} />
      </div>
    </div>
  );
};

export default Register;
