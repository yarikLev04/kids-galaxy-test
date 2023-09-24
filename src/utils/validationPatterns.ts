export class ValidationPatterns {
  public static email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/;

  public static password =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~`#^()_\-+={}[\]|\\:;"'<>,./])[A-Za-z\d@$!%*?&~`#^()_\-+={}[\]|\\:;"'<>,./]{8,}$/;
}
