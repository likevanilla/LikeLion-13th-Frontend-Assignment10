import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  error: null,
  changingPassword: false,

  login: async (username, password) => {
    set({ error: null });
    await new Promise((r) => setTimeout(r, 500));

    if (!username || !password) {
      set({ error: "아이디와 비밀번호를 모두 입력해주세요." });
      return false;
    }

    if (password.length < 6) {
      set({ error: "비밀번호는 최소 6자 이상이어야 합니다." });
      return false;
    }

    if (!/\d/.test(password)) {
      set({ error: "비밀번호에는 최소 한 개의 숫자가 포함되어야 합니다." });
      return false;
    }

    set({
      isLoggedIn: true,
      user: { username },
      password: { password },
      error: null,
    });
    return true;
  },

  logout: () =>
    set({
      isLoggedIn: false,
      user: null,
      error: null,
      changingPassword: false,
    }),

  changePassword: async (password, newPassword) => {
    set({
      isLoggedIn: true,
      error: null,
      changingPassword: true,
    });
    // 마지막에 isLoggedIn이랑 changePassword set안 해도 되는지 확인해보기

    await await new Promise((r) => setTimeout(r, 500));

    if (newPassword.length < 6) {
      set({ error: "비밀번호는 최소 6자 이상이어야 합니다." });
      return false;
    }

    if (!/\d/.test(newPassword)) {
      set({ error: "비밀번호에는 최소 한 개의 숫자가 포함되어야 합니다." });
      return false;
    }

    set({ isLoggedIn: true, password: { newPassword }, error: null });
    return true;
  },

  setChangingPassword: () => set({ changingPassword: true }),
}));
