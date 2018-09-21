import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
    height:58px;
    position:relative;
    border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position:absolute;
    left:0;
    top:0;
    display:block
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;
export const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    color:#333;
    font-size:17px;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color: #ea6f5a;
    }    
`;

export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .zoom{
        position:absolute;
        bottom:5px;
        right:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        background:none;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
            border:none;
        }
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    margin-top:9px;
    margin-left:30px;
    padding: 0 30px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    color:#666;
    box-sizing:border-box;
    &::placeholder {
        color:#999;
    }
    &.focused{
        width:240px;
        outline:0;
        .iconfont{
            
        }
    }
    &.slide-enter{
        width:160px;
        transition all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;


export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    padding:0 20px;
    width:240px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background:#fff;
`;

export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;
export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition:all .2s ease-in;
        transform-origin:center center;
    }
`;

export const SearchInfoList = styled.div`
    overflow:hidden;
`;
export const SearchInfoItem = styled.a`
    float:left;
    font-size:12px;
    line-height:20px;
    padding: 2px 6px;
    margin-right:12px;
    margin-bottom:15px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius:3px;
`;
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;

export const Button = styled.div`
    float:right;
    font-size:14px;
    line-height:38px;
    border-radius:20px;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    border: 1px solid #ec6149;
    &.reg{
        color:#ec6149;
    }
    &.writing{
        color:#fff;
        background:#ec6149;
    }
`;