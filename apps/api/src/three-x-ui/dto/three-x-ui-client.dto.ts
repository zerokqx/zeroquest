import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class XuiClient {

  @ApiProperty({
    description: 'Flow (обычно пустая строка для большинства случаев)',
    example: '',
  })
  @IsString()
  @IsOptional()
  flow?: string = '';

  @ApiProperty({
    description: 'Лимит одновременных IP (0 = без ограничения)',
    example: 0,
  })
  @IsInt()
  @IsOptional()
  limitIp?: number = 3;

  @ApiProperty({
    description: 'Общий трафик в байтах (0 = без лимита)',
    example: 0,
  })
  @IsInt()
  @IsOptional()
  totalGB?: number = 0;

  @ApiProperty({
    description: 'Время истечения в миллисекундах (timestamp). 0 = без срока',
    example: 0,
  })
  @IsInt()
  @IsOptional()
  expiryTime?: number = 0;

  @ApiProperty({ description: 'Включен ли клиент', example: true })
  @IsBoolean()
  @IsOptional()
  enable?: boolean = true;

  @ApiProperty({ description: 'Telegram ID', example: '' })
  @IsString()
  @IsOptional()
  tgId?: string = '';


  @ApiProperty({ description: 'Комментарий', example: 'Premium user' })
  @IsString()
  @IsOptional()
  comment?: string = '';

  @ApiProperty({ description: 'Reset (обычно 0)', example: 0 })
  @IsInt()
  @IsOptional()
  reset?: number = 0;
}

export class ThreeXUiAddClientSettings {
  @ApiProperty({
    type: XuiClient,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => XuiClient)
  clients!: XuiClient[];
}

export class ThreeXUiAddClientRequestBody {
  @ApiProperty({
    description: 'ID inbound в 3x-ui',
    example: 6,
  })
  @IsInt()
  id!: number;

  @ApiProperty({
    description: 'JSON-строка с объектом settings',
    example:
      '{"clients":[{"id":"06c3c327-c619-4998-9bb3-adaced38c68b","email":"5atat4da"}]}',
  })
  @IsString()
  settings!: string;
}

export class ThreeXUiApiResponse<T = unknown> {
  @ApiProperty()
  success!: boolean;

  @ApiProperty()
  msg!: string;

  obj?: T;
}

export class ThreeXUiAddClientResponse extends ThreeXUiApiResponse<null> {}

export class ThreeXUiClientStat {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  inboundId!: number;

  @ApiProperty()
  enable!: boolean;

  @ApiProperty()
  email!: string;

  @ApiProperty()
  uuid!: string;

  @ApiProperty()
  subId!: string;

  @ApiProperty()
  up!: number;

  @ApiProperty()
  down!: number;

  @ApiProperty()
  allTime!: number;

  @ApiProperty()
  expiryTime!: number;

  @ApiProperty()
  total!: number;

  @ApiProperty()
  reset!: number;

  @ApiProperty()
  lastOnline!: number;
}

export class ThreeXUiInboundSettings {
  @ApiProperty({
    type: XuiClient,
    isArray: true,
  })
  clients?: XuiClient[];

  @ApiProperty()
  decryption?: string;

  @ApiProperty()
  encryption?: string;

  testseed?: number[];
}

export class ThreeXUiRealitySettingsPayload {
  @ApiProperty()
  publicKey?: string;

  @ApiProperty()
  fingerprint?: string;

  @ApiProperty()
  serverName?: string;

  @ApiProperty()
  spiderX?: string;

  @ApiProperty()
  mldsa65Verify?: string;
}

export class ThreeXUiRealitySettings {
  @ApiProperty()
  show?: boolean;

  @ApiProperty()
  xver?: number;

  @ApiProperty()
  target?: string;

  @ApiProperty({ type: String, isArray: true })
  serverNames?: string[];

  @ApiProperty()
  privateKey?: string;

  @ApiProperty()
  minClientVer?: string;

  @ApiProperty()
  maxClientVer?: string;

  @ApiProperty()
  maxTimediff?: number;

  @ApiProperty({ type: String, isArray: true })
  shortIds?: string[];

  @ApiProperty()
  mldsa65Seed?: string;

  @ApiProperty({ type: ThreeXUiRealitySettingsPayload })
  settings?: ThreeXUiRealitySettingsPayload;
}

export class ThreeXUiTcpSettings {
  @ApiProperty()
  acceptProxyProtocol?: boolean;

  @ApiProperty({
    type: 'object',
    additionalProperties: true,
  })
  header?: {
    type: string;
  };
}

export class ThreeXUiStreamSettings {
  @ApiProperty()
  network?: string;

  @ApiProperty()
  security?: string;

  @ApiProperty({ type: Array })
  externalProxy?: unknown[];

  @ApiProperty({ type: ThreeXUiRealitySettings })
  realitySettings?: ThreeXUiRealitySettings;

  @ApiProperty({ type: ThreeXUiTcpSettings })
  tcpSettings?: ThreeXUiTcpSettings;
}

export class ThreeXUiSniffing {
  @ApiProperty()
  enabled?: boolean;

  @ApiProperty({ type: String, isArray: true })
  destOverride?: string[];

  @ApiProperty()
  metadataOnly?: boolean;

  @ApiProperty()
  routeOnly?: boolean;
}

export class ThreeXUiInbound {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  up!: number;

  @ApiProperty()
  down!: number;

  @ApiProperty()
  total!: number;

  @ApiProperty()
  allTime!: number;

  @ApiProperty()
  remark!: string;

  @ApiProperty()
  enable!: boolean;

  @ApiProperty()
  expiryTime!: number;

  @ApiProperty()
  trafficReset!: string;

  @ApiProperty()
  lastTrafficResetTime!: number;

  @ApiProperty({ type: ThreeXUiClientStat, isArray: true })
  clientStats!: ThreeXUiClientStat[];

  @ApiProperty()
  listen!: string;

  @ApiProperty()
  port!: number;

  @ApiProperty()
  protocol!: string;

  @ApiProperty()
  settings!: string;

  @ApiProperty()
  streamSettings!: string;

  @ApiProperty()
  tag!: string;

  @ApiProperty()
  sniffing!: string;
}

export class ThreeXUiGetInboundsResponse extends ThreeXUiApiResponse<
  ThreeXUiInbound[]
> {}
