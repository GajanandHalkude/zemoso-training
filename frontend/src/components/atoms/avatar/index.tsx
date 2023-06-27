import Avatar from "@mui/material/Avatar"
import React from "react"

interface AvatarComponentProps{
    height: string,
    width: string,
    src:string,
}

const AvatarComponent = (props:AvatarComponentProps) => {
    return(
        
            <Avatar 
              alt="Avatar"
              src={props.src}
              sx={{width: props.width,height: props.height}}
              data-testid = "avatar"
              />
        
    )
}

export default AvatarComponent;