import { Test, TestingModule } from '@nestjs/testing';
import { ConfigChannelResolver } from './config-channel.resolver';

describe('ConfigChannelResolver', () => {
  let resolver: ConfigChannelResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigChannelResolver],
    }).compile();

    resolver = module.get<ConfigChannelResolver>(ConfigChannelResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
