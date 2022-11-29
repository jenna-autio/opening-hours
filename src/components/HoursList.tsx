import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React from 'react'
import openingHours from '../openingHours.json';
import styled from '@mui/system/styled';
import dayjs from 'dayjs';

const HoursList = () => {

  const StyledListItem = styled(ListItem)({

  })

  interface Day {
    name: string;
    openingHours?: string[];
    closingHours?: string[];
  }

  const Item = (day: Day) => {
    return <StyledListItem>
      <p>{day.name}</p>
    </StyledListItem>
  }

  const renderOpeningHours = (openingHours: any) => {
    return Object.keys(openingHours).map((weekDay, index) => {
      return (
        <Item 
          key={index}
          name={weekDay}
          openingHours={openingHours[weekDay].filter((day: any) => day.type === 'open').map((hour: any) => {return hour.value})}
          closingHours={openingHours[weekDay].filter((day: any) => day.type === 'close').map((hour: any) => {return hour.value})}
        />
      )
    })
  }

  return (
    <List>
      {renderOpeningHours(openingHours)}
    </List>
  )
}

export default HoursList