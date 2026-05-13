// import nodemailer from 'nodemailer';
// import { MfaSender, MfaSenderChannel } from '@zeroquest/nest-shared';
//
// export class EmailOtpSender extends MfaSender {
//   override template = '{{login}} Ваш код {{code}}';
//   override channel: MfaSenderChannel = 'email';
//   private transparter: Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options>;
//   constructor() {
//  const d = nodemailer.createTransport()
//   }
//
//   override send(chellengeId: string): Promise<void> {
//     throw new Error('Method not implemented.');
//   }
// }
