import React, {useState} from "react";
import {Typography, Box, Grid, Stack, autocompleteClasses} from "@mui/material";
import useAutocomplete from '@mui/base/useAutocomplete';
import '../../App.css';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckIcon from '@mui/icons-material/Check';
import {styled} from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const Root = styled('div')(
    ({theme}) => `
  color:rgba(0,0,0,.85);
  font-size: 14px;
`,
);

const InputWrapper = styled('div')(
    ({theme}) => `
  fullWidth
  border: 1px solid #000000;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.6);
  background-color: #fff;
  border-radius: 2px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #000000;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
  }

  & input {
    background-color: #fff;
    color: rgba(0,0,0,.85);
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`,
);

function Tag(props) {
    const {label, onDelete, ...other} = props;
    return (
        <div {...other}>
            <span>{label}</span>
            <CloseIcon onClick={onDelete}/>
        </div>
    );
}

Tag.propTypes = {
    label: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
    ({theme}) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`,
);

const Listbox = styled('ul')(
    ({theme}) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`,
);

const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'The Dark Knight', year: 2008},];

function AddServices() {
    const [inputList, setInputList] = useState([{service: '', vet: ''}]);

    const {
        getRootProps,
        getInputProps,
        getTagProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
        value,
        focused,
        setAnchorEl,
    } = useAutocomplete({
        id: 'vet',
        // defaultValue: [top100Films[1]],
        multiple: true,
        options: top100Films,
        getOptionLabel: (option) => option.title,
    });
    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleRemove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleAddClick = () => {
        setInputList([...inputList, {service: '', vet: ''}]);
    }
    return (
        <Box style={{width: '70%', textAlign: 'center'}}>
            <Typography fontWeight="bold" sx={{marginTop: 3}}>Add services</Typography>
            {
                inputList.map((x, i) => {
                    return (
                        <Box sx={{textAlign: 'start', marginTop: 5}}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography>Service name</Typography>
                                    <input
                                        type="text"
                                        name="service"
                                        onChange={e => handleInputChange(e, i)}
                                        style={{width: '80%', height: 27, marginBottom: 10}}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>Veterinarians</Typography>
                                    <Root>
                                        <div {...getRootProps()}>
                                            <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                                                {value.map((option, index) => (
                                                    <StyledTag label={option.title} {...getTagProps({index})} />
                                                ))}

                                                <input {...getInputProps()} />
                                            </InputWrapper>
                                        </div>
                                        {groupedOptions.length > 0 ? (
                                            <Listbox {...getListboxProps()}>
                                                {groupedOptions.map((option, index) => (
                                                    <li {...getOptionProps({option, index})}>
                                                        <span>{option.title}</span>
                                                        <CheckIcon fontSize="small"/>
                                                    </li>
                                                ))}
                                            </Listbox>
                                        ) : null}
                                    </Root>
                                </Grid>
                            </Grid>
                            <div class="form-group col-md-2 mt-4">
                                {
                                    inputList.length !== 1 &&
                                    <IconButton size="large" onClick={handleRemove}>
                                        <DeleteIcon fontSize="inherit"/>
                                    </IconButton>
                                }
                                {inputList.length - 1 === i &&
                                    <IconButton size="large" onClick={handleAddClick}>
                                        <AddCircleOutlineIcon fontSize="inherit"/>
                                    </IconButton>
                                }
                            </div>
                        </Box>
                    );
                })}
        </Box>
    );
}

export default AddServices;