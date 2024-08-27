import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUserField, registerUser } from "../store/userSlice";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // Redux 상태에 데이터를 저장
    Object.keys(data).forEach((key) => {
      dispatch(setUserField({ field: key, value: data[key] }));
    });

    // 사용자 등록
    dispatch(registerUser());
    alert("회원가입이 완료되었습니다.");
    console.log("data", data);
  };

  const password = watch("password"); // 비밀번호 확인을 위한 비밀번호 참조

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>이메일:</label>
        <input
          type="email"
          {...register("email", {
            required: "이메일은 필수 입력 항목입니다.",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "유효한 이메일을 입력해주세요.",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>비밀번호:</label>
        <input
          type="password"
          {...register("password", {
            required: "비밀번호는 필수 입력 항목입니다.",
            minLength: {
              value: 6,
              message: "비밀번호는 최소 6자 이상이어야 합니다.",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>비밀번호 확인:</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "비밀번호 확인은 필수 입력 항목입니다.",
            validate: (value) =>
              value === password || "비밀번호가 일치하지 않습니다.",
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <div>
        <label>닉네임:</label>
        <input
          type="text"
          {...register("nickname", {
            required: "닉네임은 필수 입력 항목입니다.",
          })}
        />
        {errors.nickname && <p>{errors.nickname.message}</p>}
      </div>

      <div>
        <label>나이:</label>
        <input
          type="number"
          {...register("age", {
            valueAsNumber: true,
            validate: (value) => value > 0 || "나이는 양수이어야 합니다.",
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <div>
        <label>성별:</label>
        <select {...register("gender")}>
          <option value="">선택 안 함</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
      </div>

      <div>
        <label>주소:</label>
        <input
          type="text"
          {...register("address", { required: "주소는 필수 입력 항목입니다." })}
        />
        {errors.address && <p>{errors.address.message}</p>}
      </div>

      <button type="submit">회원가입</button>
    </form>
  );
};

export default Register;
