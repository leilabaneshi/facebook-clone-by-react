
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import ChatIcon from '@material-ui/icons/Chat'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StorefrontIcon from '@material-ui/icons/Storefront';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMore';
function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://avatars2.githubusercontent.com/u/57330277?s=460&u=775ec18cfe93ff881788343f57440a235afdff46&v=4' title='leilabaneshi' />
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Video' />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title='More...' />


        </div>
    )
}

export default Sidebar
