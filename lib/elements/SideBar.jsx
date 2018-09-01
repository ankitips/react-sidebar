import React from 'react';
import "../styles/SideBar.css";

const overlay= document.getElementById("mobile_overlay");
const mySidenav= document.getElementById("mySidenav");

class CustomSideBar extends React.Component{
    constructor(){
        super();
        this.closeNav = this.closeNav.bind(this);
        this.openNav = this.openNav.bind(this);
    }
    componentDidMount() {
        var self= this;
        overlay.addEventListener("click", function(){
            self.closeNav();
        });
    }
    closeNav(){
        this.removeScrollOverlay();
        mySidenav.style.width = "0";
    }
    removeScrollOverlay(){
        MobileOverlay.overlay(false);
        window.removeEventListener('scroll', this.noscroll);
    }
    openNav(){
        MobileOverlay.overlay(true);
        window.addEventListener('scroll', this.noscroll);
        mySidenav.style.width = "280px";
    }
    noscroll() {
        window.scrollTo( 0, 0 );
    }
    componentWillUnmount(){
        this.removeScrollOverlay();
    }
    render(){
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>X</a>
                    <div>
                        Side Menu content here.....
                    </div>
                </div>
                <span onClick={this.openNav}>
                   <a className="icon-bar float-left menu_index"></a>
                </span>
            </div>
        )
    }
}

const MobileOverlay ={
    overlay(bool){
        if(bool){
            let el = document.getElementById('mobile_overlay');
            el.classList.remove("hard_hide");
        }else{
            let el = document.getElementById('mobile_overlay');
            el.classList.add("hard_hide");
        }

    }
}

export default CustomSideBar;