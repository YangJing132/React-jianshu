// 页面头部组件
import React ,{ PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
    HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList
} from './style';
import {Link} from 'react-router-dom';

//普通组件
class Header extends PureComponent{
    render() {
        const {focused,handleInputFocus,handleInputBlur,list} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
					<Logo/>
				</Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition in={focused} timeout={200} classNames='slide'>
                            <NavSearch className={focused ? 'focused' : ''}
                            onFocus={() => handleInputFocus(list)}
                            onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe678;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'><i className='iconfont'>&#xe601;</i>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    getListArea() {
        const {focused,list,page,mouseIn,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage} =this.props;
        const newList = list.toJS();
        const pageList=[];
        if(newList.length){
            for(let i= (page-1)*10;i<page*10;i++){
                pageList.push(
                 <SearchInfoItem key = { newList[i] } > { newList[i] } </SearchInfoItem>
                )
             }
        }
        
        if(focused || mouseIn){
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe7b1;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageList }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
}
//无状态组件
// const Header = (props) => {
//     return (
//         <HeaderWrapper>
//             <Logo />
//             <Nav>
//                 <NavItem className='left active'>首页</NavItem>
//                 <NavItem className='left'>下载APP</NavItem>
//                 <NavItem className='right'>登录</NavItem>
//                 <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
//                 <SearchWrapper>
//                     <CSSTransition in={props.focused} timeout={200} classNames='slide'>
//                         <NavSearch className={props.focused ? 'focused' : ''}
//                         onFocus={props.handleInputFocus}
//                         onBlur={props.handleInputBlur}
//                         ></NavSearch>
//                     </CSSTransition>
//                     <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe678;</i>
//                     {getListArea(props.focused)}
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className='writing'><i className='iconfont'>&#xe601;</i>写文章</Button>
//                 <Button className='reg'>注册</Button>
//             </Addition>
//         </HeaderWrapper>
//     )
// }

const mapStateToProps = (state) => {
    return {
        // focused : state.get('header').get('focused'),
        focused : state.getIn(['header','focused']),
        list : state.getIn(['header','list']),
        page : state.getIn(['header','page']),
        mouseIn : state.getIn(['header','mouseIn']),
        totalPage : state.getIn(['header','totalPage']),
    }
}
const mapDispathToProps = (dispath) => {
    return {
        handleInputFocus(list) {
            // 获取数据
            (list.size === 0) && dispath(actionCreators.getList());
            dispath(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispath(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispath(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispath(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin) {

            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            console.log(spin.style.transform);
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform='rotate('+(originAngle+360)+'deg)';
            if(page<totalPage){
                dispath(actionCreators.changePage(page+1));
            }else{
                dispath(actionCreators.changePage(1));
            }
            
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);