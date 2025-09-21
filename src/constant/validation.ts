export abstract class ValidationPattern {
  public static readonly EMAIL_VALIDATION: RegExp =
    /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
}

export abstract class ValidationMessages {
  public static readonly EMAIL_INVALID: string = 'E-mail is invalid';
  public static readonly REQUIRED: string = 'This field is required';
}
