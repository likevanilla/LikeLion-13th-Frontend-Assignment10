import LoginForm from "../components/LoginForm";
import LoginStatus from "../components/LoginStatus";
import { useAuthStore } from "../stores/authStore";
import "./Home.css";

export default function Home() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const changingPassword = useAuthStore((s) => s.changingPassword);

  return (
    <>
      <div className="home-page">
        {!changingPassword && <h1 className="home-title">홈</h1>}
        <LoginStatus />
        {!isLoggedIn && <LoginForm />}
        {isLoggedIn && <p className="home-text">로그인 완료!</p>}
        {isLoggedIn && (
          <button onClick={changePassword} className="change-password">
            비밀번호 변경
          </button>
        )}
      </div>
    </>
  );
}
