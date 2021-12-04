import './Greet.scss';

// We can passing props basic in here
// Kita bisa passing basic props disini

type GreetProps = {
  name: string;
  age: number;
  address: string;
};

export const Greet = (props: GreetProps) => {
  return (
    <div className='wrapper-greet'>
      <h2>Hello myname is: {props.name}!</h2>
      <h2>My age is: {props.age}!</h2>
      <h2>My address is: {props.address}</h2>
    </div>
  );
};
