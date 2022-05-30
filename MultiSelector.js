import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const technology = [
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'React',
  'SQL',
  'JAVA',
  'Springboot',
  'J2EE',
  'Angular',
];

function getStyles(technology, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(technology) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({getData}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  console.log("personName ",personName);

  getData(personName)

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 400 }}>
        <InputLabel id="demo-multiple-name-label">technology</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          name="Technologies"
          onChange={handleChange}
          input={<OutlinedInput label="technology" />}
          MenuProps={MenuProps}
        >
          {technology.map((technology) => (
            <MenuItem
            name="Technologies"
              key={technology}
              value={technology}
              style={getStyles(technology, personName, theme)}
            >
              {technology}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </div>
  );
  <personName/>
}