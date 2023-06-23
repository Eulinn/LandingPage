import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'Hello World, como você vai?',
        1000,
        'Hello World, como você está?',
        1000,
        'Hello World, como está indo?',
        1000,
        'Hello World, tudo bem?',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ color: '#7e848140',}}
      repeat={Infinity}
    />
  );
};



export default ExampleComponent;