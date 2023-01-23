import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfirmationTokenEntity } from 'src/user/entities/confirmation-token.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
    constructor(
        private mailerService: MailerService,
        private configService: ConfigService,
      ) {}
    
      sending_email = this.configService.get<string>('EMAIL_FROM');
      backend_url = this.configService.get<string>('BACKEND_URL');

    async sendEmailConfirmation(token : ConfirmationTokenEntity){
        try {
          await this.mailerService.sendMail({
            to: token.user.email,
            from: this.sending_email,
            subject: `Email confirmation`,
            template: 'email-confirmation',
            context: {
              url: this.backend_url,
              token : token.token
            },
          })
        }catch (error) {
          console.log('Error Mails', error);
        }
      }
}
