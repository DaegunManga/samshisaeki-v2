export interface RegisterBody {
  email: string;
  name: string;
  nickname: string;
  year: number;
  nthclass: number;
}

export interface SendMailBody {
  email: string;
}

export interface ValidateBody {
  email: string;
  key: string;
}
