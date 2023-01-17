import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from "./constants";
import { CurrentUserPayload } from "./interfaces/current-user.payload";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: jwtConstants.secret,
        });
      }
    
      validate(payload: CurrentUserPayload): CurrentUserPayload {
        return {
          id: payload.id,
          email: payload.email
        };
      }
}
