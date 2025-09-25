import { useState } from "react";
import { useAuthStore } from "../stores/authStore";

export default function ChangePassword() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  // const user = useAuthStore((s) => s.user);
  const error = useAuthStore((s) => s.error);
  const changingPassword = useAuthStore((s) => s.changingPassword);

  const [password, setPassword] = useState(changingPassword.password);

  if (!isLoggedIn && !changingPassword) return null;

  const onSubmit = async (e) => {
    e.preventDefault();
    await changingPassword(password);
  };

  return (
    <form onSubmit={onSubmit} className="login-form">
      <h2 className="login-title">비밀번호 변경</h2>

      <input placeholder="현재 비밀번호" className="login-input" />

      <input
        placeholder="새 비밀번호 (6자 이상, 숫자 포함)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />

      <input
        placeholder="새 비밀번호 확인"
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />

      {error && <p className="login-error">{error}</p>}
      <button type="submit" className="login-button">
        변경하기
      </button>
    </form>
  );
}
