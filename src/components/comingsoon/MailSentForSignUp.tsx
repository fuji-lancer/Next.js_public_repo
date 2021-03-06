import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#000000',
      padding: '120px 16px',
    },
    contentWrapper: {
      background: '#FFFFFF',
      borderRadius: 12,
      maxWidth: 560,
      padding: '24px 16px',
      margin: '0 auto',
    },
    contentTop: {
      borderBottom: '2px solid rgb(228, 229, 234)',
    },
    contentBottom: {
      paddingTop: '10px',
    },
    title: {
      fontSize: '24px',
      lineHeight: '18px',
      fontWeight: 'bold',
      marginBottom: '30px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      [theme.breakpoints.down(360)]: {
        fontSize: '20px',
      },
    },
    text1: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 'bold',
      marginBottom: '16px',
      textAlign: 'center',
      [theme.breakpoints.down(360)]: {
        fontSize: '12px',
      },
    },
    lineBreak: {
      display: 'block',
    },
    text2: {
      fontSize: '14px',
      lineHeight: '40px',
      fontWeight: 'bold',
      marginBottom: '24px',
      textAlign: 'center',
      [theme.breakpoints.down(360)]: {
        fontSize: '12px',
      },
    },
    text3: {
      fontSize: '14px',
      lineHeight: '40px',
      fontWeight: 'bold',
      textAlign: 'center',
      [theme.breakpoints.down(360)]: {
        fontSize: '12px',
      },
    },
    email: {
      fontSize: '14px',
      lineHeight: '40px',
      textAlign: 'center',
      marginBottom: '24px',
      [theme.breakpoints.down(360)]: {
        fontSize: '12px',
      },
    },
    buttonWrapper: {
      textAlign: 'center',
    },
    button: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#65666d',
      background: 'transparent',
      border: '2px solid #65666d',
      borderRadius: 44,
      height: 44,
      width: '100%',
      maxWidth: 320,
    },
  })
);

type Props = {
  email?: string;
};

const MailSentForSignUp: React.FC<Props> = ({ email }) => {
  const classes = useStyles();
  const router = useRouter();
  const handleClick = () => {
    router.push('/comingsoon');
  };

  return (
    <div className={classes.root}>
      <div className={classes.contentWrapper}>
        <div className={classes.contentTop}>
          <h2 className={classes.title}>????????????????????????????????????</h2>
          <p className={classes.text1}>
            ???????????????????????????????????????
            <span className={classes.lineBreak}>
              ??????????????????????????????????????????????????????
            </span>
          </p>
          <p className={classes.text2}>??????????????????????????????????????????</p>
        </div>
        <div className={classes.contentBottom}>
          {email ? (
            <div>
              <p className={classes.text3}>?????????????????????????????????</p>
              <p className={classes.email}>{email}</p>
            </div>
          ) : (
            ''
          )}
          <div className={classes.buttonWrapper}>
            <button className={classes.button} onClick={handleClick}>
              ????????????
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailSentForSignUp;
