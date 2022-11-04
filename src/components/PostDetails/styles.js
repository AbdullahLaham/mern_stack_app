import { makeStyles } from "@material-ui/core/styles";
import { borderRadius } from "@mui/system";
export default makeStyles((theme) => ({
    media: {
        borderRadius: '20px',
        objectFit: 'cover',
        width: '100%',
        maxHeight: '600px',
    },
    card: {
        display: 'flex',

        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            flexDirection: 'column',
        }, 
    },section: {
            boorderRadius:'20px',
            margin: '10px',
            flex: '1',
        },
    imageSection: {
        marginLeft: '20px',
        width: '30rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            width: '90%',
            margin: 'auto',
        },
    },
    recommendedPosts: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    outerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    innerContainer: {
        marginRight: '30px',
        maxWidth: '17rem',
        maxHeight: '30rem',
        overflowY: 'auto',
    },
    
}))