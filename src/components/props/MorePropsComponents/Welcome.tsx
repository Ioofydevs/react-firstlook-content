import './Welcome.scss';

type WelcomeProps = {
  name?: string;
  isLoggedIn?: boolean;
  messageCount?: number;
};

const Welcome = (props: WelcomeProps) => {
  return (
    <div className='wrapper-welcome'>
      <h1>
        {props.isLoggedIn
          ? `Welcome ${props.name} ! you have a ${props.messageCount} messages`
          : `Welcome Guest`}
      </h1>
    </div>
  );
};

export default Welcome;
