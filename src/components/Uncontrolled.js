const UncontrolledInput = ({ defaultValue, placeholder }) => {
    const [value, setValue] = useState(defaultValue);
  
    return (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    );
  };
  
  const LoginForm = () => {
    return (
      <form>
        <UncontrolledInput defaultValue="" placeholder="Email" />
        <UncontrolledInput defaultValue="" placeholder="Password" />
        <button>Submit</button>
      </form>
    );
  };