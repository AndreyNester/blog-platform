function UsernameLabel() {
  return (
    <label htmlFor="username">
      <h4>Username</h4>
      <Input
        placeholder="Basic usage"
        id="username"
        name="username"
        showCount
        maxLength={20}
        value={usernameValue}
        onChange={(e) => setUsernameValue(e.target.value)}
      />
    </label>
  );
}

export default UsernameLabel;
