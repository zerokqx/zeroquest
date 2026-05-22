import { AuthGuard } from "@nestjs/passport";

export class TotpGuard extends AuthGuard('totp'){}
