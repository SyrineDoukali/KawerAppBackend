import { CurrentUserPayload } from './current-user.payload';

describe('CurrentUserPayload', () => {
  it('should be defined', () => {
    expect(new CurrentUserPayload()).toBeDefined();
  });
});
