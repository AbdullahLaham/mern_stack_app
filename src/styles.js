import { deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '10px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '10px 50px',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
      },
      AppbarSearch: {
        padding: '16px',
        borderRadius: 4,
        marginBottom: '1rem',
        display: 'flex',
      },
      searchButton: {

      },
      [theme.breakpoints.down('xs')]: {
        mainContainer: {
          flexDirection: 'column-reverse',
          minWidth: '100%',
        }
      }
}))





