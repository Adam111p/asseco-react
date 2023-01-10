import { SyntheticEvent, useState } from 'react';

const Login = () => {
  const [ formData, setFormData ] = useState({
    password: '123',
    name: 'abc'
  });

  const saveData = (fieldName: string, fieldValue: string, prevValue = formData) => {
    return {
      ...prevValue,
      [fieldName]: fieldValue,
    }
  }

  return (
    <>
      <input
        name="name"
        placeholder='name'
        value={formData.name}
        onChange={(e: SyntheticEvent<HTMLInputElement>) => {
          const v = e.currentTarget.value;
          const name = e.currentTarget.name;
          setFormData((prev) => {
            return saveData(name, v, prev)
          });
        }}
      />
      <input
        name="password"
        placeholder='password'
        value={formData.password}
        onChange={(e: SyntheticEvent<HTMLInputElement>) => {
          const v = e.currentTarget.value;
          setFormData((prev) => {
            return {
              name: prev.name,
              password: v,
            }
          });
        }}
      />
    </>
  )  
}

export default Login;
