import { Box, styled, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import theme from '../../../theme'

const StyledBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})


const StyledTabs = styled(Tabs)({
  '& .MuiButtonBase-root': {
    padding: '0px',
    minHeight: '28px',
  },
  '& .MuiTabs-indicator': {
    top: '35px',
  },
  '& .MuiTabs-root': {
    padding: '0px',
  },
  minHeight: '37px !important',
  width: '100%',
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
})

interface TabsProps {
  label1:string,
  label2:string
  body1?:React.ReactNode
  body2?:React.ReactNode
}
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
  
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
const TabsComponent = ({label1, label2,body1,body2}:TabsProps) => {
 
  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  
  return (
    <StyledBox data-testid="tabs" id="tabs">
      <StyledTabs value={value} onChange={handleChange}>
        <Tab label={label1} {...a11yProps(0)} defaultChecked={true}  style={{ textTransform: 'none' }}/>
        <Tab label={label2} {...a11yProps(1)} style={{ textTransform: 'none' }}/>
      </StyledTabs>

      <TabPanel value={value} index={0} >
        {body1}
        </TabPanel>
      <TabPanel value={value} index={1} >
        {body2}
        </TabPanel>
      
    </StyledBox>
  )
}

export default TabsComponent
