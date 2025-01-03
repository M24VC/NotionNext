/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* 底色 */
      .dark body {
        background-color: #121212;
        color: #ffffff;
      }

      /* 按钮样式 */
      button {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
        font-weight: bold;
        color: #ffffff;
        background-color: #007bff;
        border: 2px solid #0056b3; /* 新增边框 */
        border-radius: 0.5rem; /* 圆角优化 */
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }

      button:hover {
        background-color: #0056b3;
        color: #e0e0e0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 鼠标悬停时的阴影效果 */
      }

      /* 按钮禁用样式 */
      button:disabled {
        background-color: #6c757d;
        border-color: #5a6268;
        cursor: not-allowed;
        color: #cccccc;
      }

      /* 底部阴影 */
      .shadow-movie {
        box-shadow: 0 26px 58px 0 rgba(0, 0, 0, 0.22),
          0 5px 14px 0 rgba(0, 0, 0, 0.18);
      }

      /* 视频聚合走马灯 */
      .notion-carousel {
        width: 100%; /* 根据需要调整 */
        overflow: hidden;
      }

      .notion-carousel-wrapper .notion-carousel {
        display: none;
      }

      .notion-carousel-wrapper .notion-carousel.active {
        display: block;
      }

      .notion-carousel-route div {
        cursor: pointer;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        color: #007bff;
        transition: color 0.2s ease-in-out;
      }

      .notion-carousel-route div:hover {
        text-decoration: underline;
        color: #0056b3;
      }

      .notion-carousel div {
        height: auto !important;
        aspect-ratio: 2 / 1 !important;
      }
    `}</style>
  );
};

export { Style };
