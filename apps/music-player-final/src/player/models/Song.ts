export interface ISong {
  id: string | number;
  title: string;
  duration: number;
  performer: string;
}

export interface IDetailedSong extends ISong {
  description: string;
  copiesSold: number;
}
