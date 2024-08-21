import React from "react";
import "./SectionFive.css";
import Circle3 from "../../Assets/Images/circle3.png";
import Embark from "../../Assets/Images/embark.png";
import { TextField, Checkbox, FormControlLabel, Stack, Button } from '@mui/material';
export const MainSectionFive =()=>{
    return(
        <div className="sectionFive" id="contact">
            <div className="embarkContainer">
                <div className="embark">
                    <div className="embarkImage">
                        <img src={Embark} alt="" height={80} />
                        <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus.</p>
                        <img src={Circle3} alt="" />
                    </div>
                    <div className="contact">
      <Stack spacing={2} sx={{ mt: 4 }}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#7731FF',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#7731FF',
              },
              '& input': {
                color: 'white', 
              },
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .Mui-focused .MuiInputLabel-root': {
              color: '#7731FF',
            },
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#7731FF',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#7731FF',
              },
              '& input': {
                color: 'white', // Цвет текста в поле ввода
              },
            },
            '& .MuiInputLabel-root': {
              color: 'white', // Цвет метки
            },
            '& .Mui-focused .MuiInputLabel-root': {
              color: '#7731FF', // Цвет метки при фокусе
            },
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#7731FF',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#7731FF',
              },
              '& input': {
                color: 'white', // Цвет текста в поле ввода
              },
            },
            '& .MuiInputLabel-root': {
              color: 'white', // Цвет метки
            },
            '& .Mui-focused .MuiInputLabel-root': {
              color: '#7731FF', // Цвет метки при фокусе
            },
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Message..."
          multiline
          rows={2}
          variant="outlined"
          sx={{
            width: '400px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#7731FF',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#7731FF',
              },
              '& textarea': {
                padding: '18.5px 14px',
                color: 'white', // Цвет текста в многострочном поле
              },
            },
            '& .MuiInputLabel-root': {
              color: '#7731FF', // Цвет метки
            },
            '& .Mui-focused .MuiInputLabel-root': {
              color: '#7731FF', // Цвет метки при фокусе
            },
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: '#7731FF',
                '&.Mui-checked': {
                  color: '#7731FF',
                },
              }}
            />
          }
          label="I agree to the terms and conditions"
        />
        <Button variant="contained" color="primary">Submit</Button>
      </Stack>
    </div>
                </div>
            </div>
        </div>
    )
}