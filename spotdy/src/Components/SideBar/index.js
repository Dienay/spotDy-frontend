import React from 'react';
import iconHome from "../../Images/icons/home.svg"
import iconBrowse from "../../Images/icons/browse.svg"
import { ContainerSidebar, TopSideBar } from './styled'

function SideBar() {
  return (
    <ContainerSidebar>
        <section>
            <TopSideBar>
                <div>
                    <img src={iconHome} alt="icons plus" />
                    <p>Home</p>
                </div>
                <div>
                    <img src={iconBrowse} alt="icons plus" />
                    <p>Browse</p>
                </div>
            </TopSideBar>
        </section>
    </ContainerSidebar>
  )
}

export default SideBar;