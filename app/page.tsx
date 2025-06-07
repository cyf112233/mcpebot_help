'use client';

import { FaServer, FaUser, FaComments, FaImage, FaGlobe, FaChartLine, FaBook, FaHeartbeat, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 处理锚点跳转
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 60; // 调整偏移量为60像素
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* 顶部导航栏 */}
      <nav className="bg-gray-800 shadow-lg border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mr-4 text-gray-300 hover:text-white focus:outline-none"
                aria-label="打开目录"
              >
                {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              </button>
              <FaServer className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
              <span className="ml-2 text-lg sm:text-xl font-bold">MCPEBot 服务器说明文档</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 侧边目录 */}
      <div className={`fixed inset-y-0 left-0 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 w-64 bg-gray-800 shadow-lg`}>
        <div className="h-full overflow-y-auto py-4">
          <div className="px-4 space-y-2">
            <h3 className="text-lg font-semibold text-green-500 mb-4">目录</h3>
            <a href="#server-info" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg" onClick={handleAnchorClick}>
              服务器信息
            </a>
            <a href="#account-system" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg" onClick={handleAnchorClick}>
              账号系统
            </a>
            <a href="#chat-rules" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg" onClick={handleAnchorClick}>
              群聊规则
            </a>
            <a href="#image-plugin" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg" onClick={handleAnchorClick}>
              贴图插件使用说明
            </a>
            <a href="#enchant-plugin" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg" onClick={handleAnchorClick}>
              附魔分解插件使用教程
            </a>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* 服务器信息卡片 */}
        <div id="server-info" className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-8 border border-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-green-500 mb-3 sm:mb-4">服务器信息</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gray-700 p-3 sm:p-4 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-2">服务器地址</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                  <span className="break-all">Java版: mcpebot.com:20016</span>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                    <span className="break-all">基岩版: mcpebot.com</span>
                  </div>
                  <div className="ml-4 mt-1">
                    <span className="text-white">端口: 20016</span>
                  </div>
                  <div className="ml-4 mt-2">
                    <a 
                      href="minecraft://?addExternalServer=mcpebot|mcpebot.com:20016" 
                      target="_self"
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                    >
                      <FaServer className="mr-1" />
                      点击快速添加服务器到基岩版
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-700 p-3 sm:p-4 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-2">相关链接</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-center">
                  <FaGlobe className="text-green-500 mr-2 flex-shrink-0" />
                  <a href="https://www.mcpebot.com/" target="_self" className="text-blue-400 hover:text-blue-300 break-all">官方网站</a>
                </li>
                <li className="flex items-center">
                  <FaHeartbeat className="text-green-500 mr-2 flex-shrink-0" />
                  <a href="https://status.mcpebot.com/" target="_self" className="text-blue-400 hover:text-blue-300 break-all">服务器监控</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 账号系统 */}
        <div id="account-system" className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-8 border border-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-green-500 mb-3 sm:mb-4">账号系统</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gray-700 p-3 sm:p-4 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-2">注册</h3>
              <CodeBlock
                title="注册命令"
                code="/register 密码 再次输入密码"
              />
              <p className="text-gray-300 mt-2 text-sm sm:text-base">注意：密码之间需要输入空格</p>
            </div>
            <div className="bg-gray-700 p-3 sm:p-4 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-2">登录</h3>
              <CodeBlock
                title="登录命令"
                code="/login 密码"
              />
            </div>
          </div>
        </div>

        {/* 群聊规则 */}
        <div id="chat-rules" className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-8 border border-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-green-500 mb-3 sm:mb-4">群聊规则</h2>
          <div className="bg-gray-700 p-3 sm:p-4 rounded-lg">
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <span>进群后请将群聊备注名修改为：玩家名称-正版/离线</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <span>基岩版玩家请在备注后添加"基岩版"</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <span>示例：Xiaobumoxie-正版</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 贴图插件使用说明 */}
        <div id="image-plugin" className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-8 border border-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-green-500 mb-3 sm:mb-4">贴图插件使用说明</h2>
          <div className="bg-gray-700 p-3 sm:p-4 rounded-lg">
            <p className="text-gray-300 mb-4">贴图插件可以通过创建或获取两种方式生成贴图，两种方式都需要消耗地图：</p>
            <p className="text-gray-300 mb-4 text-sm">注意：每个玩家创建的贴图ID都是独立的，不会与其他玩家的贴图ID冲突。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-2">创建贴图</h3>
                <CodeBlock
                  title="创建命令"
                  code="/if create (贴图ID) (图床链接) (方块宽度) (方块高度) [combined]"
                />
                <p className="text-gray-300 mt-2 text-sm sm:text-base">适用于首次创建新的贴图</p>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">添加 combined 参数可获得小纸条形式的地图</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-2">获取贴图</h3>
                <CodeBlock
                  title="获取命令"
                  code="/if get (贴图ID) [combined]"
                />
                <p className="text-gray-300 mt-2 text-sm sm:text-base">适用于获取已创建的贴图</p>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">添加 combined 参数可获得小纸条形式的地图</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-green-400 mb-2 text-sm sm:text-base">贴图展示步骤：</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-green-400 mb-2 text-sm">小纸条形式：</h5>
                  <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm sm:text-base">
                    <li>使用展示框摆出所需的长宽</li>
                    <li>右键将小纸条放入展示框</li>
                  </ol>
                </div>
                <div>
                  <h5 className="text-green-400 mb-2 text-sm">散装地图形式：</h5>
                  <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm sm:text-base">
                    <li>使用展示框摆出所需的长宽</li>
                    <li>将地图一张一张放入展示框</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 附魔分解插件使用教程 */}
        <div id="enchant-plugin" className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-8 border border-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-green-500 mb-3 sm:mb-4 flex items-center">
            <FaBook className="mr-2" />
            附魔分解插件使用教程
          </h2>
          <div className="bg-gray-700 p-3 sm:p-4 rounded-lg">
            <p className="text-gray-300 mb-4">在铁砧界面中：</p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-700/50 p-3 rounded-lg flex-1">
                  <h3 className="text-green-400 font-semibold mb-4">提取武器附魔</h3>
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-600 w-full max-w-md">
                      <div className="grid grid-cols-5 gap-4">
                        <div className="bg-gray-700 p-3 rounded border border-gray-600 flex items-center justify-center group relative cursor-pointer" tabIndex={0} role="button" aria-label="查看物品信息">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-gray-600 rounded mb-2 flex items-center justify-center overflow-hidden">
                              <img src="/images/书.png" alt="书" className="w-full h-full object-contain" />
                            </div>
                          </div>
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 transition-opacity whitespace-nowrap">
                            书
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="relative w-8 h-8">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-1 bg-gray-400"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-6 bg-gray-400"></div>
                          </div>
                        </div>
                        <div className="bg-gray-700 p-3 rounded border border-gray-600 flex items-center justify-center group relative cursor-pointer" tabIndex={0} role="button" aria-label="查看物品信息">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-gray-600 rounded mb-2 flex items-center justify-center overflow-hidden">
                              <img src="/images/附魔钻石剑.gif" alt="钻石剑" className="w-full h-full object-contain" />
                            </div>
                          </div>
                          <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 transition-opacity whitespace-nowrap">
                            <div>钻石剑</div>
                            <div className="mt-1"></div>
                            <div>耐久III</div>
                            <div>锋利V</div>
                            <div>经验修补</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="relative w-8 h-8">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-1 bg-gray-400"></div>
                            <div className="absolute top-1/2 left-1/2 translate-x-2 -translate-y-1/2 w-3 h-1 bg-gray-400 transform rotate-135 origin-left"></div>
                            <div className="absolute top-1/2 left-1/2 translate-x-2 -translate-y-1/2 w-3 h-1 bg-gray-400 transform -rotate-135 origin-left"></div>
                          </div>
                        </div>
                        <div className="bg-gray-700 p-3 rounded border border-gray-600 flex items-center justify-center group relative cursor-pointer" tabIndex={0} role="button" aria-label="查看物品信息">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-gray-600 rounded mb-2 flex items-center justify-center overflow-hidden">
                              <img src="/images/附魔书.gif" alt="附魔书" className="w-full h-full object-contain" />
                            </div>
                          </div>
                          <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 transition-opacity whitespace-nowrap">
                            <div>附魔书</div>
                            <div className="mt-1"></div>
                            <div>耐久III</div>
                            <div>锋利V</div>
                            <div>经验修补</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-700/50 p-3 rounded-lg flex-1">
                  <h3 className="text-green-400 font-semibold mb-4">提取单个附魔</h3>
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-600 w-full max-w-md">
                      <div className="grid grid-cols-5 gap-4">
                        <div className="bg-gray-700 p-3 rounded border border-gray-600 flex items-center justify-center group relative cursor-pointer" tabIndex={0} role="button" aria-label="查看物品信息">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-gray-600 rounded mb-2 flex items-center justify-center overflow-hidden">
                              <img src="/images/书.png" alt="书" className="w-full h-full object-contain" />
                            </div>
                          </div>
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 transition-opacity whitespace-nowrap">
                            书
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="relative w-8 h-8">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-1 bg-gray-400"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-6 bg-gray-400"></div>
                          </div>
                        </div>
                        <div className="bg-gray-700 p-3 rounded border border-gray-600 flex items-center justify-center group relative cursor-pointer" tabIndex={0} role="button" aria-label="查看物品信息">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-gray-600 rounded mb-2 flex items-center justify-center overflow-hidden">
                              <img src="/images/附魔书.gif" alt="附魔书" className="w-full h-full object-contain" />
                            </div>
                          </div>
                          <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 transition-opacity whitespace-nowrap">
                            <div>附魔书</div>
                            <div className="mt-1"></div>
                            <div>耐久III</div>
                            <div>锋利V</div>
                            <div>经验修补</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="relative w-8 h-8">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-1 bg-gray-400"></div>
                            <div className="absolute top-1/2 left-1/2 translate-x-2 -translate-y-1/2 w-3 h-1 bg-gray-400 transform rotate-135 origin-left"></div>
                            <div className="absolute top-1/2 left-1/2 translate-x-2 -translate-y-1/2 w-3 h-1 bg-gray-400 transform -rotate-135 origin-left"></div>
                          </div>
                        </div>
                        <div className="bg-gray-700 p-3 rounded border border-gray-600 flex items-center justify-center group relative cursor-pointer" tabIndex={0} role="button" aria-label="查看物品信息">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-gray-600 rounded mb-2 flex items-center justify-center overflow-hidden">
                              <img src="/images/附魔书.gif" alt="附魔书" className="w-full h-full object-contain" />
                            </div>
                          </div>
                          <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 transition-opacity whitespace-nowrap">
                            <div>附魔书</div>
                            <div className="mt-1"></div>
                            <div>耐久III</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 border-t border-gray-700 py-4 sm:py-6 mt-4 sm:mt-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-sm sm:text-base text-center w-full">
              如有任何问题，请联系服务器管理员
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// 代码块组件
function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div>
      <h4 className="text-green-400 mb-2 text-sm sm:text-base">{title}</h4>
      <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
        <code className="text-green-500 text-sm sm:text-base whitespace-pre-wrap break-all">{code}</code>
      </div>
    </div>
  );
}
