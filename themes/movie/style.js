/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* 全局样式 */
      .dark body {
        background-color: #121212;
        color: #ffffff;
      }

      /* 按钮组样式 */
      .button-group {
        display: flex; /* 横向排列 */
        gap: 1rem; /* 按钮间距 */
        justify-content: flex-start; /* 从左开始排列 */
        padding: 1rem 0;
        background-color: #1a1a1a; /* 按钮组底色 */
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 背景阴影 */
      }

      /* 按钮样式 */
      button {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
        font-weight: bold;
        color: #ffffff;
        background-color: #007bff;
        border: 2px solid #0056b3;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* 按钮浮起效果 */
      }

      button:hover {
        background-color: #0056b3;
        color: #e0e0e0;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* 鼠标悬停更强的浮起效果 */
      }

      button:active {
        background-color: #003f7f;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2); /* 按下时缩小阴影 */
        transform: translateY(2px); /* 模拟按下的凹陷效果 */
      }

      button:disabled {
        background-color: #6c757d;
        border-color: #5a6268;
        cursor: not-allowed;
        color: #cccccc;
        box-shadow: none;
      }

      /* 播放器样式 */
      .player {
        background-color: #000000;
        color: #ffffff;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      }

      .player .title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      .player .description {
        font-size: 1rem;
        color: #cccccc;
      }
    `}</style>
  );
};

export { Style };
