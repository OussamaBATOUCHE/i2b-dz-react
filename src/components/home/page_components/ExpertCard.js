import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  textAlign: 'justify',
  textJustify: 'inter-word',
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ExpertCard = ({name, surname, position, photo_path, text}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
    <div className="team-item col cursor-pointer" onClick={handleOpen}>
        <div className="">
            <div className="team-wrap v3">
                <div className="team-thumb">
                    <img src={process.env.PUBLIC_URL+`/static/images/team/`+photo_path} alt="GPS Algerie" />
                </div>
                <div className="team-info">
                    <h4>{name} {surname}</h4>
                    <span>{position}</span>
                </div>
            </div>
        </div>
    </div>

    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h2">
            {name} {surname}
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            {position}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {text}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
    </>
  )}


ExpertCard.defaultProps = {
    name: 'Nom',
    surname: 'prenom',
    position: 'position here',
    photo_path: `${process.env.PUBLIC_URL}/static/images/team/user.png`,
}
  

export default ExpertCard