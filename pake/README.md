<p align="left"><strong>中文</strong> | <a href="https://github.com/tw93/Pake/blob/master/README_EN.md">English</a></p>
<p align="center">
    <img src=https://gw.alipayobjects.com/zos/k/fa/logo-modified.png width=138/>
<h1 align="center">Pake</h1>
<div align="center">
    <a href="https://twitter.com/HiTw93" target="_blank">
    <img alt="twitter" src="https://img.shields.io/twitter/follow/Hitw93?color=%231D9BF0&label=Pake%20%F0%9F%93%A2%20&logo=Twitter&style=flat-square"></a>
    <a href="https://t.me/miaoyan" target="_blank">
    <img alt="telegram" src="https://img.shields.io/badge/chat-telegram-blueviolet?style=flat-square&logo=Telegram"></a>
    <a href="https://github.com/tw93/Pake/releases" target="_blank">
    <img alt="GitHub downloads" src="https://img.shields.io/github/downloads/tw93/Pake/total.svg?style=flat-square"></a>
    <a href="https://github.com/tw93/Pake/commits" target="_blank">
    <img alt="GitHub commit" src="https://img.shields.io/github/commit-activity/m/tw93/Pake?style=flat-square"></a>
    <a href="https://github.com/tw93/Pake/issues?q=is%3Aissue+is%3Aclosed" target="_blank">
    <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/tw93/Pake.svg?style=flat-square"></a>
</div>
<div align="left">很简单的用 Rust 打包网页生成很小的桌面 App，支持 Mac / Windows / Linux 系统，常用包下载、<a href="#命令行打包">命令行一键打包</a>、<a href="#定制开发">定制开发</a> 可见下面文档，也欢迎去 <a href=https://github.com/tw93/Pake/discussions>讨论区</a> 交流。</div>
</p>

## 特征

🏂 **小**：相比传统的 Electron 套壳打包，要小将近 40 倍，不到 3M  
😂 **快**：Pake 的底层使用的 Rust Tauri 框架，性能体验较 JS 框架要轻快不少，内存小很多  
🩴 **特**：不是单纯打包，实现了快捷键的透传、沉浸式的窗口、拖动、样式改写、去广告、产品的极简风格定制  
🐶 **玩**：只是一个很简单的小玩具，用 Rust 替代之前套壳网页打包的老思路，其实 PWA 也很好

## 下载

<table>
    <tr>
        <td>WeRead 
            <a href="https://github.com/tw93/Pake/releases/latest/download/WeRead.dmg">Mac</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/WeRead_amd64.deb">Linux</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/WeRead_x64.msi">Windows</a>
        </td>
        <td>Twitter 
            <a href="https://github.com/tw93/Pake/releases/latest/download/Twitter.dmg">Mac</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/Twitter_amd64.deb">Linux</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/Twitter_x64.msi">Windows</a>
        </td>
    </tr>
    <tr>
        <td><img src=https://cdn.fliggy.com/upic/17dC9I.jpg width=600/></td>
        <td><img src=https://cdn.fliggy.com/upic/mc41xq.jpg width=600/></td>
    </tr>
    <tr>
        <td>ChatGPT 
            <a href="https://github.com/tw93/Pake/releases/latest/download/ChatGPT.dmg">Mac</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/ChatGPT_amd64.deb">Linux</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/ChatGPT_x64.msi">Windows</a>
        </td>
          <td>Qwerty 
            <a href="https://github.com/tw93/Pake/releases/latest/download/Qwerty.dmg">Mac</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/Qwerty_amd64.deb">Linux</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/Qwerty_x64.msi">Windows</a>
        </td>
    </tr>
    <tr>
        <td><img src=https://cdn.fliggy.com/upic/sfnTXf.png width=600/></td>
        <td><img src=https://cdn.fliggy.com/upic/CJjagn.jpg width=600/></td>
    </tr>
    <tr>
        <td>Code
            <a href="https://github.com/tw93/Pake/releases/latest/download/Code.dmg">Mac</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/Code_amd64.deb">Linux</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/Code_x64.msi">Windows</a>
        </td>
         <td>Reference
            <a href="https://github.com/tw93/Pake/releases/latest/download/Reference.dmg">Mac</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/Reference_amd64.deb">Linux</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/Reference_x64.msi">Windows</a>
        </td>
    </tr>
    <tr>
        <td><img src=https://cdn.fliggy.com/upic/EB1OYP.jpg width=600/></td>
        <td><img src=https://cdn.fliggy.com/upic/KFsZIY.png width=600/></td>
    </tr>
        <tr>
           <td>YouTube
            <a href="https://github.com/tw93/Pake/releases/latest/download/YouTube.dmg">Mac</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/YouTube_amd64.deb">Linux</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/YouTube_x64.msi">Windows</a>
        </td>
        <td>Flomo
            <a href="https://github.com/tw93/Pake/releases/latest/download/Flomo.dmg">Mac</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/Flomo_amd64.deb">Linux</a>
            <a href="https://github.com/tw93/Pake/releases/latest/download/Flomo_x64.msi">Windows</a>
        </td>
    </tr>
    <tr>
        <td><img src=https://cdn.fliggy.com/upic/Ea5ZRw.png width=600/></td>
        <td><img src=https://cdn.fliggy.com/upic/jg9Eeu.jpg width=600/></td>
    </tr>
