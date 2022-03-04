import React from 'react'
import "./topbar.css"
import {Language, NotificationsNone, Settings} from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { deepOrange } from '@mui/material/colors';


function Topbar() {
  return (
    <div className='topbar'>
         <div className='topbarWrapper'>
              <div className='topLeft'>
                   <span className='logo'>AdminPoint</span>
              </div>
              <div className='topRight'>
                   <div className='topbarIconContainer'>
                        <IconButton >
                            <NotificationsNone style={{fontSize:"25px"}}/> 
                        </IconButton>
                        <span className="topbarIconBadge">
                             2
                        </span>
                         
                   </div>
                   <div className='topbarIconContainer'>
                        <IconButton >
                            <Language style={{fontSize:"25px"}}/> 
                        </IconButton>
                        <span className="topbarIconBadge">
                             2
                        </span>
                         
                   </div>
                   <div className='topbarIconContainer'>
                        <IconButton >
                            <Settings style={{fontSize:"25px"}}/> 
                        </IconButton>
                        
                         
                   </div>
                   <div className='topbarIconContainer'>
                        <IconButton >
                            <Avatar sx={{bgcolor:deepOrange[500]}}>SP</Avatar> 
                        </IconButton>
                        
                         
                   </div>
              </div>
         </div>
    </div>
  )
}

export default Topbar