// LoginInput.jsx
const LoginInput = ({ type, placeHolder, value, onChange, name }) => {
  return (
    <input 
      type={type} 
      placeholder={placeHolder} 
      value={value} 
      onChange={onChange} 
      name={name} 
      className="w-full p-1 rounded-sm pl-3 mb-6"
    />
  );
}

export default LoginInput;
