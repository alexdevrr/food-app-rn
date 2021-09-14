export interface Hamburguesa {
  hamburguesa_img: HamburguesaImg[];
  _id: string;
  hamburguesa_desc: string;
  hamburguesa_nom: string;
  hamburguesa_precio: number;
  published_at: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  calorias: number;
  categoria?: string;
  hamburguesa_calif?: number;
  hamburguesa_tiempo: HamburguesaTiempo;
  propiedade?: string;
  calificacion: string;
  tiempo: Tiempo;
  hamburguesa_calificacion: number;
  categorias: Categoria[];
  id: string;

  // AGREGADO:
  uri: string;
}

export interface Categoria {
  _id: string;
  categoria_nom: string;
  published_at: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  hamburguesa: string;
  id: string;
}

export interface HamburguesaImg {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  width: number;
  height: number;
  url: string;
  provider_metadata: ProviderMetadata;
  formats: Formats;
  provider: Provider;
  related: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export enum EXT {
  Jpg = '.jpg',
}

export interface Formats {
  thumbnail: Large;
  large: Large;
  medium: Large;
  small: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
  provider_metadata: ProviderMetadata;
}

export enum MIME {
  ImageJPEG = 'image/jpeg',
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: ResourceType;
}

export enum Provider {
  Cloudinary = 'cloudinary',
}

export enum HamburguesaTiempo {
  The2530Min = '25 - 30 min',
  The3035Min = '30 - 35 min',
  The3045Min = '30 - 45 min',
}

export enum Tiempo {
  The613797306Ef2F29869802B15 = '613797306ef2f29869802b15',
  The6137973D6Ef2F29869802B16 = '6137973d6ef2f29869802b16',
  The613797606Ef2F29869802B17 = '613797606ef2f29869802b17',
}

export interface Menus {
  _id: string;
  menu_tipo: string;
  published_at: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  menu_img: MenuImg;
  id: string;
}

export interface MenuImg {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  width: number;
  height: number;
  url: string;
  provider_metadata: ProviderMetadata;
  formats: Formats;
  provider: string;
  related: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export enum EXT {
  PNG = '.png',
}

export interface Formats {
  thumbnail: Small;
  small: Small;
}

export interface Small {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
  provider_metadata: ProviderMetadata;
}

export enum MIME {
  ImagePNG = 'image/png',
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = 'image',
}
