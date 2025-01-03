'use client';

// 导入依赖
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';
import { useGlobal } from '../context/global'; // 假设 useGlobal 是从 context 文件中导入
import { HomeBackgroundImage, Header, Footer, AlgoliaSearchModal, JumpToTopButton } from './components';
import { siteConfig, loadWowJS } from './utils';
import { Style } from './style';
import { ThemeGlobalMovie } from '../context/themeGlobalMovie';

// 按钮组和播放器模块
const PlayerWithControls = () => {
  return (
    <>
      <div className="button-group">
        <button>播放</button>
        <button>暂停</button>
        <button>重播</button>
      </div>
      <div className="player">
        <div className="title">播放器标题</div>
        <div className="description">这是播放器的描述内容。</div>
      </div>
    </>
  );
};

/**
 * 基础布局框架
 * @param {object} props
 * @returns {JSX.Element}
 */
const LayoutBase = (props) => {
  const { children, slotTop } = props;
  const { onLoading, fullWidth } = useGlobal();
  const collapseRef = useRef(null);
  const router = useRouter();
  const searchModal = useRef(null);
  const [expandMenu, updateExpandMenu] = useState(false);

  useEffect(() => {
    loadWowJS();
  }, []);

  // 首页背景图逻辑
  const isHomePage = router?.route === '/';
  const homeBackground = isHomePage
    ? siteConfig('MOVIE_HOME_BACKGROUND', null)
    : null;

  return (
    <ThemeGlobalMovie.Provider
      value={{ searchModal, expandMenu, updateExpandMenu, collapseRef }}>
      <div
        id="theme-movie"
        className={`${siteConfig('FONT_STYLE')} dark:text-gray-300 duration-300 transition-all bg-white dark:bg-[#2A2A2A] scroll-smooth min-h-screen flex flex-col justify-between`}>
        <Style />

        {/* 页头 */}
        <Header {...props} />
        {homeBackground && <HomeBackgroundImage />}

        {/* 主体 */}
        <div id="container-inner" className="w-full relative flex-grow z-10">
          <div
            id="container-wrapper"
            className={`relative mx-auto justify-center md:flex items-start ${
              JSON.parse(siteConfig('LAYOUT_SIDEBAR_REVERSE')) ? 'flex-row-reverse' : ''
            }`}>
            {/* 按钮组和播放器 */}
            <div className={`w-full px-6 ${fullWidth ? 'max-w-full' : 'max-w-screen-lg'}`}>
              <Transition
                show={!onLoading}
                appear={true}
                enter="transition ease-in-out duration-700 transform order-first"
                enterFrom="opacity-0 translate-y-16"
                enterTo="opacity-100"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-16"
                unmount={false}>
                {slotTop}

                {/* 播放器与控制按钮 */}
                <PlayerWithControls />

                {children}
              </Transition>
            </div>
          </div>
        </div>

        {/* 页脚 */}
        <Footer {...props} />

        {/* 搜索框 */}
        <AlgoliaSearchModal cRef={searchModal} {...props} />

        {/* 回顶按钮 */}
        <div className="fixed right-4 bottom-4 z-10">
          <JumpToTopButton />
        </div>
      </div>
    </ThemeGlobalMovie.Provider>
  );
};

export {
  LayoutBase,
  // 省略其他导出
};
