import React, { useContext } from 'react';
import iconHome from "../../Images/icons/home.svg"
import iconBrowse from "../../Images/icons/browse.svg"
import { ContainerSidebar, TopSideBar } from './styled'
import MusicContext from '../../Contexts/MusicContext';

function SideBar() {
    const playlist = useContext(MusicContext);
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
            <div>
                <ul>
                {playlist.map(music => {
                    return (
                        <li key={music.id}>
                            <div>
                                <span>{music.title}</span>
                                <span>{music.author}</span>
                            </div>
                        </li>
                    )
                })}
                </ul>
            </div>
        </ContainerSidebar>
    )
}

export default SideBar;