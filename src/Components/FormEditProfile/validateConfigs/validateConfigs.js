export const validateConfigUsername = () => ({
  required: 'required field',
});

export const validateConfigEmail = () => ({
  required: 'required field',
  pattern: {
    value:
      // eslint-disable-next-line no-useless-escape
      /^((([0-9a-z]{1}[-0-9a-z\.]{1,}[0-9a-z]{1})|([0-9а-я]{1}[-0-9а-я\.]{1,}[0-9а-я]{1}))@([-a-z]{1,}\.){1,2}[-a-z]{2,})$/u,
    message: 'please write correct Email address',
  },
});

export const validateConfigPassword = () => ({
  required: 'required field',
  minLength: {
    value: 6,
    message: 'Your password needs to be at least 6 characters',
  },
  maxLength: {
    value: 40,
    message: 'Your password must be a maximum of 40 characters',
  },
});

export const validateConfigAvatar = () => ({
  required: 'required field',
  pattern: {
    value:
      // eslint-disable-next-line no-useless-escape
      /^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i,
    message: 'please write correct url',
  },
});
