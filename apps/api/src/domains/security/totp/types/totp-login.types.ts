import { User } from "@zeroquest/db";

export type LoginTotpChallengeObject = {
  uid: User['id'];
  login: string;
  ct: string;
  ua: string;
  attempts: number;
};
