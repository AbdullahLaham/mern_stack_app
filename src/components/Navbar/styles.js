import { deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 4,
        margin: '10px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '4rem',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
        fontSize: '3rem',
        textDecoration: 'none',
        marginLeft: '12rem',
      },
      image: {
        marginLeft: '15px',
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      profile: {
        display: 'flex',
        gap: '.8rem',
      },
      userName: {
        display: 'flex',
        alignItems: 'center',
      },
      brandContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%',
        marginLeft: '2rem',
      },
      purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],

      },
      [theme.breakpoints.down('sm')]: {
        brandContainer: {
          display: 'none',
        }
      },
      // logout: {
      //   marginLeft: '3rem',
      // }
}))








