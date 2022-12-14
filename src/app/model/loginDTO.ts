export class LoginDto {
  constructor( email: any,  password: any) {
    this.email = email;
    this.password =password;
  }
  email: string;
  password: string;
}
