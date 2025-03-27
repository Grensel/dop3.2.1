import { ChangeEvent, FC, memo, useCallback, useState } from 'react';

const CONTAINER_STYLES = { display: 'flex', flexDirection: 'column', gap: 10 };

type PropsType = { value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void };

// Task 1
// If change value on input Title component not re-render
// If change value on input Task_1 component not re-render

export const Task_1 = () => {

  console.log('task1 render');




  return (
    <div style={{ ...CONTAINER_STYLES } as any}>
      <Input />
      <Title title="I am a title" />
    </div>
  );
};

const Title = memo((props: { title: string }) => {
  console.log('Title rendered');

  return (<h3>{props.title}</h3>)
});

const Input: FC = () => {
  const [value, setValue] = useState('');
  console.log('input rendering');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <input type="text" placeholder="Placeholder" value={value} onChange={handleChange} />
  );
};
