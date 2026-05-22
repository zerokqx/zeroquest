import { User } from "@zeroquest/db";

export interface TotpSetupTokenPayload {
  type: "setup",
  uid: User['id']
}

export interface TotpValidateTokenPayload {
  type: "validate"
  uid: User['id']
}
