import { injectGlobal } from 'styled-components';
injectGlobal`

  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1537342388791'); /* IE9*/
    src: url('./iconfont.eot?t=1537342388791#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1537342388791') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1537342388791#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-jiahao:before { content: "\e613"; }

  .icon-xin:before { content: "\e640"; }

  .icon-sousuo:before { content: "\e678"; }

  .icon-bi:before { content: "\e601"; }

  .icon-xinxi:before { content: "\e61b"; }

  .icon-right:before { content: "\e68b"; }

  .icon-Aa:before { content: "\e636"; }

  .icon-xiangshang:before { content: "\e664"; }

  .icon-qian:before { content: "\e62b"; }

  .icon-xunhuan:before { content: "\e7b1"; }

  .icon-xiaotuziCduan_:before { content: "\e60c"; }

`;