</table>

## 命令行打包

<kbd>
  <img src="https://cdn.fliggy.com/upic/cOC1lF.gif" width="100%">
</kbd>
<br/><br/>

**Pake 提供了命令行工具，可以更快捷方便地一键自定义打你需要的包，详细可见 [文档](./bin/README.md)。**

```bash
// 使用 npm 进行安装
npm install -g pake-cli

// 命令使用
pake url [options]

// 随便玩玩，首次由于安装环境会有些慢，后面就快了
pake https://weekly.tw93.fun --name Weekly --transparent
```

假如你不太会使用命令行，或许使用 **GitHub Actions 在线编译多系统版本** 是一个不错的选择，可查看[文档](https://github.com/tw93/Pake/wiki/GitHub-Actions-%E5%9C%A8%E7%BA%BF%E7%BC%96%E8%AF%91%E5%A4%9A%E7%B3%BB%E7%BB%9F%E7%89%88%E6%9C%AC)。

## 快捷键

| Mac                         | Windows/Linux                  | 功能               |
| --------------------------- | ------------------------------ | ------------------ |
| <kbd>⌘</kbd> + <kbd>[</kbd> | <kbd>Ctrl</kbd> + <kbd>←</kbd> | 返回上一个页面     |
| <kbd>⌘</kbd> + <kbd>]</kbd> | <kbd>Ctrl</kbd> + <kbd>→</kbd> | 去下一个页面       |
| <kbd>⌘</kbd> + <kbd>↑</kbd> | <kbd>Ctrl</kbd> + <kbd>↑</kbd> | 自动滚动到页面顶部 |
| <kbd>⌘</kbd> + <kbd>↓</kbd> | <kbd>Ctrl</kbd> + <kbd>↓</kbd> | 自动滚动到页面底部 |
| <kbd>⌘</kbd> + <kbd>r</kbd> | <kbd>Ctrl</kbd> + <kbd>r</kbd> | 刷新页面           |
| <kbd>⌘</kbd> + <kbd>w</kbd> | <kbd>Ctrl</kbd> + <kbd>w</kbd> | 隐藏窗口，非退出   |
| <kbd>⌘</kbd> + <kbd>-</kbd> | <kbd>Ctrl</kbd> + <kbd>-</kbd> | 缩小页面           |
| <kbd>⌘</kbd> + <kbd>+</kbd> | <kbd>Ctrl</kbd> + <kbd>+</kbd> | 放大页面           |
| <kbd>⌘</kbd> + <kbd>=</kbd> | <kbd>Ctrl</kbd> + <kbd>=</kbd> | 放大页面           |
| <kbd>⌘</kbd> + <kbd>0</kbd> | <kbd>Ctrl</kbd> + <kbd>0</kbd> | 重置页面缩放       |

此外还支持双击头部进行全屏切换，拖拽头部进行移动窗口，还有其他需求，欢迎提过来。

## 定制开发

开始前请确保电脑已经安装了 Rust 和 Node 的环境，此外需参考 [Tauri 文档](https://tauri.app/v1/guides/getting-started/prerequisites) 快速配置好环境才可以开始使用，假如你太不懂，使用上面的命令行打包会更加合适。

```sh
// 安装依赖
npm i

// 调试
npm run dev

// 打包应用
npm run build

```

## 高级使用

1. 修改 `src-tauri` 目录下的 `tauri.conf.json` 中的 `url、productName、icon、identifier` 这 4 个字段，其中 icon 可以从 icons 目录选择一个，也可以去 [macOSicons](https://macosicons.com/#/) 下载符合产品名称的
2. 关于窗口属性设置，可以在 `tauri.conf.json` 修改 `windows` 属性对应的 `width/height`，是否全屏 `fullscreen`，是否可以调整大小 `resizable`，假如想适配 Mac 沉浸式头部，可以将 `transparent` 设置成 `true`，找到 Header 元素加一个 `padding-top` 样式即可，不想适配改成 `false` 也行
3. `npm run dev` 本地调试看看效果，此外可以使用 `npm run dev:debug` 进行容器调试，`npm run build` 运行即可打生产包
4. 代码结构可参考 [文档](https://github.com/tw93/Pake/wiki/Pake-%E7%9A%84%E4%BB%A3%E7%A0%81%E7%BB%93%E6%9E%84%E8%AF%B4%E6%98%8E)，关于样式改写、屏蔽广告、逻辑代码注入、容器消息通信、自定义快捷键可见 [高级用法](https://github.com/tw93/Pake/wiki/Pake-%E7%9A%84%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95)

## 开发者

Pake 的发展离不开这些 Hacker 们，一起贡献了大量能力，也欢迎关注他们 ❤️

<!-- readme: contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/tw93">
            <img src="https://avatars.githubusercontent.com/u/8736212?v=4" width="90;" alt="tw93"/>
            <br />
            <sub><b>Tw93</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Tlntin">
            <img src="https://avatars.githubusercontent.com/u/28218658?v=4" width="90;" alt="Tlntin"/>
            <br />
            <sub><b>Tlntin</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/pan93412">
            <img src="https://avatars.githubusercontent.com/u/28441561?v=4" width="90;" alt="pan93412"/>
            <br />
            <sub><b>Pan93412</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/wanghanzhen">
            <img src="https://avatars.githubusercontent.com/u/25301012?v=4" width="90;" alt="wanghanzhen"/>
            <br />
            <sub><b>Volare</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/essesoul">
            <img src="https://avatars.githubusercontent.com/u/58624474?v=4" width="90;" alt="essesoul"/>
            <br />
            <sub><b>Essesoul</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/liby">
            <img src="https://avatars.githubusercontent.com/u/38807139?v=4" width="90;" alt="liby"/>
            <br />
            <sub><b>Bryan Lee</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/m1911star">
            <img src="https://avatars.githubusercontent.com/u/4948120?v=4" width="90;" alt="m1911star"/>
            <br />
            <sub><b>Horus</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/QingZ11">
            <img src="https://avatars.githubusercontent.com/u/38887077?v=4" width="90;" alt="QingZ11"/>
            <br />
            <sub><b>Steam</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/2nthony">
            <img src="https://avatars.githubusercontent.com/u/19513289?v=4" width="90;" alt="2nthony"/>
            <br />
            <sub><b>2nthony</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/AielloChan">
            <img src="https://avatars.githubusercontent.com/u/7900765?v=4" width="90;" alt="AielloChan"/>
            <br />
            <sub><b>Aiello</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/nekomeowww">
            <img src="https://avatars.githubusercontent.com/u/11081491?v=4" width="90;" alt="nekomeowww"/>
            <br />
            <sub><b>Ayaka Neko</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/princemaple">
            <img src="https://avatars.githubusercontent.com/u/1329716?v=4" width="90;" alt="princemaple"/>
            <br />
            <sub><b>Po Chen</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/houhoz">
            <img src="https://avatars.githubusercontent.com/u/19684376?v=4" width="90;" alt="houhoz"/>
            <br />
            <sub><b>Hyzhao</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/liusishan">
            <img src="https://avatars.githubusercontent.com/u/33129823?v=4" width="90;" alt="liusishan"/>
            <br />
            <sub><b>Liusishan</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/piaoyidage">
            <img src="https://avatars.githubusercontent.com/u/5135405?v=4" width="90;" alt="piaoyidage"/>
            <br />
            <sub><b>Ranger</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: contributors -end -->

## 支持

1. 我有两只猫，一只叫汤圆，一只叫可乐，假如觉得 Pake 让你生活更美好，可以给汤圆可乐 <a href="https://miaoyan.app/cats.html?name=Pake" target="_blank">喂罐头 🥩🍤</a>。
2. 如果你喜欢 Pake，可以在 Github Star，更欢迎 [推荐](https://twitter.com/intent/tweet?url=https://github.com/tw93/Pake&text=Pake%20%E4%B8%80%E4%B8%AA%E5%BE%88%E7%AE%80%E5%8D%95%E7%9A%84%E7%94%A8%20Rust%20%E6%89%93%E5%8C%85%E7%BD%91%E9%A1%B5%E7%94%9F%E6%88%90%20Mac%20App%20%E7%9A%84%E5%B7%A5%E5%85%B7%EF%BC%8C%E7%9B%B8%E6%AF%94%E4%BC%A0%E7%BB%9F%E7%9A%84%20Electron%20%E5%A5%97%E5%A3%B3%E6%89%93%E5%8C%85%EF%BC%8C%E5%A4%A7%E5%B0%8F%E8%A6%81%E5%B0%8F%E5%B0%86%E8%BF%91%2040%20%E5%80%8D%EF%BC%8C%E4%B8%80%E8%88%AC%202M%20%E5%B7%A6%E5%8F%B3%EF%BC%8C%E5%BA%95%E5%B1%82%E4%BD%BF%E7%94%A8Tauri%20%EF%BC%8C%E6%80%A7%E8%83%BD%E4%BD%93%E9%AA%8C%E8%BE%83%20JS%20%E6%A1%86%E6%9E%B6%E8%A6%81%E8%BD%BB%E5%BF%AB%E4%B8%8D%E5%B0%91%EF%BC%8C%E5%86%85%E5%AD%98%E5%B0%8F%E5%BE%88%E5%A4%9A%EF%BC%8C%E6%94%AF%E6%8C%81%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6%E3%80%81Twitter%E3%80%81Youtube%E3%80%81RunCode%E3%80%81Flomo%E3%80%81%E8%AF%AD%E9%9B%80%E7%AD%89%EF%BC%8C%E5%8F%AF%E4%BB%A5%E5%BE%88%E6%96%B9%E4%BE%BF%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91~) 给你志同道合的朋友使用。
3. 可以关注我的 [Twitter](https://twitter.com/HiTw93) 获取到最新的 Pake 更新消息，也欢迎加入 [Telegram](https://t.me/miaoyan) 聊天群。

## 最后

1. 希望大伙玩的过程中有一种学习新技术的喜悦感，如果有新点子欢迎告诉我
2. 假如你发现有很适合做成桌面 App 的网页也很欢迎告诉我，我给加到里面来
