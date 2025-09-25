import { useState } from "react";
import { useAuthStore } from "../stores/authStore";

export default function ChangePassword() {
  const error = useAuthStore((s) => s.error);
  const changingPassword = useAuthStore((s) => s.changingPassword);
  const changePassword = useAuthStore((s) => s.ChangePassword);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  if (!changingPassword) return null;

  const onSubmit = async (e) => {
    e.preventDefault();
    await changePassword(currentPassword, newPassword);
  };

  return (
    <form onSubmit={onSubmit} className="login-form">
      <input
        placeholder="현재 비밀번호"
        value={""}
        onChange={(e) => setCurrentPassword(e.target.value)}
        className="login-input"
      />

      <input
        placeholder="새 비밀번호 (6자 이상, 숫자 포함)"
        value={""}
        onChange={(e) => setNewPassword(e.target.value)}
        className="login-input"
      />

      <input
        placeholder="새 비밀번호 확인"
        value={""}
        onChange={(e) => setNewPassword(e.target.value)}
        className="login-input"
      />

      {error && <p className="login-error">{error}</p>}
      <button type="submit" className="login-button">
        변경하기
      </button>
    </form>
  );
}
