import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import EmailFormCard from './EmailFormCard';
import RestartOnboardingCard from './RestartOnboardingCard';
import { useIntersection } from 'react-use';
import { HookState as RestartOnboardingState } from 'hooks/useRestartOnboardingHandler';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '32px 17px',
    },
    title: {
      fontWeight: 'bold',
      fontSize: '20px',
      textAlign: 'center',
      lineHeight: '32px',
      marginBottom: '8px',
      [theme.breakpoints.down(375)]: {
        fontSize: '18px',
      },
      [theme.breakpoints.down(360)]: {
        fontSize: '16px',
      },
    },
    restartTitle: {
      fontWeight: 'bold',
      color: '#ffffff',
      fontSize: '20px',
      textAlign: 'center',
      lineHeight: '32px',
      marginBottom: '8px',
      [theme.breakpoints.down(375)]: {
        fontSize: '18px',
      },
      [theme.breakpoints.down(360)]: {
        fontSize: '16px',
      },
    },
    redText: {
      fontSize: '26px',
      color: '#FF5555',
      [theme.breakpoints.down(375)]: {
        fontSize: '24px',
      },
      [theme.breakpoints.down(360)]: {
        fontSize: '22px',
      },
    },
    subTitle: {
      fontSize: '14px',
      fontWeight: 500,
      textAlign: 'center',
      lineHeight: '20px',
      marginBottom: '12px',
      [theme.breakpoints.down(375)]: {
        fontSize: '14px',
      },
      [theme.breakpoints.down(360)]: {
        fontSize: '12px',
      },
    },
  })
);

type Props = {
  onFocus: () => void;
  onBlur: () => void;
  handleAppear: () => void;
  handleDisappear: () => void;
  handleEmailSubmit: (data: { email: string }, event: any) => void;
  restartOnboardingState: RestartOnboardingState;
};
const EmailForm: React.FC<Props> = ({
  onFocus,
  onBlur,
  handleAppear,
  handleDisappear,
  handleEmailSubmit,
  restartOnboardingState,
}) => {
  const classes = useStyles();
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });
  React.useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0) {
      handleAppear();
    } else {
      handleDisappear();
    }
  }, [intersection, handleAppear, handleDisappear]);

  return (
    <div ref={intersectionRef} className={classes.root}>
      {restartOnboardingState?.isReStartOnboarding ? (
        <RestartOnboardingCard
          buttonText="?????????????????????"
          reStartOnboarding={restartOnboardingState?.reStartOnboarding}
          text={
            <React.Fragment>
              <p className={classes.restartTitle}>
                ????????????<span className={classes.redText}>??????????????????!!</span>
              </p>
            </React.Fragment>
          }
        />
      ) : (
        <EmailFormCard
          buttonText="?????????????????????"
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={handleEmailSubmit}
          text={
            <React.Fragment>
              <p className={classes.title}>
                ????????????<span className={classes.redText}>??????????????????!!</span>
              </p>
              <p className={classes.subTitle}>???????????????????????????????????????</p>
            </React.Fragment>
          }
        />
      )}
    </div>
  );
};

export default EmailForm;
