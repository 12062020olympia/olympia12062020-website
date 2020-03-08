export const Grey900 = '#1A1A1A';
export const Grey800 = '#434343';
export const Grey700 = '#595959';
export const Grey600 = '#8C8C8C';
export const Grey500 = '#BFBFBF';
export const Grey400 = '#D9D9D9';
export const Grey300 = '#F0F0F0';
export const Grey200 = '#F5F5F5';
export const Grey100 = '#FAFAFA';

export const White = '#FFFFFF';
export const Black = '#000000';

// Main Colors
export const Orange = '#F2910F';
export const Yellow = '#FBC11D';
export const Blue = '#8DD0F1';
export const Red = '#E42E2C';
export const Pink = '#F3B8D3';
export const Green = '#BDCE1B';

// Minor Colors

export const Apricot = '#F9D2B0';
export const Foliage = '#BFCD46';
export const Dandelion = '#FFF3B4';
export const PigSkin = '#E6DAD1';
export const CanneryPark = '#BDB09D';
export const FishPond = '#83C9EC';
export const MentalFoss = '#DFB0C8';
export const CapeHope = '#D7D8D8';

export const BrandPrimary500 = Yellow;
export const BrandPrimary300 = '#FED35A';
export const Primary = BrandPrimary500;
export const Secondary = Dandelion; // todo: remove;
export const FocusColor = '#007AFF';

// Fonts
export const DefaultFontColor = Grey900;

// Button Colors
export const ButtonColor = Primary;
export const ButtonHoverColor = BrandPrimary500;
export const ButtonFocusBorderColor = FocusColor;

// Icon Button Colors
export const IconButtonColor = Black;
export const IconButtonHoverColor = Grey600;
export const IconButtonFocusBorderColor = FocusColor;

// Input Colors
export const InputBorderColor = Grey500;
export const InputPlaceholderColor = Grey500;
export const InputHoverBorderColor = Grey600;
export const InputFocusBorderColor = Grey900;
export const CheckboxSelectedColor = Black;

// Page Styles

export interface PageStyle {
  primary: string;
  secondary: string;
  text: string;
}

export const pageStyle: Record<string, PageStyle> = {
  blue: {
    primary: Blue,
    secondary: Secondary,
    text: DefaultFontColor,
  },
  yellow: {
    primary: Dandelion,
    secondary: Yellow,
    text: DefaultFontColor,
  },
  green: {
    primary: Green,
    secondary: Foliage,
    text: DefaultFontColor,
  },
};
