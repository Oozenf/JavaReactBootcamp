import * as React from 'react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import {useDispatch} from "react-redux";
import {setTheme} from "../../store/actions/settingActions";
import { IconButton } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

export default function ThemeMenu() {
  const settingDispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = (theme) => {
    setAnchorEl(null);
    settingDispatch(setTheme(theme));
  };

  return (
    <div>
      <IconButton sx={{color:'#4caf50'}}      
        onClick={() => handleClose('theme3')}
      >
        <EnergySavingsLeafIcon/>
      </IconButton>
      <IconButton sx={{color:'#2196f3'}}      
        onClick={() => handleClose('theme2')}
      >
        <AcUnitIcon/>
      </IconButton>
      <IconButton sx={{color:'#f44336'}}      
        onClick={() => handleClose('theme1')}
      >
        <LocalFireDepartmentIcon/>
      </IconButton>
     
 
    </div>
  );
}
